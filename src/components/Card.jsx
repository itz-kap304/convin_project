import React, { useState } from "react";

function Card({submitButton,setSubmitButton,editElement,bucketNames,onAdd}) {
  
  const [cardData, setcardData] = useState({
    title : "",
    mediaLink: "",
    bucketName : ""
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setcardData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(cardData);
    setcardData({title : "",mediaLink:""})
  };

  function editCardDetails() {
    console.log("Edit Clicked")
    setcardData(prevDetails => {
      return {...prevDetails, title : editElement.title,
         mediaLink : editElement.mediaLink,
         bucketName : editElement.bucketName
      }
    })
    console.log("Card Data : ",cardData)
  }

  return (
    <div >
      {editElement.title === undefined ? 
        <form className="ml-36 mt-12 pt-6 w-[50%] border-solid border-2 border-[#00df9a] rounded-xl" onSubmit={handleSubmit}>
          <label className="text-[#00df9a] ml-14 font-bold text-xl justify-center flex">
            Title :
            <input className="border-2 mx-2 rounded-md"
              type="text"
              name="title"
              value={cardData.title}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className="text-[#00df9a] mx-auto font-bold text-xl justify-center flex">
            Media Link:
            <input className="border-2 mx-2 rounded-md"
              type="text"
              name="mediaLink"
              value={cardData.mediaLink}
              onChange={handleChange}
            />
          </label>
          <br />

          <label className="text-[#00df9a] ml-12 font-bold text-xl flex">
            Select a Bucket:
            <select className="border-2 mx-2 rounded-md" name="bucketName" value={cardData.bucketName} onChange={handleChange}>
              <option value="" >---Select---</option>
              {bucketNames.map(name => 
              {
              return <option value = {name}>{name}</option>
              })}
            </select>
          </label>
          
          <button className="text-[#00df9a] my-8 px-3 py-1 ml-[40%] font-bold text-xl  border-2 rounded-md hover:bg-[#00df9a] hover:text-black" type="submit">
            Submit
          </button>
        </form> :
        <div>
          {editCardDetails}
          <form className="ml-36 mt-12 pt-6 w-[50%] border-solid border-2 border-[#00df9a] rounded-xl" onSubmit={handleSubmit}>
          <label className="text-[#00df9a] ml-14 font-bold text-xl justify-center flex">
            Title :
            <input className="border-2 mx-2 rounded-md"
              type="text"
              name="title"
              value={cardData.title}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className="text-[#00df9a] mx-auto font-bold text-xl justify-center flex">
            Media Link:
            <input className="border-2 mx-2 rounded-md"
              type="text"
              name="mediaLink"
              value={cardData.mediaLink}
              onChange={handleChange}
            />
          </label>
          <br />

          <label className="text-[#00df9a] ml-12 font-bold text-xl flex">
            Select a Bucket:
            <select className="border-2 mx-2 rounded-md" name="bucketName" value={cardData.bucketName} onChange={handleChange}>
              <option className="" value="">--Select--</option>
              {bucketNames.map(name => 
              {
              return <option value = {name}>{name}</option>
              })}
            </select>
          </label>
          
          <button className="text-[#00df9a] my-8 px-3 py-1 ml-[40%] font-bold text-xl  border-2 rounded-md hover:bg-[#00df9a] hover:text-black" type="submit">Edit</button>
        </form>
        </div>

      
    }
    </div>  
  );
}

export default Card;