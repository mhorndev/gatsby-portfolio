import React, { useEffect, useRef, useState } from "react"

import { motion } from "framer-motion"
import { FaUser } from 'react-icons/fa';
import { FaAt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import styled from "styled-components";

const Page = styled.div`
  top: 0; bottom: 0;
  left: 0; right: 0;
`

const Container = styled.div`
  margin: 0 auto;
  padding: 20px; 
  max-width: 1000px;
  @media (min-width: 768px) { display: flex; }
`

const Flex = styled.div`
  flex: ${props => props.flex};
`

const Header = styled.h1`
  margin-top: 0;
`

const Accent = styled.span`
  color: ${props => props.theme.accent};
`

const Paragraph = styled.p`
  margin-top: 0;
`

const SubmitButton = styled.button`
  border: none;
  outline: none;
  width: 100%;
  margin-top: 2em;
  padding: 10px;
  font-size: 1em;
  font-weight: 600;
  font-family: inherit;
  color: ${props => 
  props.theme.buttonTextColor};
  background-color: ${props => 
  props.theme.buttonColor};
`

const Contact = ({}) => {

  return (
    <Page>
      <Container>
        <Flex flex={2}>
          <Header>
            Let's <Accent>Talk</Accent>.
          </Header>
        </Flex>
        <Flex flex={4}>
          <Paragraph>
            I am always up for additional oppurtunities.
          </Paragraph>
          <Paragraph>
            If you are interested in hiring me for a project or 
            want or just want to say hi, fill out the form or email
            me directly at <strong>mhorn.dev@gmail.com</strong>
          </Paragraph>

          <TextInput label="Name"/>
          <TextInput label="Email"/>
          <TextArea  label="Message"/>

          <SubmitButton>Submit Message</SubmitButton>

        </Flex> 
      </Container>
    </Page>
  ) 
}

const TextInput = ({label}) => {
  const [active,setActive] = useState(false)
  const [value,setValue] = useState("")

  function onChange(e) {
    setValue(e.target.value)
  }

  return (
    < >
      <h4 style={{marginBottom: 0}}>
        {label}
        <span className="oswald"></span>
      </h4>

      <input
        type="text" 
        spellCheck={false}
        onFocus={()=>setActive(true)}
        onBlur={()=>setActive(false)}
        onChange={e=>onChange(e)}
      />

      <motion.div 
        className="line"
        initial={{width: "0%"}}
        animate={{width: active ? "100%" : 0}}
        transition={{duration: .25}}
      ></motion.div>
      
    </>
  )
}

const TextArea = ({label}) => {
  const [active,setActive] = useState(false)
  const [value,setValue] = useState("")

  function onChange(e) {
    setValue(e.target.value)
  }

  return (
    < >
      <h4 style={{marginBottom: 0}}>
        {label}
        <span className="oswald"></span>
      </h4>

      <div 
        contentEditable
        spellCheck={false}
        onFocus={()=>setActive(true)}
        onBlur={()=>setActive(false)}
        onChange={e=>onChange(e)}
      />

      <motion.div 
        className="line"
        initial={{width: "0%"}}
        animate={{width: active ? "100%" : 0}}
        transition={{duration: .25}}
      ></motion.div>
      
    </>
  )
}

export default Contact