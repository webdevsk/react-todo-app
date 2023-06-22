import StarCheckbox from "./ui/StarCheckbox"
import { Tooltip } from "@material-tailwind/react"

function ImportantMarker() {
  return (
    <Tooltip
        content="Mark as important"
        animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
        }}
    >
        <StarCheckbox bgColorClass="bg-amber-500"/>
    </Tooltip>
  )
}

export default ImportantMarker