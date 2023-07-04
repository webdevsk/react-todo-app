import { Typography } from "@material-tailwind/react";
import { useRouteError } from "react-router-dom"

export default function ErrorPage(){
    const error = useRouteError()
    console.error(error)
    // console.log(error)

    return(
        <>
        <div id="error-page" className='flex justify-center items-center h-screen text-center flex-col'>
            <Typography className='font-calistoga py-8' variant="h1">Oops!</Typography>
            <Typography className='font-serif mb-8' variant='h5'>Sorry an unexpected error has occured.</Typography>
            
            <Typography className='italic font-serif text-red-900' variant='h3'>{error?.status}</Typography>
            <Typography className='italic font-serif text-red-900' variant='h6'>
                {error?.statusText}
                <br />
                {error?.error?.message || error.toString()}
            </Typography>
        </div>
        </>
    )
}