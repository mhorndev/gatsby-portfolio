import React, { useEffect, useState } from "react"
import "../style.css"
import { Context } from "./context"
import routes from "./routes"
import { navigate } from "gatsby"
import Navbar from "./navbar"
import Transition from "./transition"
//import { ThemeProvider } from "styled-components"
//import { GlobalStyle, lightTheme, darkTheme } from "./theme"

const Layout = ({children, location}) => {
  const [globalContext,setGlobalContext] = useState({})

  /**
   * @todo Polyfill for findIndex
   * This effect determines direction of the transition before render
   * 
   */
  useEffect(() => {
    let next = routes.findIndex(obj => obj.path === globalContext.path)
    let curr = routes.findIndex(obj => obj.path === location.pathname)
    setGlobalContext(prev => ({...prev, direction: next > curr ? 1 : -1}))
    navigate(globalContext.path)
  }, [globalContext.path])

  return (
    <Context.Provider value={{globalContext,setGlobalContext}}>
      <Navbar/>
      <Transition>
        {children}
      </Transition>
    </Context.Provider>
  )
}

export default Layout

/*
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
*/
