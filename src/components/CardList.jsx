import React, {useState} from 'react'

const CardList = ({id, title, mediaLink, deleteCard, editCard, addHistory, activeBucket}) => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = () => {
        setIsModalOpen(true);
        addHistory(id)
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        console.log("isMediaOpen: ", isModalOpen)
    };


    function handleDelete() {
        deleteCard(id)
    }

    function handleEdit(){
        editCard(id)
    }

    return (
    <div className='w-[90%] border-2 '>
        <div className='' >
                <p className='' onClick={handleCardClick}>{title}</p>
                {isModalOpen && (
                    <div>
                    <iframe width="420" height="315" src={mediaLink} title="video player" allowFullScreen></iframe>
                    
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