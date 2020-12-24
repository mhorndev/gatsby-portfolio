import React, { useEffect, useState } from "react"
import { Context } from "./context"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, lightTheme, darkTheme } from "./theme"

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
    localStorage.setItem("darkMode", globalContext.darkMode)
  }, [globalContext.darkMode])

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