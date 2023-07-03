import { nanoid } from "nanoid";


export default async function createTask({label, category}) {
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
