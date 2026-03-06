import React from 'react'

export default function TaskStatus({ticketList,handleResolve}) {
  return (
   <div>
     {
        ticketList.map((singleTicket=><div className="px-5 py-3 bg-white mt-5 w-full ">
               
                <div className="card w-full space-y-2">
                 <h1>{singleTicket.title}</h1>
                <button onClick={()=>handleResolve(singleTicket)} className="px-28 py-2 bg-green-700 text-white ">Complete</button>
                </div>
              </div>))
    }
   </div>
  )
}
