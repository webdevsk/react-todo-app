import { Tab, Tabs, TabsHeader, Tooltip, Typography } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../routes/root"

function ThemeChanger() {
    const {theme, setTheme} = useContext(ThemeContext)
    console.log('I ran')
  return (
    <div className='px-4'>
        <Typography className='mb-2 text-gray-700 dark:text-gray-300  transition-colors duration-300' variant='h6'>Theme</Typography>
        <Tabs value={theme}
        className=''>
            <TabsHeader>
                <Tooltip content={`Follow OS (Limited support)`} animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
                }}>
                    <Tab key='auto' value='auto' title='auto' onClick={() => setTheme('auto')}>
                        Auto
                    </Tab>
                </Tooltip>

                <Tab key='light' value='light' title='light' onClick={() => setTheme('light')}>
                    Light
                </Tab>

                <Tab key='dark' value='dark' title='dark' onClick={() => setTheme('dark')}>
                    Dark
                </Tab>

            </TabsHeader>
        </Tabs>
    </div>
  )
}

export default ThemeChanger