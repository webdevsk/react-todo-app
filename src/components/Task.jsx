import CompletedMarker from './CompletedMarker'
import DeleteMarker from './DeleteMarker'
import ImportantMarker from './ImportantMarker'

export default function Task({task, handleUpdateTask, deleteTask}){
  
  return (
    <div className={`task-item group flex items-stretch border-solid border border-gray-200 rounded-lg shadow-md relative overflow-hidden ${task.completed ? `` : ``}`} data-completed={task.completed ? 'true' : 'false'}>

        {/* Completed marker. Use Border color class */}
        <CompletedMarker {...task} handleUpdateTask={handleUpdateTask} className="peer border-amber-500" color="amber" />

        <span className={`absolute left-0 -translate-x-2/4 top-2/4 -translate-y-2/4 bg-gray-200 rounded-full w-0 h-0 origin-bottom -z-10 group-data-[completed=true]:animate-ripple`} style={{animationFillMode: 'forwards'}}></span>

        {/* Task Label */}
        <div className="flex-1 px-4 py-2 flex items-center text-base group-data-[completed=true]:line-through group-data-[completed=true]:opacity-60">
            <p>{task.label}</p>
        </div>

        <ImportantMarker {...task} handleUpdateTask={handleUpdateTask} color="amber" />

        {/* Delete marker. Use stroke color class */}
        <DeleteMarker {...task} deleteTask={deleteTask} className="stroke-amber-500"/>
    </div>
  )
}
