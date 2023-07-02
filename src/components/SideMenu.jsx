import { Drawer, List, Typography, ListItem, ListItemPrefix, ListItemSuffix, Card, CardHeader, CardFooter, CardBody, Tooltip, IconButton } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function SideMenu() {
  const devMode = false
  const [open, setOpen] = useState(()=>{
    if (!devMode && window.innerWidth <= 1400) return false

    const storedVal = localStorage.getItem('drawerOpen')
    if (storedVal == null || storedVal == '') return true
    return JSON.parse(localStorage.getItem('drawerOpen'))
  })
  const openDrawer = () => setOpen(true)
  const closeDrawer = () => setOpen(false)
  const toggleDrawer = () => setOpen(!open)
  useEffect(()=> localStorage.setItem('drawerOpen', JSON.stringify(open)), [open])
  useEffect (()=>{
    function handleWindowResize(){
      if (!devMode && window.innerWidth <= 1400) return setOpen(false)
    }

    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <>
    <BurgerMenuBtn id="burgerMenuBtn" className={`fixed left-4 top-6 z-50`} open={open} toggleDrawer={toggleDrawer} />
    <Drawer open={open} onClose={closeDrawer} overlay={false} 
    dismiss={{ 
      escapeKey: true, 
      outsidePress: ((e)=>{
        if(!e.target.closest('#burgerMenuBtn') 
        && window.innerWidth <= 1400
        && e.pointerType === 'touch') return true
      }) 
    }} 
    className={`z-40 shadow-sm bg-white`} >

      <Card shadow={false} className={`h-[100svh] overflow-auto flex-nowrap`}>
        <CardBody shadow={false} className={`flex-1`}>
          <a href="/">
            <Typography variant='h4' className={`mt-16`}>TODO App</Typography> 
          </a>
        </CardBody>

        <CardFooter>
          
          <Card shadow={false} variant='filled' color='white'>
            <CardBody className={`flex flex-col gap-0 p-0`}>
              <hr className='h-0.5 mb-4 rounded bg-gray-900/40'/>
              <Typography color='gray' variant='h6'>Mohammed Salman Khan</Typography>
              <Typography color='gray' className={`text-sm font-medium`}>Jr. Frontend Web Developer</Typography>
              <div className="flex gap-4 mt-2 flex-wrap">

                <a href="https://github.com/webdevsk" target='_blank' rel='noreferrer'>
                  <Tooltip content="GitHub" target='_blank' rel='noreferrer'>
                    <IconButton className="bg-white rounded shadow-none hover:shadow-none w-6 h-6">
                      <FontAwesomeIcon className={`w-7 h-7 mt-[2px] text-gray-900`} icon={faGithubSquare} />
                    </IconButton>
                  </Tooltip>
                </a>

                <a href="https://www.linkedin.com/in/webdevsk/" target='_blank' rel='noreferrer'>
                  <Tooltip content="Linkedin">
                    <IconButton className="bg-white rounded shadow-none hover:shadow-none w-6 h-6">
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
      <button onClick={toggleDrawer} className={`relative group`}>
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
