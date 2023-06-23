import { List } from '@material-tailwind/react';
import tasks from "../assets/tasks"
import Task from './Task';
export default function TaskList({className}) {
  return (
    <div className={`container px-4 mb-4 ${className}`}>
      <List className="gap-y-4 p-0">
          {tasks.map(task => {
            return <Task key={crypto.randomUUID()} task={task} />
          })}
      </List>
    </div>
  )
}
