import React, {useContext } from "react"
import styled from "styled-components"
import { Context } from "../components/context"

const Portfolio = ({}) => {
  const {globalContext,setGlobalContext} = useContext(Context)

  return (
    <div>
      Portfolio
    </div>
  )
}

export default Portfolio