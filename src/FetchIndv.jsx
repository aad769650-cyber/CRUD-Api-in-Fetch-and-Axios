import React from 'react'

export const FetchIndv = (props) => {


const {data,setLoad}=props.data
    
  return (
  <>
  <div className='p-4 rounded shadow-2xl m-6 flex flex-col items-center justify-center'>
<h1>GET Through Fetch</h1>
<img src={`${data?data[0].picture.large:null}`} alt="" className='object-cover'/>
  <div className='text-2xl'>{data.map((curr)=>{
    return(
      <>
      
      {/* <h1>h</h1> */}
      <div>{curr.gender}</div>
      <div>{curr.email}</div>
      </>
    )
  })}</div>
  {/* <div className='text-2xl'>{data[0].gender}</div> */}

 
 
 
 
  <button className="p-3 bg-emerald-400 font-semibold rounded" onClick={()=>setLoad((prev)=>prev+1)}>Refresh</button>
</div>
  </>)
}
