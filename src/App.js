import React,{useState} from 'react'
import BucketList from './components/BucketList'
import Card from './components/Card'
import CardList from './components/CardList'
import History from './components/History'


const App = () => {

  const [bucketMembers, setBucketMembers] = useState([
    {
      title: "This is a title",
      mediaLink : "https://www.youtube.com/embed/dQw4w9WgXcQ",
      bucketName : "Educational"
    },
    {
      title: "This is 2nd video",
      mediaLink : "https://www.youtube.com/embed/dQw4w9WgXcQ",
      bucketName : "Educational"
    },
    {
      title: "This is 3rd video",
      mediaLink : "https://www.youtube.com/embed/dQw4w9WgXcQ",
      bucketName : "Motivational"
    }
  ]);
  
  const [bucketNames, setbucketNames] = useState(["Educational","Motivational"]);
  const [history, setHistory] = useState([]);

  const [submitButton, setSubmitButton] = useState(true);
  const [editElement, setEditElement] = useState({});

  const [activeBucket, setActiveBucket] = useState("Educational");

  function addCard(cardData) {
    setBucketMembers(prevBucketMembers => {
      return [...prevBucketMembers, cardData];
    })
  }

  function deleteCard(id) {
    setBucketMembers(prevMembers => {
      return prevMembers.filter((prevItem, index) => {
        return index !== id;
      })
    })
  }

  function editCard(id) {
      console.log("Edit triggered for id: ",id)
      setSubmitButton(!submitButton);
      let triggeredCard = bucketMembers.find((elem,index) => {
          return index === id
      });
      
      const newObject = {...editElement, title:triggeredCard.title,
        mediaLink : triggeredCard.mediaLink,
        bucketName : triggeredCard.bucketName}
      setEditElement(newObject);
  }

  function addHistory(id){
    console.log("History added for id: ",id)
    let triggeredCard = bucketMembers.find((elem,index) => {
          return index === id
      });
    const newObject = {
      title: triggeredCard.title,
      mediaLink : triggeredCard.mediaLink,
      time : new Date().toLocaleTimeString()
    }
    setHistory(prevHistory => {
      return [...prevHistory,newObject]
    })
  }

  function newBucketAdded(bucketName){
    setbucketNames(prevBuckets => {
      return [...prevBuckets,bucketName];
    })
  }
  
  
  return (
    <div className='flex flex-col-2 '>
      
      <div className='w-1/3'>
        <History history = {history}/>
      </div>

      <div className='w-2/3'>
      <Card
          onAdd = {addCard}
          submitButton = {submitButton}
          setSubmitButton = {setSubmitButton}
          editElement = {editElement}
          bucketNames = {bucketNames}
        />

        <BucketList bucketMembers ={bucketMembers}
                    setActiveBucket = {setActiveBucket}
                    newBucketAdded = {newBucketAdded}
        />

{/*     {bucketMembers.map((member,id) => {
          member.bucketName === activeBucket ? 
            <CardList 
              key = {id}
              id = {id}
              title={member.title}
              mediaLink ={member.mediaLink} 
              deleteCard={deleteCard}
              editCard = {editCard}
              addHistory = {addHistory}
            /> : null                                 // Issue
        })} */}

          
        {bucketMembers.map((member,id) => {          
          return  <CardList 
              key = {id}
              id = {id}
              title={member.title}
              mediaLink ={member.mediaLink} 
              deleteCard={deleteCard}
              editCard = {editCard}
              addHistory = {addHistory}
            />                                 
        })}
      </div>

        


    </div>
  )
}

export default App
