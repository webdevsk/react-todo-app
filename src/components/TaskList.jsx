import { List } from '@material-tailwind/react';
import tasksArr from "../assets/tasks"
import Task from './Task';
import { useState, useEffect } from 'react';
export default function TaskList({className}) {
  const [tasks, setTasks] = useState([])
  function updateArr(){
    
  }
  useEffect(()=> setTasks([...tasksArr]), [])
  
  return (
    <div className={`container px-4 mb-4 ${className}`}>
      <List className="gap-y-4 p-0">
          {tasks.map(task => {
            return <Task key={crypto.randomUUID()} task={task} />
          })}
      </List>
    </div>
  )
}
