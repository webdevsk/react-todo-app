import CompletedMarker from './CompletedMarker'
import DeleteMarker from './DeleteMarker'
import ImportantMarker from './ImportantMarker'

export default function Task({task}){
  return (
    <div className={`task-item bg-white dark:bg-gray-800 flex items-center border-solid border border-gray-200 dark:border-gray-800 rounded-lg shadow-md relative overflow-hidden ${!task.important && 'animate-toUp' } [animation-fill-mode:forwards] -z-0 transition-colors duration-300`}>

        {/* Completed marker. Use Border color class */}
        <CompletedMarker {...task} className="border-amber-500" color="amber" />

        {/* Animate when checked */}
        <span id='completion-bar' className={`${task.completed ? 'animate-ripple' : ''}`} ></span>

        {/* Task Label */}
        <div className={`flex-1 mx-4 py-2 flex items-center text-base  max-w-full overflow-x-auto ${task.completed ? 'line-through opacity-60' : ''}`}>
            {task.label}
        </div>

        <ImportantMarker {...task} color="amber" />

        {/* Delete marker. Use stroke color class */}
        <DeleteMarker {...task} className="stroke-amber-500"/>
    </div>
  )
}
