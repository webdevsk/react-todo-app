import { Button, List, Tooltip, Typography, Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react'
import Task from './Task'
import { useState, useEffect, useRef, createContext } from 'react'
import FloatingInput from './FloatingInput'
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
const TaskContext = createContext()
export {TaskContext}

export default function TaskList({className}) {
  const [newTask, setNewTask] = useState(() => {
    const localTasks = localStorage.getItem('TODOS')

    
    if (localTasks === null || localTasks === '') return []
    return JSON.parse(localTasks)
  })
  console.log(newTask)

  const prevLength = useRef(newTask.length)
  useEffect(() => {
    // Run only when new task is added
    if (prevLength.current < newTask.length){
      window.scrollTo({ left: 0, top: document.body.scrollHeight || document.documentElement.scrollHeight, behavior: "smooth" })
    }
    prevLength.current = newTask.length

    localStorage.setItem('TODOS', JSON.stringify(newTask))
  }, [newTask])


  function handleNewTask(label){
    setNewTask(prevTasks => {
      return [...prevTasks, {id: nanoid(), completed: false, important: false, label: label}]
    })
  }

  function handleUpdateTask(id, obj){
    // console.log(id, obj)
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
  
  function markAllCompleted(){
    setNewTask(prevTasks => {
      return prevTasks.map(task => {
        return {...task, completed: true}
      })
    })
  }

  function deleteAllMarked(){
    setNewTask(prevTasks => {
      return prevTasks.filter(task => task.completed === false)
    })
  }

  return (
  <TaskContext.Provider value={{handleNewTask, handleUpdateTask, deleteTask}}>
      <div className={`container pb-28 ${className}`}>
        <div className="bulkManager rounded-lg flex text-gray-500 flex-wrap items-center mb-2 justify-between">

          <Tooltip content='Mark all as completed'>
            <button className={`w-6 h-6 m-3 rounded-sm shadow-none group bg-transparent`} onClick={markAllCompleted}>
              <FontAwesomeIcon className={`text-xl group-hover:text-amber-500 transition-colors`} icon={faListCheck} />
            </button>
          </Tooltip>

          <Typography variant="h6" className={`flex-1 mx-4`}>Tasks</Typography>

          <Menu placement='bottom' lockScroll={true} dismiss={{
            itemPress:true
          }}>
          
            <MenuHandler>
              <button className={newTask.filter(task => task.completed === true).length > 0 ? `block` : `hidden`}>
                <Typography variant="h6" className={`text-red-500 mx-4`}>Delete all completed</Typography>
              </button>
            </MenuHandler>
            <MenuList>
              <MenuItem className='!text-red-500 !bg-transparent font-bold hover:!text-white !bg-transparent hover:!bg-red-500' onClick={deleteAllMarked}>
                Confirm
              </MenuItem>
              <MenuItem className='font-bold hover:!text-white hover:!bg-gray-500'>
                Cancel
              </MenuItem>
            </MenuList>
          </Menu>

        </div>

        <List className="gap-y-4 p-0">
          {newTask.length == 0 && <p className={`text-base text-gray-700`}>No tasks yet. Type one below to get started!</p>}
          {newTask.map(task => {
            return (
              <Task key={task.id} task={task}/>
            )
          })}
        </List>
      </div>

      <FloatingInput className="max-w-2xl px-8 mx-auto" />
    </TaskContext.Provider>
  )
}
