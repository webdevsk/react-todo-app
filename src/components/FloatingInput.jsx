import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconButton, Input, Tooltip } from "@material-tailwind/react"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { Form } from "react-router-dom";
import { useEffect } from "react";

function FloatingInput({className, tasks}) {
    useEffect(()=>{
        document.querySelector('#taskInput').value = ""
    }, [tasks])

  return (
    <>
    <div className="fixed bottom-12 w-full">
        <div className={`${className} rounded-md`}>
            <Form method="post" className="appearance-none w-full block relative">
                <Input 
                id="taskInput"
                color="amber" 
                type="text" 
                required 
                name="label"
                placeholder="Get started!" 
                containerProps={{className: "h-12"}}
                labelProps={{className: "hidden"}}
                className={`pr-20 focus:border-t-amber-500 !border-amber-500 ring-4 ring-amber-500 !border  bg-white shadow-xl shadow-blue-gray-900/30 placeholder:text-base placeholder:text-blue-gray-200 !text-black`} 
                maxLength={50}/>

                <Tooltip content="Add new task"
                animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
                }}
                >
                    <IconButton size="sm" type="submit" color="amber" ripple={true} variant="text"
                    className={`!absolute !py-6 !px-8 rounded-none rounded-tr-lg rounded-br-lg right-0 top-2/4 -translate-y-2/4 shadow-none hover:shadow-none text-2xl`}>
                        <FontAwesomeIcon icon={faPlus} size="sm" />
                    </IconButton>
                </Tooltip>
            </Form>
        </div>
    </div>
    </>
  )
}

export default FloatingInput