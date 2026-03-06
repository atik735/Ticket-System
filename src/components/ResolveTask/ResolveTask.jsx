import React from 'react'

export default function ResolveTask({resolvedTask}) {
  return (
    <div className='mt-5 space-y-2'>
      <h1 className="text-xl font-bold">Resolved Task</h1>
      {
        resolvedTask.length===0?<h1>No Resolved Task</h1>:<div className='text-lg space-y-3 '>
          {
            resolvedTask.map((task)=><h1 className='bg-gray-300 px-28 rounded-xl truncate py-2'>{task.title}</h1>)
          }
        </div>
      }
      

    </div>
  )
}
