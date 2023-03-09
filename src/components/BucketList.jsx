import React,{useState,useEffect} from 'react'

const BucketList = ({bucketMembers,newBucketAdded, setActiveBucket, activeBucket}) => {
    console.log(activeBucket)
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
        newBucketAdded(newBucketName);
        setAddClicked(false);
        setNewBucketName("");
    }

    
  return (
    <div>
        <p className='pt-12 text-xl font-bold py-2'>Buckets :</p>
        <div className='flex border-2 border-gray-500 w-[90%]'>
            {bucketTypes.map(member => {
                return <div className=' ml-2 pr-2 border-gray-500 border-r-2'>
                            <p  className={ activeBucket === member ? 
                                'flex font-bold bg-[#00df9a] text-black my-1 cursor-pointer rounded-sm':
                                'flex font-bold hover:bg-[#00df9a] hover:text-black my-1 cursor-pointer rounded-sm' 
                            }
                                onClick = {() => setActiveBucket(member)}>
                                    {member}
                                </p>
                        </div>
                    
            })}

        {addClicked ? 
            <div> 
            <label className='ml-2 font-bold'>
            Bucket Name:
            <input className='border-2 ml-2 my-1 rounded-sm text-black'
                type="text"
                name="newBucketName"
                value={newBucketName} 
                onChange={handleBucketName}
            />
            <button onClick={addBucket} className='ml-2 border-2 px-2 hover:bg-[#00df9a] hover:text-black rounded-sm'>Add Bucket</button>
        </label>
            
            </div>: <button onClick={handleAdd} className=' ml-2 pr-2 border-gray-500 border-r-2' >+</button>}
        
        </div>
    </div>
  )
}

export default BucketList