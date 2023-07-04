import { markAllDone } from "../operations";

export async function action({params:{category}}){
    await markAllDone(category)
    return null
}