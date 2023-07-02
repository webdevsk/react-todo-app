import { useContext, useId } from 'react'
import { Checkbox } from "@material-tailwind/react"
import { TaskContext } from './TaskList'
// Tooltip is not a container element

export default function CompletedMarker({id, completed, className, color}) {
  const {handleUpdateTask} = useContext(TaskContext)
  
  const elmid = useId()
  function handleChange({currentTarget}){
    handleUpdateTask(id, {completed: currentTarget.checked})
  }

  return (
        <Checkbox ripple={false} onChange={handleChange} checked={completed} id={elmid} containerProps={{htmlFor: elmid}} className={`rounded-full ${className}`} color={color} />
  )
}