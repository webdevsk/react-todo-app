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
import TaskList, { loader as taskLoader, action as taskAction } from './routes/TaskList.jsx';

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
    }
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
