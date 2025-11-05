import React, {  useEffect, useState } from 'react'
import { useAuth } from './Context'

export const GetCards = () => {
// console.log(props);
const [local,setLocal]=useState([])
// const {getData,setGetData}=props.data
const {getData,setGetData,setInput,setBtn,btn}=useAuth()

  const handleDelete=async(id)=>{
    
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
      method:"DELETE"
    });
// console.log(getData);


const filtered=getData.filter((curr)=>{
  return curr.id!==id;
})
  

// console.log(filtered);



setGetData(filtered)


  }




const handleEdit=(body,title,id)=>{
  console.log(body,title,id);

setInput((prev)=>{
  console.log(prev);
  return(
    {
      id,
  body,
  title
    }
  )
});


setBtn(!btn)
}





useEffect(()=>{
  // console.log(getData);
  
localStorage.setItem('filtered',JSON.stringify(getData))

 
},[getData])
  

useEffect(()=>{
  



try {

  const localData=JSON.parse(localStorage.getItem("filtered"))

setLocal(localData)



} catch (err) {
  console.error("Failed to parse cards from localStorage:", err);
 
}
},[getData])

  // console.log(local);
 return(
    <>
    {
  // getData&&
  local&&



  <div className='m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 '>

{
  local.map((curr)=>{
    return(
<>
<div className='m-2 shadow rounded p-4 '>
  <div>Id:{curr.id}</div>
      <div><span className=' text-indigo-400'>Body:</span>{curr.body}</div>
      <div><span className=' text-indigo-400'>Title:</span>{curr.title}</div>

<button className='px-4 py-2 font-semibold text-white bg-emerald-300 rounded my-4   cursor-pointer hover:scale-105 hover:bg-emerald-400 transition-all duration-300 ' onClick={()=>handleDelete(curr.id)}>Delete</button>
 <button className='px-4 py-2 font-semibold text-white bg-emerald-300 rounded my-4   cursor-pointer hover:scale-105 hover:bg-emerald-400 transition-all duration-300 mx-3 ' onClick={()=>handleEdit(curr.body,curr.title,curr.id)} >Edit</button> 



</div>
</>
    )
  })
}


  </div>
}
    </>
 )
  
}
