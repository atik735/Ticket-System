import React from 'react'
import { CiCalendar } from "react-icons/ci";

export default function Tickets({data,handleTicket}) {
    
  return (
    <div onClick={()=>handleTicket(data)} key={data.id}><div className="card card-border bg-base-200 w-96">
  <div className="card-body">
    <div className="flex justify-between">
      <h1 className="text-xl font-bold">{data.title}</h1>
      <h1 className={`px-3 py-1 rounded-xl ${data.status==="Open"?"bg-green-400":"bg-yellow-300"}`}>{data.status}</h1>
    </div>
    <p>{data.description}</p>
    <div className="flex justify-between" >
     <div className="flex gap-3">
      <h1 id='progress'>#{data.id}</h1>
      <h1>{data.priority}</h1>
     </div>
     <div className="flex gap-3">
      <h1>{data.customer}</h1>
      <div className="flex gap-1 items-center">
        <CiCalendar className="text-xl" />
        <h1>{data.createdAt}</h1>
      </div>
      
     </div>
    </div>
  </div>
</div></div>
  )
}
