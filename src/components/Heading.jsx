import { Typography } from "@material-tailwind/react";

function Heading({className}) {
      const today = new Date()
  return (
        <section className={`${className}`}>
      <div className="container">
        <Typography variant="h3" className='font-calistoga text-gray-800 tracking-wider'>My Day</Typography>
        <p
        className="text-sm text-gray-700 font-semibold tracking-wide font-serif"
        >{today.toLocaleDateString('en-US', {day:"2-digit", weekday:"long", month:"long"})}</p>
      </div>
    </section>
  )
}

export default Heading