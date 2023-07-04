import { deleteTask } from '../operations'

export async function action({request}){
    // console.log(params)
    // await deleteTask(params.id)
    const formData = await request.formData()
    const id = formData.get('id')
    await deleteTask(id)
    return null
}