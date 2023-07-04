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
    const tasks = JSON.parse(rawData).filter(task => task.category === category)
  
    return {tasks}
}