// import { redirect } from "react-router-dom";
import { updateTask } from "../operations";

export async function action({request}){
    const formData = await request.formData()
    const obj = Object.fromEntries(formData)
    await updateTask(obj)
    // return redirect(`/${params.category}`)
    return null
}