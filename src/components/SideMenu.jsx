import { Drawer, List, Typography, ListItem, ListItemPrefix, ListItemSuffix, Card, CardHeader, CardFooter, CardBody, Tooltip, IconButton, speedDial } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link, NavLink, useLoaderData, useParams } from 'react-router-dom';
import CategoryMaker from './CategoryMaker';
import ThemeChanger from './ThemeChanger';

export default function SideMenu() {
  const [open, setOpen] = useState(() => (
    window.outerWidth <= 1400
    ? false
    : 'drawerOpen' in localStorage
    ? true
    : false
  ))
    
  const [overlay, setOverlay] = useState(() => window.outerWidth <= 1400)
  const {categories} = useLoaderData()
  const {category} = useParams()
  
  const closeDrawer = () => setOpen(false)
  const toggleDrawer = () => setOpen(!open)

  useEffect(()=> (
  open 
  ? localStorage.setItem('drawerOpen', '1') 
  : localStorage.removeItem('drawerOpen')
  ), [open])
  
  useEffect (()=>{
    let currentWindowWidth = window.outerWidth

    function handleWindowResize(){
      //Run only when the horizontal width changes to avoid firing on keyboard popup on touch devices
      if (window.outerWidth === currentWindowWidth) return
      currentWindowWidth = window.outerWidth

      if (window.outerWidth <= 1400){
        setOpen(false)
        setOverlay(true)
      } else {
        setOverlay(false)
      }
    }

    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <>
    <BurgerMenuBtn id="burgerMenuBtn" className={`fixed left-4 top-6 z-50`} open={open} toggleDrawer={toggleDrawer} />
    <Drawer open={open} onClose={closeDrawer} overlay={overlay}
    dismiss={{ 
      escapeKey: true, 
      outsidePress: ((e)=>(
        !e.target.closest('#burgerMenuBtn') && window.outerWidth <= 1400
        ? true
        : false
      )),
    }} 
    overlayProps={{className:'z-30 fixed'}}
    className={`z-40`} >

      <Card shadow={false} className={`h-[100svh] overflow-auto flex-nowrap bg-white dark:bg-gray-800 rounded-none transition-colors duration-300`}>
        <CardBody className={`flex-1 px-0 flex flex-col gap-6 mt-20`}>

          {/* Site title */}
          <Link to="/">
            <Typography variant='h4' className={`px-4 dark:text-gray-100 transition-colors duration-300`}>TODO App</Typography> 
          </Link>

          {/* ThemeChanger */}
          <ThemeChanger />



          {/* Category menu starts here */}
          <List className='px-4'>
          <Typography className='mb-2 text-gray-700 dark:text-gray-300 transition-colors duration-300' variant='h6'>Category</Typography>
            {/* Persistent Home category */}
            <NavLink key='Home' to={`/Home`} className='group'>

              <ListItem className={`py-2 dark:text-white group-[.active]:bg-gray-300 dark:group-[.active]:text-gray-900 dark:group-[.active]:bg-white dark:hover:text-black transition-colors duration-300`}>
                Home
              </ListItem>

            </NavLink>
            
            {categories.map(category => {
              if (category === 'Home') return null

              return(
                <NavLink key={category} to={`/${category}`} className='group'>

                  <ListItem className={`py-2 dark:text-white group-[.active]:bg-gray-300 dark:group-[.active]:text-gray-900 dark:group-[.active]:bg-white dark:hover:text-black transition-colors duration-300`}>
                    {category}
                  </ListItem>

                </NavLink>
              )
            })}

            {/* Placeholder category for when user is in a brand new category link */}
            {(!categories.includes(category) && category !== 'Home') && (
              <NavLink key={category} to={`/${category}`} className='group'>

                <ListItem className={`py-2 dark:text-white group-[.active]:bg-gray-300 dark:group-[.active]:text-gray-900 dark:group-[.active]:bg-white dark:hover:text-black transition-colors duration-300`}>
                  {category}
                </ListItem>

              </NavLink>
            )}

            <CategoryMaker />

          </List>
        </CardBody>

        <CardFooter>
          
          <Card shadow={false} variant='filled' className='bg-transparent text-gray-900 dark:text-gray-50'>
            <CardBody className={`flex flex-col gap-0 p-0`}>
              <hr className='h-0.5 mb-4 rounded bg-gray-900/40'/>
              <Typography variant='h6'>Mohammed Salman Khan</Typography>
              <Typography className={`text-sm font-medium`}>Jr. Frontend Web Developer</Typography>
              <div className="flex gap-4 mt-2 flex-wrap">

                <a href="https://github.com/webdevsk/react-todo-app" target='_blank' rel='noreferrer'>
                  <Tooltip content="GitHub" animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0, y: 25 }, }}>
                    <IconButton title='Developer Github' className="bg-white rounded shadow-none hover:shadow-none w-6 h-6">
                      <FontAwesomeIcon className={`w-7 h-7 mt-[2px] text-gray-900`} icon={faGithubSquare} />
                    </IconButton>
                  </Tooltip>
                </a>

                <a href="https://www.linkedin.com/in/webdevsk/" target='_blank' rel='noreferrer'>
                  <Tooltip content="Linkedin" animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0, y: 25 }, }}>
                    <IconButton title='Developer Linkedin' className="bg-white rounded shadow-none hover:shadow-none w-6 h-6">
                      <FontAwesomeIcon className={`w-7 h-7 mt-[2px] text-gray-900`} icon={faLinkedin} />
                    </IconButton>
                  </Tooltip>
                </a>


              </div>
            </CardBody>
          </Card>

        </CardFooter>
      </Card>
      
      

    </Drawer>
    </>
  )
}

function BurgerMenuBtn({id, className, open, toggleDrawer}){
  return(
    <div className={className}>
      <button onClick={toggleDrawer} title='Toggles drawer menu' className={`relative group`}>
        <div id={id} className={`relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-gray-300 ring-gray-300 hover:ring-8 ${open ? 'ring-4' : 'ring-0'} ring-opacity-30 duration-200 shadow-md`}>
          <div className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden ${open && '-translate-x-1.5 rotate-180'}`}>
            <div className={`bg-black h-[2px] transform transition-all duration-300 origin-left ${open ? 'rotate-[42deg] w-2/3 delay-150' : 'w-7'}`}></div>
              <div className={`bg-black h-[2px] w-7 rounded transform transition-all duration-300 ${open && 'translate-x-10'}`}></div>
            <div className={`bg-black h-[2px] transform transition-all duration-300 origin-left ${open && '-rotate-[42deg]'} ${open ? 'w-2/3 delay-150' : 'w-7'}`}></div>
          </div>
        </div>
      </button>
    </div>
  )
}
