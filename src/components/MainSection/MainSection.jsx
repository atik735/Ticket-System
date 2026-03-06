import { use, useState } from "react"
import Tickets from "../Tickets/Tickets";
import TaskStatus from "../TaskStatus/TaskStatus";
import ResolveTask from "../ResolveTask/ResolveTask";
import Banner from "../Banner/Banner";
import { ToastContainer, toast } from 'react-toastify';


export default function MainSection({ticket}) {

  

   const ticketData = use(ticket)

   const [ticketList,setTicketList]=useState([])
   const [resolvedTask,setResolvedTask]=useState([])

   const handleTicket = (ticket)=>{
    setTicketList([...ticketList,ticket])
    toast("Ticket In Progress!");
   }

   const handleResolve = (task)=>{

    setResolvedTask([...resolvedTask,task])
     toast("Tsak Resolved!");

     const newTicektList = ticketList.filter((singleTicket)=>singleTicket.title !==task.title)

     setTicketList(newTicektList)

   }

  
  return (
    <div className='w-11/12 mx-auto mt-10'>
      <Banner ticketList={ticketList} resolvedTask={resolvedTask}></Banner>
    <ToastContainer />
      <div className="flex flex-col md:flex-row gap-10 space-y-3 mt-10">
       
      <div className="space-y-3">
        <h1 className="text-xl font-bold">Customer Tickets</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
         {
          ticketData.map((data=><Tickets handleTicket={handleTicket} data={data}></Tickets>))
        }
       </div>
      </div>

        <div>

          <div>
            <h1 className="text-xl font-bold">Task Status</h1>
            <div>
             <TaskStatus ticketList={ticketList} handleResolve={handleResolve}></TaskStatus>
            </div>
          </div>
          <div>
            <ResolveTask resolvedTask={resolvedTask}></ResolveTask>
          </div>

        </div>
      </div>
    </div>
  )
}
