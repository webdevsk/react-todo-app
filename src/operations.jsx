import { nanoid } from "nanoid";


export async function createTask({label, category}) {
    let rawData = localStorage.getItem('TODOS')
    let tasks
    if (rawData === null || rawData === ''){
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
    if (rawData === null || rawData === '') return { tasks: [] }

    const tasks = JSON.parse(rawData).filter(task => task.category === category)
  
    return {tasks}
}


export async function getCategories(){
    const rawData = localStorage.getItem('TODOS')
    if (rawData === null || rawData === '') return { categories: [] }
    const tasks = JSON.parse(rawData)
    //Unique keys
    const categories = [...new Map(tasks.map(task => [task.category, task])).keys()]
    console.log(categories)
    return {categories}
}
