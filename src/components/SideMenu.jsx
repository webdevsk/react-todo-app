import { Drawer } from '@material-tailwind/react';
import React, { useState } from 'react'

export default function SideMenu() {
    const [open, setOpen] = useState(false)
    const openDrawer = () => setOpen(true)
    const closeDrawer = () => setOpen(false)
    const toggleDrawer = () => setOpen(!open)

  return (
    <>
    <Drawer open={open} onClose={closeDrawer} overlay={false}
    dismiss={{
        escapeKey: true,
        outsidePress: false,
    }}
    className={``}
    >
        
        <button className={`absolute p-8 bg-blue-300 left-full top-2/4`} onClick={toggleDrawer}>Try this</button>
        Hello World
    </Drawer>
    </>
  )
}
