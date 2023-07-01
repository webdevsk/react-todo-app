import { useId } from "react";
// Tooltip is not a container element

function ImportantMarker({id, important, inputClasses, shadowClasses, iconClasses, handleUpdateTask}) {

  const elmid = useId()

  function handleImportant(e){
    handleUpdateTask(id, {important: e.target.checked})
  }

  const shadowColors = important 
  ? 'group-hover/important:bg-amber-500' 
  : 'group-hover/important:bg-blue-gray-500'

  const svgColors = important && 'fill-amber-500'

  return (
  <>
    <label htmlFor={elmid + 'important'} className={`group/important cursor-pointer relative mx-6`}>
        <input id={elmid + 'important'} type="checkbox" checked={important} onChange={handleImportant} className={`opacity-0 w-12 h-12 perfect-center rounded-full ${inputClasses}`} />
      
      <div className={`customShadow opacity-0 perfect-center rounded-full h-12 w-12 group-hover/important:opacity-10 transition-all ${shadowColors} ${shadowClasses}`}></div>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6  perfect-center  stroke-amber-500 ${svgColors} ${iconClasses}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    </label>
  </>
  )
}

export default ImportantMarker