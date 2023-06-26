import CompletedMarker from './CompletedMarker';
import DeleteMarker from './DeleteMarker';
import ImportantMarker from './ImportantMarker';

export default function Task({task, handleUpdateTask, deleteTask}){
  
  return (
    <div className="flex items-stretch border-solid border border-gray-200 rounded-lg shadow-md">
        {/* Completed marker. Use Border color class */}
        <CompletedMarker task={task} handleUpdateTask={handleUpdateTask} className="border-amber-500" color="amber" />

        {/* Task Label */}
        <div className="flex-1 px-4 py-2 flex items-center text-base">
            <p>{task.label}</p>
        </div>

        <ImportantMarker task={task} handleUpdateTask={handleUpdateTask} color="amber" />

        {/* Delete marker. Use stroke color class */}
        <DeleteMarker task={task} deleteTask={deleteTask} className="stroke-amber-500"/>
    </div>
  )
}
