import React, { useState, createContext, useContext, useEffect } from "react"
import { motion } from "framer-motion"
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import styled from "styled-components";
import { doc } from "prettier";
const FormContext = createContext(null)

const Page = styled.div`
  top: 0; bottom: 0;
  left: 0; right: 0;
  overflow-x: none;
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

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: inherit;
  font-family: inherit;
  outline: none;
  border: none;
  border-radius: 0;
  transition: all 250ms ease;
  color: ${props => props.theme.inputTextColor};
  background-color: ${props => props.theme.inputColor};
`

const InputLabel = styled.h4`
  margin-bottom: 0;
`

const Message = styled.textarea`
  width: 100%;
  padding: 10px;
  display: flex;
  font-size: inherit; 
  font-family: inherit;
  overflow: hidden;
  outline: none;
  border: none;
  border-radius: 0;
  resize: none;
  transition: all 250ms ease; 
  color: ${props => props.theme.inputTextColor};
  background-color: ${props => props.theme.inputColor};
`

const Underline = styled(motion.div)`
  height: 3px;
  width: 0%;
  background-color: ${props => props.theme.accent};
`

const SubmitButton = styled.button`
  border: none;
  outline: none;
  width: 100%;
  margin-top: 2.5em;
  padding: 10px;
  font-size: 1em;
  font-weight: 600;
  font-family: inherit;
  color: ${props => 
  props.theme.buttonTextColor};
  background-color: ${props => 
  props.theme.buttonColor};
  cursor: pointer;
`

const ContactPage = ({}) => {
  const [formContext,setFormContext] = useState({
    name: {
      value: "",
      valid: undefined
    },
    email: {
      value: "",
      valid: undefined
    },
    message: {
      value: "",
      valid: undefined
    }
  })

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
            me directly at {" "}
            <strong>mhorn.dev@gmail.com</strong>
          </Paragraph>
          <FormContext.Provider value={{formContext,setFormContext}}>
            <NameInput/>
            <EmailInput/>
            <MessageInput/>
          </FormContext.Provider>
          <SubmitButton>Submit Message</SubmitButton>
        </Flex> 
      </Container>
    </Page>
  ) 
}

const NameInput = () => {
  const [active,setActive] = useState(false)
  const {formContext,setFormContext} = useContext(FormContext)

  function onChange(e) {
    let value = e.target.value
    setFormContext(prev => ({ ...prev, 
      name: { 
        value: value, 
        valid: value.length > 0 
      } 
    }))
  }

  return (
    < >
      <InputLabel>
        Name
      </InputLabel>
      <Input
        type="text" 
        spellCheck={false}
        onFocus={()=>setActive(true)}
        onBlur={()=>setActive(false)}
        onChange={e=>onChange(e)}
      />
      <Underline
        className="line"
        initial={{width: "0%"}}
        animate={{width: active ? "100%" : 0}}
        transition={{duration: .25}}
      />
    </>
  )
}

const EmailInput = () => {
  const [active,setActive] = useState(false)
  const {formContext,setFormContext} = useContext(FormContext)

  function onChange(e) {
    let value = e.target.value
    setFormContext(prev => ({ ...prev, 
      email: { 
        value: value, 
        valid: value.length > 0 
      } 
    }))
  }

  return (
    < >
      <InputLabel>
        Email
      </InputLabel>
      <Input
        type="text" 
        spellCheck={false}
        onFocus={()=>setActive(true)}
        onBlur={()=>setActive(false)}
        onChange={e=>onChange(e)}
      />
      <Underline
        className="line"
        initial={{width: "0%"}}
        animate={{width: active ? "100%" : 0}}
        transition={{duration: .25}}
      />
    </>
  )
}

const MessageInput = () => {
  const [active,setActive] = useState(false)
  const {formContext,setFormContext} = useContext(FormContext)
  const [multiplier, setMultiplier] = useState(undefined)
  const [rows, setRows] = useState(1)

  function onChange(e) {
    var text = e.target.value  
    var lines = text.split(/\r|\r\n|\n/);
    var count = lines.length;
    console.log(count); // Outputs 4
    setRows(count)

    
    let value = e.target.value
    setFormContext(prev => ({ ...prev, 
      message: { 
        value: value, 
        valid: value.length > 0 
      } 
    }))
  }

  useEffect(()=> {
    const element = document.getElementById("message-input")
    const height = document.getElementById("message-input").offsetHeight-20
    console.log(height)
    setMultiplier(height)
  },[])

  return (
    < >
      <InputLabel>
        Message
      </InputLabel>
      <Message
        id="message-input"
        rows={rows}
        spellCheck={false}
        onFocus={()=>setActive(true)}
        onBlur={()=>setActive(false)}
        onInput={e=>onChange(e)}  
      />
      <Underline
        className="line"
        initial={{width: "0%"}}
        animate={{width: active ? "100%" : 0}}
        transition={{duration: .25}}
      />
    </>
  )
}

export default ContactPage