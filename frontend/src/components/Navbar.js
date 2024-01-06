import React from 'react'
import axios from 'axios'
import { IoIosSearch } from "react-icons/io";
export default function Navbar({userData,setuserData,seturldata}) {
  const searchUser =async()=>{
   let data = await axios.get(`https://api.github.com/users/${userData}`)
   seturldata(data)
  }
  const handlechange = (e)=>{
    setuserData(e.target.value)
  
  }
  return (
    <div className='bg-red-500 px-3 py-3'>
   <div className=' flex w-full items-center justify-center' >
   <div className=' bg-green-200 flex  items-center justify-center'>
    <input
        placeholder='github user name'
        value={userData}
        onChange={handlechange}
        type='text'
        className='px-2 py-1 sm:mx-2 outline-none'
    />
    <IoIosSearch onClick={searchUser} className='text-xl cursor-pointer'  />
   </div>
</div>


    </div>


  )
}
