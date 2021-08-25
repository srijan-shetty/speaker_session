import React, { useState } from 'react'

const useTheme = (startingTheme="light") => {
    const [theme, setTheme] = useState(startingTheme)
    function validateTheme(themeValue){
        if(themeValue === 'dark'){
            setTheme("dark")
        }
        else
            setTheme("light")
    }
    return {
        theme,
        setTheme: validateTheme,
    }
}

export default useTheme
