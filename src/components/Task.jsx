import { useState } from 'react';
import CompletedMarker from './CompletedMarker';
import DeleteMarker from './DeleteMarker';
import ImportantMarker from './ImportantMarker';

export default function Task({task: {completed, label}}){
    const [important, setImportant] = useState(completed)
    const [status, setStatus] = useState(false)
    console.log(status, important)

    const handleImportant = (value) => setImportant(value)
    const handleStatus = (value) => setStatus(value)
  return (
    <div className="flex items-stretch border-solid border border-gray-200 rounded-lg shadow-md">
        {/* Completed marker. Use Border color class */}
        <CompletedMarker func={handleStatus} className="border-amber-500" color="amber" />

        {/* Task Label */}
        <div className="flex-1 px-4 flex items-center text-base">
            <p>{label}</p>
        </div>

        <ImportantMarker func={handleImportant} bgColorClass="bg-amber-500" />

        {/* Delete marker. Use stroke color class */}
        <DeleteMarker className="stroke-amber-500"/>
    </div>
  )
}
