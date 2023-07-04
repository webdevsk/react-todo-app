import { nanoid } from "nanoid";


export async function createTask({label, category}) {
    let rawData = localStorage.getItem('TODOS')
    let tasks
    if (rawData === null || rawData === '[]'){
        tasks = []
    } else {
        tasks = JSON.parse(rawData) 
    }

    const saveData = [...tasks, {
        id: nanoid(),
        label: label, 
        category: category,
        completed: false,
        important: false
    }]

    localStorage.setItem('TODOS', JSON.stringify(saveData))

}



export async function getTasks(category) {
    const rawData = localStorage.getItem('TODOS')
    if (rawData === null || rawData === '[]') return { tasks: [] }

    const tasks = JSON.parse(rawData).filter(task => task.category === category)
  
    return {tasks}
}


export async function getCategories(){
    const rawData = localStorage.getItem('TODOS')
    if (rawData === null || rawData === '[]') return {categories: ['home']}
    const tasks = JSON.parse(rawData)
    //Unique keys
    const categories = [...new Map(tasks.map(task => [task.category, task])).keys()]
    return {categories}
}

export async function deleteTask(id){
    // console.log(id)
    const rawData = localStorage.getItem('TODOS')
    if (rawData === null || rawData === '[]') return { success: false, message: 'No tasks available.' }
    const tasks = JSON.parse(rawData)
    const saveData = tasks.filter(task => task.id !== id)
    localStorage.setItem('TODOS', JSON.stringify(saveData))

    if (tasks.length > saveData.length){
        return { success: true, message: 'Item deleted.'}
    } else {
        return { success: false, message: 'Item not found.'}
    }
}

export async function updateTask(props){
    // console.log(props)
    const rawData = localStorage.getItem('TODOS')
    if (rawData === null || rawData === '[]') return { success: false, message: 'No tasks available.' }

    const tasks = JSON.parse(rawData)
    const saveData = tasks.map(task => {
        if (task.id !== props.id) return task

        if (Object.prototype.hasOwnProperty.call(props, 'completed')){
            return {
                ...task, 
                completed: props.completed === 'true'
                ? true
                : false
            }
        } else if (Object.prototype.hasOwnProperty.call(props, 'important')){
            return {
                ...task, 
                important: props.important === 'true'
                ? true
                : false
            }
        }
    })

    localStorage.setItem('TODOS', JSON.stringify(saveData))
}