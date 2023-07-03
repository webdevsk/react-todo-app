
function getTasks(category) {
  const rawData = localStorage.getItem('TODOS')
  const tasks = JSON.parse(rawData).filter(task => task.category === category)

  return {tasks}
}

export default getTasks