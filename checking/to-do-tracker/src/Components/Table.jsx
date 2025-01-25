import React from 'react'

const Table = ({items,setItem,handleEdit}) => {

  const handleDelete=(id)=>{
    const update=items.filter(item=>item.id !==id)
    setItem(update)

  }
 
  return (
   <table className='w-full mt-9 border-collapse '>
    <tr>
        <th className='text-2xl bg-zinc-200 text-black border border-slate-500 py-2 text-center'>Number</th>
        <th className='text-2xl bg-zinc-200 text-black border border-slate-500 py-2 text-center'>Work</th>
        <th className='text-2xl bg-zinc-200 text-black border border-slate-500 py-2 text-center'>Start Time</th>
        <th className='text-2xl bg-zinc-200 text-black border border-slate-500 py-2 text-center'>End Time</th>
        <th className='text-2xl bg-zinc-200 text-black border border-slate-500 py-2 text-center'>Status</th>
    </tr>
    
      {items.map((item,ind)=>(
        <tr key={ind} className='border-collapse '>
          <td className='bg-white text-black text-center py-2 border border-slate-400'>{ind+1}</td>
          <td className='bg-white text-black text-center py-2 border border-slate-400'>{item.work}</td>
          <td className='bg-white text-black text-center py-2 border border-slate-400'>{item.start}</td>
          <td className='bg-white text-black text-center py-2 border border-slate-400'>{item.end}</td>
          <td className='text-center bg-white'>
            <button className='bg-green-300 text-center m-2  px-3 py-2 ' onClick={()=>handleEdit(item)}>Edit</button>
            <button className='bg-red-300 text-center m-2 px-3 py-2 ' onClick={()=>handleDelete(item.id)}>Done</button>
          </td>
        </tr>
      ))}
   
    
   </table>
  )
}

export default Table
