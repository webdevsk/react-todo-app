import { List, Tooltip, Typography } from '@material-tailwind/react'
import Task from '../components/Task'
import { useEffect, useRef } from 'react'
import FloatingInput from '../components/FloatingInput'
import { redirect, useFetcher, useLoaderData, useNavigation } from 'react-router-dom'
import { createTask, getTasks } from '../operations'
import Heading from '../components/Heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons'

export async function loader({params}){
  const {tasks} = await getTasks(params.category)
  return {tasks, category: params.category}
}

export async function action({params: {category}, request}){
  const formData = await request.formData()
  const entries = Object.fromEntries(formData)
  await createTask({label: entries.label, category: category})
  return redirect(`/${category}`)
  //using fetcher so redirection is not needed. But it is recommended to return something so returning null
}

export default function TaskComponent() {
  const {tasks, category} = useLoaderData()
  const prevLength = useRef(tasks.length)
  useEffect(() => {
    // Run only when new task is added
    if (prevLength.current < tasks.length){
      window.scrollTo({ left: 0, top: document.body.scrollHeight || document.documentElement.scrollHeight, behavior: "smooth" })
    }
    prevLength.current = tasks.length
  }, [tasks])

  const navigation = useNavigation()
  const fetcher = useFetcher()
  //navigation.state returns "idle" | "submitting" | "loading"
  return (
    <>
    <Heading category={category} className="max-w-2xl mx-auto px-8 mb-4 mt-24"/>

    <div className={`container pb-28 max-w-2xl mx-auto px-8 transition-all ${navigation.loading === 'idle' && 'opacity-50'}`}>
      <div className="bulkManager rounded-lg flex text-gray-500 flex-wrap items-center mb-2 justify-between">

        <fetcher.Form method='post' action='allcompleted'>
          <Tooltip content='Mark all as completed' animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0, y: 25 }, }}>
            <button type='submit' className={`w-6 h-6 m-3 rounded-sm shadow-none group bg-transparent`}>
              <FontAwesomeIcon className={`text-xl group-hover:text-amber-500 transition-colors`} icon={faListCheck} />
            </button>
          </Tooltip>
        </fetcher.Form>

        <Typography variant="h6" className={`flex-1 mx-4`}>Tasks</Typography>

        {/* <Menu placement='bottom' lockScroll={true} dismiss={{
          isRequired: {itemPress:true},
          enabled: true,
          itemPress:true,
        }}>
        
          <MenuHandler>
            <button className={`${newTask.filter(task => task.completed === true).length > 0 ? `block` : `hidden`}  animate-toUp focus-visible:!outline-0`}>
              <Typography variant="h6" className={`text-red-500 mx-4`}>Delete all completed</Typography>
            </button>
          </MenuHandler>
          <MenuList>
            <MenuItem className='!text-red-500 font-bold hover:!text-white !bg-transparent hover:!bg-red-500 text-center' onClick={deleteAllMarked}>
              Confirm
            </MenuItem>
            <MenuItem className='font-bold hover:!text-white hover:!bg-gray-500 text-center'>
              Cancel
            </MenuItem>
          </MenuList>
        </Menu> */}

      </div>

      <List className="gap-y-4 p-0 text-black">
        {tasks.length == 0 && <p className={`text-base`}>No tasks yet. Type one below to get started!</p>}
        {tasks.map(task => {
          return (
            <Task key={task.id} task={task}/>
          )
        })}
      </List>
    </div>

    <FloatingInput tasks={tasks} className="max-w-2xl px-8 mx-auto" />
    </>
  )
}
