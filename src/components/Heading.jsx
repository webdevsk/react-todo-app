function Heading() {
      const today = new Date()
  return (
        <section className="heading">
      <div className="container px-4 mb-4 mt-4">
        <h1 className="text-2xl text-gray-800 font-serif font-bold">My Day</h1>
        <p
        className="text-sm text-gray-700 font-semibold tracking-wide font-serif"
        >{today.toLocaleDateString('en-US', {day:"2-digit", weekday:"long", month:"long"})}</p>
      </div>
    </section>
  )
}

export default Heading