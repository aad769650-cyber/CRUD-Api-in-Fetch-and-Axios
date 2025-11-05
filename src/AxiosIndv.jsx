import React from 'react'

export const AxiosIndv = (props) => {
  

    const {axiosData,refresh}=props.data
  
    return (
    <>
    {axiosData&&
    
    <div className='p-4 rounded shadow-2xl m-6 flex flex-col items-center justify-center'>
    <h1>GET Through Axios</h1>
    <img src={`${axiosData?axiosData[0].picture.large:null}`} alt="" className='object-cover'/>
      <div className='text-2xl'>{axiosData.map((curr)=>{
        return(
          <>
          
          {/* <h1>h</h1> */}
          <div>{curr.gender}</div>
          <div>{curr.email}</div>
          </>
        )
      })}</div>
      {/* <div className='text-2xl'>{axiosData[0].gender}</div> */}
    
      <button className="p-3 bg-emerald-400 font-semibold rounded" onClick={refresh}>Refresh</button>
    </div>
    
    
    //Post Data
    
    
    
    
    }
    </>

  )
}
