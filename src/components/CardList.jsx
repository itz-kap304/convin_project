import React, {useState} from 'react'

const CardList = ({id, title, mediaLink, deleteCard, editCard, addHistory, activeBucket,bucketName}) => {
    
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
        <div className='w-[20%] h-[75%] my-5 mx-5 bg-[#00df9a] text-black rounded-md ' >
                <p className='font-bold justify-center flex py-6' onClick={handleCardClick}>{title}</p>
                {isModalOpen && (
                    <div>
                    <iframe className='[w-425px] h-[250px]'  src={mediaLink} title="video player" allowFullScreen></iframe>
                    
                    </div>
                )}
                <div className='flex justify-center'>
                    {!isModalOpen ?<button onClick={handleDelete} className="bg-black text-white mt-3 mx-2 mb-2 px-2 rounded-sm hover:text-red-500">Delete</button> : null}
                    {!isModalOpen ?<button onClick={handleEdit} className="bg-black text-white mt-3 mx-2 mb-2 px-2 rounded-sm hover:text-yellow-500" >Edit</button> : null}
                </div>
        </div>
        <div>
            {isModalOpen ? <button className='mx-[150px] my-2 px-2 font-bold hover:text-black hover:bg-[#00df9a] ' onClick={handleCloseModal}>Close</button> : null}

        </div>
    </div>
  )
}

export default CardList