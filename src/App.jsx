import React, { useEffect, useState } from 'react'
import { getApi, getAxiosData } from './getApi';
import { GetCards } from './GetCards';
import { FetchIndv } from './FetchIndv';
import { AxiosIndv } from './AxiosIndv';
import { Context } from './Context';

const App = () => {

const [data,setData]=useState(null);
const [axiosData,setAxiosData]=useState(null)
const [load,setLoad]=useState(0)
// const [post,setPost]=useState(1)
// const [myData,setMyData]=useState({})
const [getData,setGetData]=useState([])

const [btn,setBtn]=useState(false)


const [input,setInput]=useState({
  id:"",
  body:"",
  title:"",
  
})



useEffect(()=>{
getDataApi();

 
  
},[])



const handleBtnClick=(e)=>{
e.preventDefault();


if(e.nativeEvent.target.value=="Create Data || Add Data"){
  console.log("called");

postData()


}


if(e.nativeEvent.target.value=="Edit"){

EditData();
}
  
}

const postData=async()=>{
   


const res=await fetch(`https://jsonplaceholder.typicode.com/posts`,{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },

  body:JSON.stringify(input)
})
  

const data=await res.json()

console.log(data);

setGetData((prev)=>{
  return [data,...prev,]
})


setInput({
  id:"",
    body:"",
  title:""
})

}





// console.log(getData);

const EditData=async()=>{
  
  console.log(input);
  const {body,title,id}=input;

  console.log(body,title,id);
  
 const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
    method:"PATCH",
        headers: { "Content-Type": "application/json" },
    body:JSON.stringify({
       title,
      body,
     
    })
  }


)

// console.log(res);
const data=await res.json()

console.log(data);



const EditData=getData.map((curr)=>{
  // console.log(curr);

  return curr.id==data.id?{...curr,body:data.body,title:data.title}:curr
})


console.log(EditData);

setGetData(EditData)

setInput({
  id:"",
    body:"",
  title:""
});


setBtn(!btn)
}

const getDataApi=()=>{


   fetch(`https://jsonplaceholder.typicode.com/posts`,
    {
      method:"GET",
      headers:{
        "Content-Type":"application/json",
      }
    }
  )
  .then((res)=>{
    return res.json()
  })
  .then((data)=>{
    // console.log(data);
    setGetData(data)

    
  });

  // console.log(data);
  

}




  useEffect(()=>{

const res=getApi();
res.then((data)=>{
  // console.log(data.results);
  

  if(data){
    setData(data.results)
  }
});




  },[load])

  // console.log(data);


useEffect(()=>{
  const res=getAxiosData();
  res.then((data)=>{
    // console.log(data.data.results);
    setAxiosData(data.data.results);
  })

  
},[])






//post request

const handleInput=(e)=>{
// console.log(e.target.value)
setInput((prev)=>{
  return({...prev,body:e.target.value})
})

  
}

const handleInputEmail=(e)=>{
// console.log(e.target.value)
setInput((prev)=>{
  return({...prev,title:e.target.value})
})

  
}











// console.log(myData);


const refresh=()=>{
   const res=getAxiosData();
  res.then((data)=>{
    // console.log(data.data.results);
    setAxiosData(data.data.results);
  })
}


if(data){
    return (
      <>

<div className='p-4 rounded shadow-2xl m-6 '>
<h1>The new Post is added to front of list because its difficult to check after each post </h1>


  {/* <div className='text-2xl'>{axiosData[0].gender}</div> */}
<form action="" className='flex flex-col items-center justify-center'>
  
  
  <input type="text" placeholder='Enter Your Title' className='focus:outline-violet-400 rounded m-3 p-2 shadow-red-100 border-gray-500  border w-full'  value={input.body} onChange={(e)=>handleInput(e)} required/>



  <input type="email" placeholder='Enter You Body' className='focus:outline-violet-400 rounded m-3 p-2 shadow-black border-gray-500  border w-full' value={input.title} onChange={(e)=>handleInputEmail(e)} required/>

  


  <button type="submit" className=" p-3 bg-emerald-400 font-semibold rounded hover:scale-105 hover:text-white transition-all duration-300 cursor-pointer mb-2" onClick={(e)=>handleBtnClick(e)}   disabled={!input.body||!input.title} value={btn?"Edit":"Create Data || Add Data"}>{btn?"Edit":"Create Data || Add Data"}</button>


</form>



</div>






<Context.Provider value={{getData,setGetData,setInput,setBtn,btn}}>
  {/* <GetCards data={{getData,setGetData}}></GetCards> */}
  <GetCards ></GetCards>

</Context.Provider>

<FetchIndv data={{data,setLoad}} ></FetchIndv>

<AxiosIndv data={{refresh,axiosData}}></AxiosIndv>


</>
  )}

}


export default App