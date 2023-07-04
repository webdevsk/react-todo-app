import { Typography } from "@material-tailwind/react";

function Heading({className, category}) {
      const today = new Date()
  return (
        <section className={`${className}`}>
      <div className="container">
        <Typography variant="h3" className='font-calistoga capitalize text-gray-800 tracking-wider'>{category === 'home' ? 'My Day' : category}</Typography>
        <p
        className="text-sm text-gray-700 font-semibold tracking-wide font-serif"
        >{today.toLocaleDateString('en-US', {day:"2-digit", weekday:"long", month:"long"})}</p>
      </div>
    </section>
  )
}

export default Heading