import { useEffect, useState } from 'react';
import CompletedMarker from './CompletedMarker';
import DeleteMarker from './DeleteMarker';
import ImportantMarker from './ImportantMarker';

export default function Task({task: {completed, label, important}}){
    // const [important, setImportant] = useState(completed)
    const [status, setStatus] = useState({completed: false, label: '', important: false})
    // console.log(status.completed,status.label, status.important)

    useEffect(()=> setStatus({completed: completed, label: label,important: important}), [])

    function handleStatus(newVal){
      // console.log(status)
      setStatus(preVal => {
        return {
        ...preVal,
        ...newVal,
        }
      })
    }

    // const handleImportant = (value) => setImportant(value)
    // const handleStatus = (value) => setStatus(value)
  return (
    <div className="flex items-stretch border-solid border border-gray-200 rounded-lg shadow-md">
        {/* Completed marker. Use Border color class */}
        <CompletedMarker func={handleStatus} className="border-amber-500" color="amber" />

        {/* Task Label */}
        <div className="flex-1 px-4 py-2 flex items-center text-base">
            <p>{label}</p>
        </div>

        <ImportantMarker func={handleStatus} color="amber" />

        {/* Delete marker. Use stroke color class */}
        <DeleteMarker className="stroke-amber-500"/>
    </div>
  )
}