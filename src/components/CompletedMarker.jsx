import { useId } from 'react'
import { Checkbox, Tooltip } from "@material-tailwind/react"

function CompletedMarker() {
    const id = useId()
  return (
    <Tooltip
              content="Mark as completed"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
    >
        <Checkbox id={id} labelProps={{htmlFor: id}} className="border-amber-400 rounded-full" color="amber" />
    </Tooltip>
  )
}

export default CompletedMarker