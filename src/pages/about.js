import React, {useContext } from "react"
import styled from "styled-components"
import { Context } from "../components/context"

const About = ({}) => {
  const {globalContext,setGlobalContext} = useContext(Context)

  return (
    <div>
      About
    </div>
  )
}

export default About