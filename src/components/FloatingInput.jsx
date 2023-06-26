import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, Input, Tooltip } from "@material-tailwind/react";
import { faPlus } from "@fortawesome/free-solid-svg-icons"
function FloatingInput() {
  return (
    <>
    <div className="absolute bottom-12 w-full px-4">
        <div className="relative flex max-w-2xl mx-auto rounded-md">
            <Input color="amber" type="text" placeholder="New task" containerProps={{className: "h-12"}}
            labelProps={{className: "hidden"}}
            className={`pr-20 focus:border-t-amber-500 focus:!border-t-amber-500 focus:!border-amber-500 ring-4 ring-transparent focus:ring-amber-500/20 !border !border-blue-gray-50 bg-white shadow-xl shadow-blue-gray-900/10 placeholder:text-base placeholder:text-blue-gray-200 text-blue-gray-500`}/>
                <Tooltip content="Add new task"
                animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
                }}
            >
                <IconButton size="" color="amber" ripple={true} variant="text"
                className={`!absolute !py-6 !px-8 rounded-none rounded-tr-lg rounded-br-lg right-0 top-2/4 -translate-y-2/4 shadow-none hover:shadow-none text-2xl`}>
                    <FontAwesomeIcon icon={faPlus} size="sm" />
                </IconButton>
            </Tooltip>

        </div>
    </div>
    </>
  )
}

export default FloatingInput