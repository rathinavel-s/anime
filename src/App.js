import{useEffect, useState } from 'react';
import Fetchs from './components/Fetchs';





function App() {
 
const [images,setimage] =useState([])
  const API_URL ="https://api.jikan.moe/v4/anime?q=naruto&limit=20"

useEffect(()=>{
   const  fetchPhoto = async()=>{
     try{
      const Response =await fetch(API_URL)
      console.log(Response)
      if(!Response.ok) throw Error ("fetch Error")
        const data = await Response.json()
      setimage(data.data)
     }catch (err){
      console.log(err.message)
     }
   }
    fetchPhoto()
},[])

  
  return (
    <div className="App">
      <Fetchs
      images={images}
      setimages={setimage}  />
    </div>
  );
}

export default App;
