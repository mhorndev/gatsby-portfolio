import React, {useContext } from "react"
import styled from "styled-components"
import { Context } from "../components/context"

const Index = ({}) => {
  const {globalContext,setGlobalContext} = useContext(Context)

  return (
    <div>
      Index
    </div>
  )
}

export default Index