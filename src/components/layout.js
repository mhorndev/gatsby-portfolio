import React, { useEffect, useState } from "react"
import { Context } from "./context"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, lightTheme, darkTheme } from "./theme"
import { Link } from "gatsby"

const Layout = ({children}) => {

  const [globalContext,setGlobalContext] = useState({
    darkMode: JSON.parse(localStorage.darkMode || false),
  })

  function toggleDarkMode() {
    setGlobalContext(prev => ({ ...prev, 
      darkMode: !globalContext.darkMode
    }))
  }

  useEffect(() => {
    console.log(globalContext.darkMode)
    localStorage.setItem("darkMode", globalContext.darkMode)
  }, [globalContext.darkMode])

  useEffect(() => {
    console.log(document.body.style.color)
  })

  

  return (
    <Context.Provider value={{globalContext,setGlobalContext}}>
      <ThemeProvider theme={globalContext.darkMode ? darkTheme : lightTheme}>
        <GlobalStyle darkMode={globalContext.darkMode}/>
        <button onClick={toggleDarkMode}>
          Toggle
        </button>
        {children}
      </ThemeProvider>
    </Context.Provider>
  )
}

export default Layout