import React, { useState } from "react";

function Card(props) {
    
  

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
    props.onAdd(cardData);
    setcardData({title : "",mediaLink:""})
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title :
        <input
          type="text"
          name="title"
          value={cardData.title}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Media Link:
        <input
          type="text"
          name="mediaLink"
          value={cardData.mediaLink}
          onChange={handleChange}
        />
      </label>
      <br />

      <label >Select a Bucket:</label>
      <select name="bucketName" value={cardData.bucketName} onChange={handleChange}>
        <option value="">--Select--</option>
        {props.bucketNames.map(name => 
        {
        return <option value = {name}>{name}</option>
        })}
      </select>
      {console.log(cardData)}
      <button type="submit">{props.submitButton ? `Submit` : `Edit`}</button>
    </form>
  );
}

export default Card;