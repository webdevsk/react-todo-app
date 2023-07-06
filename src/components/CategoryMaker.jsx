import { Button, Input, ListItem, ListItemSuffix, Tooltip } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import { Form, Link, redirect, useLocation, useNavigate } from "react-router-dom";

export default function CategoryMaker(){
    const [link, setLink] = useState('')
    console.log(link)
    const navigate = useNavigate()
    const location = useLocation()

    const handlePress = (e) => {
        if (e.isComposing || e.keyCode === 229) return
        if (e.key !== "Enter") return
        setLink('')
        e.currentTarget.blur()
        navigate(`/${link}`)
    }

    // useEffect(()=>{
    //     setLink('')
    // }, [location])

    // useEffect(()=>{
    //     inputRef.current.addEventListener('keydown', handlePress)
    //     console.log(inputRef.current)
    //     return () => {
    //         inputRef.current.removeEventListener('keydown', handlePress)
    //     }
    // }, [])

    // const handleSubmit = (e) => {
    //     // console.log(e)
    //     setLink(e.currentTarget.value)
    // }

    // const handleClear = (e) => {
    //     setLink('')
    // }
    return(
        <>
        <ListItem className="bg-gray-200 py-0 px-0">
            <input
            className="bg-transparent placeholder:text-inherit focus:border-none focus:outline-none focus:placeholder:opacity-0 py-3 px-3 box-border w-full cursor-pointer focus:cursor-auto flex-1"
            placeholder="Add New Category"
            spellCheck='false'
            value={link}
            label='Add New Category'
            onChange={(e)=>setLink(e.currentTarget.value)}
            onKeyUp={handlePress}
            // onChange={(e)=>console.log(e)}
            />

            <ListItemSuffix className={`${link === '' ? 'hidden' : ''}`}>
                <Tooltip content='Reset'>
                    <button aria-label='Reset'
                    className={`p-3 text-red-500 border-s border-gray-300 hover:bg-red-50 transition-colors`}
                    >
                        x
                    </button>
                </Tooltip>
            </ListItemSuffix>

            <ListItemSuffix className={`${link === '' ? 'hidden' : ''}`}>
                <Tooltip content='Go!'>
                    <Link to={link} aria-label="Go!"
                    onClick={()=>setLink('')}
                    className={`block text-green-500 hover:bg-green-50 transition-colors p-3 rounded-tr-lg rounded-br-lg border-x border-gray-300`}>
                        +
                    </Link>
                </Tooltip>
            </ListItemSuffix>

        </ListItem>
        </>
    )
}