import React, { useState } from "react"
import styled from "styled-components"
import { useGesture } from "react-use-gesture"
import { AnimatePresence, motion } from "framer-motion"

const Page = styled.div`
  position: fixed;
  top: 0; bottom: 0;
  left: 0; right: 0;
  overflow: hidden;
`

const Slider = styled(motion.div)`
  position: fixed;
  top: 0; bottom: 0;
  left: 0; right: 0;
`

const Slide = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Hello = () => {
  return (
    <Slide hero>
      <h1>Hello</h1>
    </Slide>
  )
}

const About = () => {
  return (
    <Slide>
      <h1>About</h1>
    </Slide>
  )
}

const Slides = [
  <Hello/>,
  <About/>
]

const Index = () => {
  const [throttle,setThrottle] = useState(Date.now())
  const [[slide, direction], setSlide] = useState([0, 0])

  function prev() {
    if ((Math.floor(Date.now() - throttle)/1000) > .5) {
      if (slide-1 >= 0) {
        console.log("prev")
        setThrottle(Date.now())
        setSlide([slide - 1, -1])
      }
    }
  }

  function next() {
    if ((Math.floor(Date.now() - throttle)/1000) > .5) {
      if (slide+1 <= Slides.length - 1) {
        console.log("next")
        setThrottle(Date.now())
        setSlide([slide + 1, 1])
      }
    }
  }
  
  const bind = useGesture(
    {
      onWheel: state => {
        state.direction[1] > 0 ? next() : prev()
      },
      onDrag: state => {
        if (state.axis === "y") {
          state.direction[1] > 0 ? prev() : next()
        }
      }
    }
  )

  const variants = {
    enter: (direction) => {
      return {
        y: direction > 0 ? "100vh" : "-100vh"
      }
    },
    center: {
      y: 0
    },
    exit: (direction) => {
      return {
        y: direction < 0 ? "100vh" : "-100vh"
      }
    }
  }

  return (
    <Page>
      <AnimatePresence 
        initial={false} 
        custom={direction}
      >
        <Slider {...bind()} style={{touchAction: "unset"}}
          key={slide} 
          custom={direction} 
          variants={variants}
          initial="enter" 
          animate="center"
          exit="exit" 
          transition={{ ease: "easeInOut", duration: .25}}
        >
          {Slides[slide]}
        </Slider>
      </AnimatePresence>
    </Page>
  )
}

export default Index