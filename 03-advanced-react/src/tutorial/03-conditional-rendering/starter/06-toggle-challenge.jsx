import { useState } from 'react';

const ToggleChallenge = () => {
  const[isEditing,setIsEditing]=useState(false)
  return (
    <div>
    
    {isEditing &&<h2>toggle challenge</h2>}
    <button className='btn' onClick={()=>setIsEditing(!isEditing)}>{isEditing?"add":"edit"}</button>
    </div>
    )
};

export default ToggleChallenge;
