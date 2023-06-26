import { useEffect, useId, useRef } from 'react'
import { Checkbox, Tooltip } from "@material-tailwind/react"

function CompletedMarker({className, color, func: handleStatus}) {
  const inputRef = useRef(null)
  useEffect(()=>{
    function handleChange(e){
      handleStatus({completed: e.target.checked})
    }
    const elm = inputRef.current
    elm.addEventListener('change', handleChange)
    return()=>{
      elm.removeEventListener('change', handleChange)
    }
  }, [])

  const id = useId()
  return (
    <Tooltip
              content="Mark as completed"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
    >
        <Checkbox ripple={false} inputRef={inputRef} id={id} labelProps={{htmlFor: id}} className={`rounded-full ${className}`} color={color} />
    </Tooltip>
  )
}

export default CompletedMarker