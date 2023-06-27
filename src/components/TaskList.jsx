import { List } from '@material-tailwind/react'
import Task from './Task'
import { useState, useEffect } from 'react'
import FloatingInput from './FloatingInput'


export default function TaskList({className}) {
  const [newTask, setNewTask] = useState([])
  useEffect(() => {
    // Run only when newTask changes
    window.scrollTo({ left: 0, top: document.body.scrollHeight || document.documentElement.scrollHeight, behavior: "smooth" });
  }, [newTask])

  useEffect(()=>{
    setNewTask([{id:crypto.randomUUID(), completed: true, important: true, label: "Hello World"}])
  }, [])

  function handleNewTask(label){
    setNewTask(prevTasks => {
      return [...prevTasks, {id:crypto.randomUUID(), completed: false, important: false, label: label}]
    })
  }

  function handleUpdateTask(id, obj){
    console.log(id, obj)
    setNewTask(prevTasks => {
      return prevTasks.map(task => {
        if (task.id === id){
          return {...task, ...obj}
        }
        return task
      })
    })
  }

  function deleteTask(id){
    setNewTask(prevTasks => {
      return prevTasks.filter(task => task.id !== id)
    })
  }
  
  return (
    <>
    <div className={`container pb-28 ${className}`}>
      <List className="gap-y-4 p-0">
          {newTask.map(task => {
            return <Task key={task.id} task={task} handleUpdateTask={handleUpdateTask} deleteTask={deleteTask} />
          })}
      </List>
    </div>

    <FloatingInput className="max-w-2xl px-8 mx-auto" handleNewTask={handleNewTask} />
    </>
  )
}
