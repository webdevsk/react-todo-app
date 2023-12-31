import { ListItem, ListItemSuffix, Tooltip } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CategoryMaker(){
    const [link, setLink] = useState('')
    const navigate = useNavigate()

    const resetLink = () => setLink('')
    const handlePress = (e) => {
        if (e.isComposing || e.keyCode === 229) return
        if (e.key !== "Enter") return
        resetLink()
        e.currentTarget.blur()
        navigate(`/${link}`)
    }

    return(
        <>
        <ListItem className="bg-gray-200 dark:bg-gray-300 dark:text-gray-900 py-0 px-0  transition-colors duration-300">
            <input
            className="bg-transparent placeholder:text-inherit focus:border-none focus:outline-none focus:placeholder:opacity-0 py-2 px-3 box-border w-full cursor-pointer focus:cursor-auto flex-1"
            placeholder="Add New Category"
            spellCheck='false'
            value={link}
            label='Add New Category'
            onChange={(e)=>setLink(e.currentTarget.value)}
            onKeyUp={handlePress}
            // onChange={(e)=>console.log(e)}
            />

            <ListItemSuffix className={`${link === '' ? 'hidden' : ''}`}>
                <Tooltip content='Reset' className={`${link === '' ? 'hidden' : ''}`}>
                    <button aria-label='Reset' onClick={resetLink}
                    className={`px-3 py-2 text-red-500 border-s border-gray-300 hover:bg-red-50 transition-colors`}
                    >
                        x
                    </button>
                </Tooltip>
            </ListItemSuffix>

            <ListItemSuffix className={`${link === '' ? 'hidden' : ''}`}>
                <Tooltip content='Go!' className={`${link === '' ? 'hidden' : ''}`}>
                    <Link to={link} aria-label="Go!"
                    onClick={()=>setLink('')}
                    className={`block text-green-500 hover:bg-green-50 transition-colors px-3 py-2 rounded-tr-lg rounded-br-lg border-x border-gray-300`}>
                        +
                    </Link>
                </Tooltip>
            </ListItemSuffix>

        </ListItem>
        </>
    )
}