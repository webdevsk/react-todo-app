import FloatingInput from './components/FloatingInput';
import Heading from './components/Heading';
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
    {/* Some UI elements */}
    <div className="sticky top-0 left-0 w-full h-2 bg-amber-500"></div>
    <div className></div>

    {/* Core components */}
    <Heading className="max-w-2xl mx-auto px-8 mb-4 mt-12"/>
    <TaskList className="max-w-2xl mx-auto px-8" />
    </>
  )
}

export default App
