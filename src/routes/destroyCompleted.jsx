import { redirect } from "react-router-dom";
import { deleteAllMarked } from "../operations";

export async function action({params: {category}}){
    console.log(category)
    const result = await deleteAllMarked(category)
    // console.log(result)
    return redirect(`/${category}`)
}