import React, {useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { Context } from "../components/context"
import { useGesture } from "react-use-gesture"
import { AnimatePresence, motion } from "framer-motion"

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
  const [y,setY] = useState(0)
  const [throttle,setThrottle] = useState(Date.now())
  const [[slide, direction], setSlide] = useState([0, 0])
  const {globalContext,setGlobalContext} = useContext(Context)

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
      onDrag: state => {
        return
      },
      
      onDragStart: state => {
        setY(state.xy[1])
      },

      onDragEnd: state => {
        if (state.velocity > 0) {
          state.xy[1] > y ? prev() : next()
        }
        setY(null)
      },

      onWheel: state => {
        return
      },

      onWheelStart: state => {
        setY(state.direction[1])
      },

      onWheelEnd: state => {
        state.direction[1] > 0 ? next() : prev()
        setY(null)
      }
    }
  )

  return (
    <Page>
      <AnimatePresence 
        initial={false} 
        custom={direction}
      >
        <Slider {...bind()}
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


/*
const Slides = [
  {
    name:"Hello",
    backgroundColor:"aqua"
  },
  {
    name:"About",
    backgroundColor:"aquamarine"
  },
]

const Page = styled.div`
  position: fixed;
  top: 0; bottom: 0;
  left: 0; right: 0;
  overflow-x: none;
`

const Slide = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`


const Index = ({}) => {
  const [y,setY] = useState(0)
  const [slide,setSlide] = useState(0)
  const [throttle,setThrottle] = useState(Date.now())
  const {globalContext,setGlobalContext} = useContext(Context)
  const max = 5

  function prev() {
    if ((Math.floor(Date.now() - throttle)/1000) > .5) {
      if (slide-1 >= 0) {
        console.log("prev")
        setThrottle(Date.now())
        setSlide(slide - 1)
      }
    }
  }

  function next() {
    if ((Math.floor(Date.now() - throttle)/1000) > .5) {
      if (slide+1 <= Slides.length - 1) {
        console.log("next")
        setThrottle(Date.now())
        setSlide(slide + 1)
      }
    }
  }

  useEffect(()=> {
    console.log(slide)
  }, [slide])

  const bind = useGesture(
    {
      onDrag: state => {
        return
      },
      
      onDragStart: state => {
        setY(state.xy[1])
      },

      onDragEnd: state => {
        if (state.velocity > 0) {
          state.xy[1] > y ? prev() : next()
        }
        setY(null)
      },

      onWheel: state => {
        return
      },

      onWheelStart: state => {
        setY(state.direction[1])
      },

      onWheelEnd: state => {
        state.direction[1] > 0 ? next() : prev()
        setY(null)
      }
    }
  )

  return (
    <Page>
      <AnimatePresence initial={false}>
        {Slides.map((item,index) => {
          return (
            <Slide 
              {...bind()}
              key={item + index} 
              initial={{y: "100vh"}}
              animate={{y: slide === index ? "0vh" : "100vh"}}
            >
            <h1>{slide.name}</h1>
          </Slide>
          )
        })}
      </AnimatePresence>
    </Page>
  )
}
*/


export default Index