import { useContext, useId } from 'react'
import { Checkbox } from "@material-tailwind/react"

export default function CompletedMarker({id, completed, className, color}) {
  
  const elmid = useId()
  function handleChange({currentTarget}){
    handleUpdateTask(id, {completed: currentTarget.checked})
  }

  return (
        <Checkbox ripple={false} onChange={handleChange} checked={completed} id={elmid} containerProps={{htmlFor: elmid}} className={`rounded-full ${className}`} color={color} />
  )
}