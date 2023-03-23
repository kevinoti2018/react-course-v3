import { useState } from 'react';

const ShortCircuitOverview = () => {
  const[name,setName]=useState(true)
  const[title,setTitlee]=useState(false)
  return( 
    <div>
      <h2>short circuit overview</h2>;
      {name||title ? <h1>yes</h1>:<h1>no</h1>}
      {name&&title ? <h1>yes</h1>:<h1>no</h1>}
    </div>
    )
};
export default ShortCircuitOverview;
