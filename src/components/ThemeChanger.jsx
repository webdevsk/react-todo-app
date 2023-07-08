import { Tab, Tabs, TabsHeader, Typography } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../routes/root"

function ThemeChanger() {
    const {theme, setTheme} = useContext(ThemeContext)

    const themes = [
        {label: 'Auto', value: 'auto'},
        {label: 'Light', value: 'light'},
        {label: 'Dark', value: 'dark'},
    ]

  return (
    <div className='px-4'>
        <Typography className='mb-2 text-gray-700 dark:text-gray-300  transition-colors duration-300' variant='h6'>Theme</Typography>
        <Tabs value={theme}
        className=''>
            <TabsHeader>
                {themes.map(item => (

                    <Tab key={item.value} value={item.value} onClick={() => setTheme(item.value)}>
                        {item.label}
                    </Tab>

                ))}
            </TabsHeader>
        </Tabs>
    </div>
  )
}

export default ThemeChanger