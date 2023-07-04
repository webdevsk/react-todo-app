import { nanoid } from "nanoid";

async function getParsedLocalData(label){
    const rawData = localStorage.getItem(label)
    if (rawData === null || rawData === '[]') return []
    return JSON.parse(rawData)
}

export async function createTask({label, category}) {
    const storedData = getParsedLocalData('TODOS')

    const newData = [...storedData, {
        id: nanoid(),
        label: label, 
        category: category,
        completed: false,
        important: false
    }]

    localStorage.setItem('TODOS', JSON.stringify(newData))

}



export async function getTasks(category) {
    const storedData = getParsedLocalData('TODOS')
    let tasks
    storedData.length === 0
    ? tasks = []
    : tasks = storedData.filter(task => task.category === category)
    return { tasks }
}


export async function getCategories(){
    const storedData = getParsedLocalData('TODOS')
    let categories
    //Unique keys
    storedData.length === 0
    ? categories = ['home']
    : categories = [...new Map(storedData.map(task => [task.category, task])).keys()]
    return { categories }
}

export async function deleteTask(id){
    const storedData = getParsedLocalData('TODOS')
    let newData
    storedData.length === 0
    ? newData = []
    : newData = storedData.filter(task => task.id !== id)

    localStorage.setItem('TODOS', JSON.stringify(newData))

    if (newData.length < storedData.length){
        return { success: true, message: 'Item deleted.'}
    } else {
        return { success: false, message: 'Item not found.'}
    }
}

export async function updateTask(props){
    const storedData = getParsedLocalData('TODOS')
    let newData
    storedData.length === 0
    ? newData = []
    : newData = storedData.map(task => {
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

    localStorage.setItem('TODOS', JSON.stringify(newData))

    if (newData.length === 0){
        return { success: false, message: 'Cannot operate on empty array.'}
    } else {
        return { success: true, message: 'Item updated successfully.'}
    }
}