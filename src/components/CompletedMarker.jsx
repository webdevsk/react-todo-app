import { useId } from 'react'
import { Checkbox } from "@material-tailwind/react"
import { useFetcher} from 'react-router-dom'


export default function CompletedMarker({id, completed, className, color}) {
  const elmid = useId()
  const fetcher = useFetcher()
  function handleChange(e){
    fetcher.submit(
      { 
        id: id,
        completed: e.target.checked
      },
      {
        method: "post",
        action: "update",
        encType: "application/x-www-form-urlencoded",
      }
    )
  }
  return (
    <fetcher.Form method='post' action='update'>
      <Checkbox ripple={false} 
      onChange={handleChange}
      checked={completed}
      id={elmid} 
      containerProps={{htmlFor: elmid, className: 'p-4'}} 
      className={`rounded-full ${className}`} 
      color={color} />
    </fetcher.Form>
  )
}