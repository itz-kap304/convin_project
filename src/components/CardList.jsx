import React, {useState} from 'react'

const CardList = (props) => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = () => {
        setIsModalOpen(true);
        props.addHistory(props.id)
        console.log("This is running")
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        console.log("isMediaOpen: ", isModalOpen)
    };


    function handleDelete() {
        props.deleteCard(props.id)
    }

    function handleEdit(){
        props.editCard(props.id)
    }

    return (
    <div>
        <div onClick={handleCardClick}>
                <p>{props.title}</p>
                {isModalOpen && (
                    <div>
                    <iframe width="420" height="315" src={props.mediaLink} title="video player" allowFullScreen></iframe>
                    
                    </div>
                )}
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleEdit}>Edit</button>
        </div>
        <div>
            {isModalOpen ? <button onClick={handleCloseModal}>Close</button> : null}

        </div>
    </div>
  )
}

export default CardList