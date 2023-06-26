import { useId, useState } from 'react'
import { Checkbox, Tooltip } from "@material-tailwind/react"
// Tooltip is not a container element

function CompletedMarker({className, color, task, handleUpdateTask}) {
  const [checked, setChecked] = useState(task.completed)

  function handleChange(e){
    setChecked(e.target.checked)
    handleUpdateTask(task.id, {completed: e.target.checked})
  }

  const elmid = useId()
  return (
    <Tooltip
              content="Mark as completed"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
    >
        <Checkbox ripple={false} onChange={handleChange} checked={checked} elmid={elmid} labelProps={{htmlFor: elmid}} className={`rounded-full ${className}`} color={color} />
    </Tooltip>
  )
}

export default CompletedMarker