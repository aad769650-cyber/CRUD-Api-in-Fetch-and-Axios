import axios from 'axios';
import React from 'react'




const api=axios.create({
    baseURL:"https://randomuser.me/"
})
export const getApi =async () => {

const data=await fetch("https://randomuser.me/api/",{method:"Get"});

return data.json();

}



export const getAxiosData=async()=>{
return  await api.get(`api/`) 
}
