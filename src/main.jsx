import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { loader as appLoader } from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react"
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom"
import ErrorPage from './error-page.jsx';
import TaskList, { loader as taskLoader, action as taskAction } from './components/TaskList.jsx';

const router = createBrowserRouter([
  {
  path: '/',
  element: <App />,
  loader: appLoader,
  errorElement: <ErrorPage />,
  children: [
    {
      index: true,
      element: <Navigate to='/home' />,
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
