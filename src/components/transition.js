import React, { useContext } from "react"
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"
import { Context } from "./context"

const Main = styled.main`
  position: fixed;
  top: 0; bottom: 0;
  left: 0; right: 0;
  overflow: hidden;
  background-color: #000;
  perspective: 1800;
`

const Page = styled(motion.div)`
  position: fixed;
  top: 0; bottom: 0;
  left: 0; right: 0;
  z-index: 2;
  background-color: #FFF;
`

const Transition = ({children}) => {
  const {globalContext, setGlobalContext} = useContext(Context)

  const config = {
    before: (direction) => {
      return {
        transformOrigin: direction > 0 
        ? "left"
        : "right",
          transform: direction > 0 
            ? "translateX(100%) rotateY(0deg)"
            : "translateX(-100%) rotateY(0deg)"
      }
    },
    active: {
      transformOrigin: "left",
      transform: "translateX(0%) rotateY(0deg)" 
    },
    after: (direction) => {
      return {
        backgroundColor: "whitesmoke",
        transformOrigin: direction < 0 
        ? "left"
        : "right",
          transform: direction < 0 
            ? "translateX(100%) rotateY(90deg)"
            : "translateX(-100%) rotateY(-90deg)"
      }
    }
  }

  return (
    <Main>
      <AnimatePresence initial={false} custom={globalContext.direction}>
        <Page
          id="transition"
          key={children.key}
          initial="before"
          animate="active"
          exit="after"
          variants={config}
          custom={globalContext.direction}
          transition={{duration: .75, ease: "anticipate"}}
        >
          {children}
        </Page>  
      </AnimatePresence>
    </Main>
  )
}

export default Transition