import React  from "react"
import styled from "styled-components"

const Page = styled.div`
  position: fixed;
  top: 0; bottom: 0;
  left: 0; right: 0;
  overflow: hidden;
`

const Content = styled.div`
  margin: 0 auto;
  padding: 20px; 
  max-width: 1000px;
  display: flex;
  flex-direction: column;
`

const Heading = styled.h1`
  margin-top: 1em;
`

const NotFound = ({}) => {
  return (
    <Page>
      <Content>
        <Heading>Fuggedabodit.</Heading>
        <p>There doesn't seem to be anything here</p>
      </Content>
    </Page>
  )
}

export default NotFound