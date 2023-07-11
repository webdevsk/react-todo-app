import ScrollToTop from 'react-scroll-to-top'
import SideMenu from '../components/SideMenu'
import { Outlet } from 'react-router-dom';
import { getCategories } from '../operations';
import { useState, createContext, useEffect } from 'react';


export async function loader(){
  const {categories} = await getCategories()
  return {categories}
}

export const ThemeContext = createContext()

export default function Root() {
  const themes = [
    {label: 'Auto', value: 'auto'},
    {label: 'Light', value: 'light'},
    {label: 'Dark', value: 'dark'},
  ]

  const [theme, setTheme] = useState(()=>(
    'theme' in localStorage ? localStorage.theme : 'auto'
  ))

  useEffect(() => {
    switch (theme){
      case 'auto':
          localStorage.removeItem('theme')
          break
      case 'light':
          localStorage.theme = 'light'
          break
      case 'dark':
          localStorage.theme = 'dark'
          break
      }

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
  }, [theme])

  return (
    <>
    {/* Core components */}
    <ThemeContext.Provider value={{theme, themes, setTheme}}>
      <SideMenu />
    </ThemeContext.Provider>

    <div id="taskContainer">
      <Outlet />
    </div>
    {/* Some UI elements */}
    <div className="fixed top-0 left-0 w-full h-2 bg-amber-500"></div>

    <ScrollToTop smooth style={{border: "4px solid"}} className="bg-white dark:bg-gray-900 bottom-12 right-8 hidden lg:block shadow-md shadow-blue-gray-900/20 !border-amber-500 w-12 h-12 ring-4 ring-transparent hover:ring-amber-500/20"
      component={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-7 h-7 stroke-amber-500 stroke-2 mx-auto">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
      </svg>} 
    />
    
    </>
  )
}
