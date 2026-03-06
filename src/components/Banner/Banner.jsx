import React from 'react'
import image from '../../assets/vector1.png'
export default function Banner({ticketList,resolvedTask}) {
  return (
    <div className='flex flex-col md:flex-row justify-center gap-20 mt-10'>
      <div className="relative w-96 h-72 rounded-xl flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 overflow-hidden">

      <img
        src={image}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      <div className="relative text-center text-white ">
        <p className="text-lg">In-Progress</p>
        <h1 className="text-6xl font-bold">{ticketList.length}</h1>
      </div>

    </div>
     <div className="relative w-96 h-72 rounded-xl flex items-center justify-center bg-gradient-to-r from-green-500 to-green-700 overflow-hidden">

      <img
        src={image}
        className="absolute inset-0 w-full h-full object-cover opacity-40 "
      />

      <div className="relative text-center text-white">
        <p className="text-lg">Resolved</p>
        <h1 className="text-6xl font-bold">{resolvedTask.length}</h1>
      </div>

    </div>
   

    </div>
  );
}
