import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const[user,setUser] = useState(null)
  const[isLoading,setIsLoading] = useState(true)
  const[isError,setIsError] = useState(false)
  useEffect(()=>{
    const fetchData = async()=>{
     try{
      const response = await fetch(url)
      if(!response.ok){
        setIsError(true)
        setIsLoadin(false)
        return
      }
      const user = await response.json()
      setUser(user)
      console.log(user);
     }
     catch(err){
      console.log(err);
      setIsError(err)
     }
     setIsLoading(false)
    }
    fetchData()
  },[])
  if(isLoading){
  return <h2>Fetch Data </h2>;
}
  if(isError){
  return <h2>Error occured </h2>;}
  const{avatar_url,company,bio} = user
  return(
    <div style={{width:'400px', height:'auto', padding:'10px',borderRadius:'10px', backgroundColor:'lightblue', display:'flex',flexDirection:'column'}}>
    <img src={avatar_url} alt='user image' style={{width:'100px', borderRadius:'50px'}} />
    <p>{company}</p>
    <p>{bio}</p>
    </div>
  )
};
export default MultipleReturnsFetchData;
