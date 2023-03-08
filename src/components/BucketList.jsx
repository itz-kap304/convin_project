import React,{useState,useEffect} from 'react'

const BucketList = ({bucketMembers}) => {
    
    let uniqueBucketNames = [...new Set(bucketMembers.map(item => item.bucketName))];
    const [bucketTypes, setBucketTypes] = useState(uniqueBucketNames);

    const [newBucketName, setNewBucketName] = useState("");
    const [addClicked, setAddClicked] = useState(false);
    
    function handleAdd () {
        setAddClicked(true);
    }

    function handleBucketName(event){
        const {value} = event.target;
        setNewBucketName(value);
    }

    function addBucket(){
        setBucketTypes([...bucketTypes,newBucketName]);
        setAddClicked(false);
        setNewBucketName("");
    }

  return (
    <div>
        <p>Bucket Items:</p>
        {bucketTypes.map(member => {
            return <p>{member}</p>
        })}

        {addClicked ? 
            <div> 
            <label>
            Bucket Name:
            <input type="text" name="newBucketName" value={newBucketName} onChange={handleBucketName}/>
            <button onClick={addBucket}>Add Bucket</button>
        </label>
            </div>: null}
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default BucketList