import { nanoid } from "nanoid";

async function getParsedLocalData(label){
    const parsedData = label in localStorage
    ? JSON.parse(localStorage.getItem(label))
    : []
    return parsedData
}


export async function createTask({label, category}) {
    const storedData = await getParsedLocalData('TODOS')

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
    const storedData = await getParsedLocalData('TODOS')
    let tasks
    storedData.length === 0
    ? tasks = []
    : tasks = storedData.filter(task => task.category === category)
    return { tasks }
}


export async function getCategories(){
    const storedData = await getParsedLocalData('TODOS')
    let categories
    //Unique keys
    storedData.length === 0
    ? categories = []
    : categories = [...new Map(storedData.map(task => [task.category, task])).keys()]
    return { categories }
}

export async function deleteTask(id){
    const storedData = await getParsedLocalData('TODOS')
    const newData = storedData.length === 0
    ? []
    : storedData.filter(task => task.id !== id)

    localStorage.setItem('TODOS', JSON.stringify(newData))

    if (newData.length < storedData.length){
        return { success: true, message: 'Item deleted.'}
    } else {
        return { success: false, message: 'Item not found.'}
    }
}

export async function updateTask(props){
    const storedData = await getParsedLocalData('TODOS')
    const newData = storedData.length === 0
    ? []
    : storedData.map(task => {
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

export async function markAllDone(category){
    const storedData = await getParsedLocalData('TODOS')
    const newData = storedData.length === 0
    ? []
    : storedData.map(task => (
        task.category !== category 
        ? task 
        : {...task, completed: true}
    ))

    localStorage.setItem('TODOS', JSON.stringify(newData))

    if (newData.length === 0){
        return { success: false, message: 'Cannot operate on empty array.'}
    } else {
        return { success: true, message: 'Item updated successfully.'}
    }
}

export async function deleteAllMarked(category){
    const storedData = await getParsedLocalData('TODOS')
    const newData = storedData.length === 0
    ? []
    : storedData.filter(task => {
        if (task.category !== category) return true
        if (task.completed === false) return true
        return false
    })
    localStorage.setItem('TODOS', JSON.stringify(newData))

    if (newData.length === 0){
        return { success: false, message: 'Cannot operate on empty array.'}
    } else {
        return { success: true, message: 'Items deleted successfully.'}
    }
}