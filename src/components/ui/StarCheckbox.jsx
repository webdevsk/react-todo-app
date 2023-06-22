import { forwardRef } from "react"

// eslint-disable-next-line react/display-name
const StarCheckbox = forwardRef(({className, bgColorClass, style, name, id, label}, ref) => {
  'StarCheckbox'
  const textColorClass = bgColorClass.replace('bg', 'text')
  return (
    <>
      <input type="checkbox"  
      className={`
      invisible
      cursor-pointer
      w-11
      h-11
      relative
      text-3xl
      after:content-['\\2606']
      after:top-2/4
      after:left-2/4
      after:-translate-x-2/4
      after:-translate-y-[55%]
      after:${textColorClass}
      after:absolute
      after:visible
      checked:after:content-['\\2605']
      appearance-none
      after:transition-all
      before:content-['']
      before:bg-blue-gray-500
      before:w-12
      before:h-12
      before:absolute
      before:top-2/4
      before:left-2/4
      before:-translate-y-2/4
      before:-translate-x-2/4
      before:visible
      before:rounded-full
      before:opacity-0
      hover:before:opacity-10
      before:transition-opacity
      checked:before:${bgColorClass}
      checked:before:transition-all
      ${className}
      `}
      name={name} id={id} ref={ref} style={style} label={label}/>
    </>
    
  )
  
})

export default StarCheckbox