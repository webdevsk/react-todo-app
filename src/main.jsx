import React from 'react'
import '@fontsource/poppins'
import '@fontsource/calistoga'
import ReactDOM from 'react-dom/client'
import Root, { loader as rootLoader } from './routes/root.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react"
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom"
import ErrorPage from './error-page.jsx';
import TaskList, { loader as taskLoader, action as taskAction } 
from './routes/TaskList.jsx';
import { action as destroyAction } from './routes/destroy.jsx'
import { action as updateAction } from './routes/update.jsx'
import { action as allCompletedAction } from './routes/allcomplete.jsx'


const router = createBrowserRouter([
  {
  path: '/',
  element: <Root />,
  loader: rootLoader,
  errorElement: <ErrorPage />,
  children: [
    {
      index: true,
      element: <Navigate to='/home' replace={true}/>,
    },
    {
      path: ':category',
      element: <TaskList />,
      loader: taskLoader,
      action: taskAction,
      errorElement: <ErrorPage />,
    },
    {
      path: ':category/destroy',
      action: destroyAction,
    },
    {
      path: ':category/update',
      action: updateAction,
    },
    {
      path: ':category/allcompleted',
      action: allCompletedAction,
    },
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
