import FloatingInput from './components/FloatingInput';
import Heading from './components/Heading';
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
    <Heading className="max-w-2xl mx-auto px-4 mb-4 mt-12"/>
    <TaskList className="max-w-2xl mx-auto" />
    <FloatingInput />
    </>
  )
}

export default App
