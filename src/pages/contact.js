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
`

const Heading = styled.h1`
  margin-top: 1em;
`

const Contact = ({}) => {
  return (
    <Page>
      <Content>
        <Heading>Let's Talk</Heading>
      </Content>
    </Page>
  )
}

export default Contact