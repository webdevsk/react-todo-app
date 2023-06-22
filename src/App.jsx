import React, { useState, useEffect, useId } from 'react'
import { List } from "@material-tailwind/react"
import tasks from "./assets/tasks"
import ImportantMarker from "./components/ImportantMarker"
import CompletedMarker from "./components/CompletedMarker"
import Heading from './components/Heading';

function App() {
  return (
    <>
    <Heading />
    <section className="task-list">
      <div className="container px-4 mb-4">
        <List>
          {tasks.map(({label}) => {
            return(
            <div key={crypto.randomUUID()} className="flex items-center">
              <CompletedMarker className="" />
              <p className="flex-1 px-4 bg-gray-100 ">{label}</p>
              <ImportantMarker />
            </div>
            )
          })}
        </List>
      </div>
    </section>
    </>
  )
}

export default App
