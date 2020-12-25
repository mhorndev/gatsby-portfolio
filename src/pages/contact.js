import React, { useState, createContext, useContext, useEffect } from "react"
import { motion } from "framer-motion"
import {  FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import styled from "styled-components";
import { doc } from "prettier";
const FormContext = createContext(null)

const Profiles = [
  { 
    text: "LinkedIn",
    icon: <FaLinkedin size="1.25em"/>,
    href: "https://www.linkedin.com/in/mark-horn-61b898172/",
    backgroundColor: "#0072B1",
  },
  {
    text: "Github",
    icon: <FaGithub size="1.25em"/>,
    href: "https://github.com/mhorndev",
    backgroundColor: "#333333",
  }
]

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

const ProfileHeader = styled.h2`
  margin-top: 1.5em;  
`

const ProfileButtons = styled.div`
  width: 100%;
  display: flex;
`

const ProfileButton = styled(motion.a)`
  display: flex;
  padding: 10px;
  margin-right: 10px;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: #FFFFFF;
  font-weight: bold;
  background-color: ${props => props.backgroundColor};
`

const ProfileButtonText = styled(motion.span)`
  display: flex;
  margin-left: 10px;
  align-items: center;
`

const ProfileButtonIcon = styled(motion.span)`
  display: flex;
  align-items: center;  
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

  function onSubmit() {
    console.log("SUBMIT")
  }

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

          <SubmitButton onClick={() => onSubmit()}>
            Submit Message
          </SubmitButton>

          <ProfileHeader>
            Social Profiles
          </ProfileHeader>
          <Paragraph>
            You can also reach out to me on public social spaces.
          </Paragraph>
          
          <ProfileButtons>
            {Profiles.map((profile,index) => {
              return (
                <ProfileLink 
                  key={profile+index}
                  text={profile.text}
                  icon={profile.icon}
                  href={profile.href}
                  backgroundColor={profile.backgroundColor}
                />
              )
            })}
          </ProfileButtons>



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
  const [rows, setRows] = useState(1)

  function onChange(e) {
    let value = e.target.value
    var lines = value.split(/\r|\r\n|\n/)
    setRows(lines.length)
    setFormContext(prev => ({ ...prev, 
      message: { 
        value: value, 
        valid: value.length > 0 
      } 
    }))
  }

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

const ProfileLink = ({text,icon,href,backgroundColor}) => {
  const [hover,setHover] = useState(false)

  return (
    <ProfileButton
      href={href}
      target="_blank"
      onMouseOver={()=>setHover(true)}
      onMouseOut={()=>setHover(false)}
      backgroundColor={backgroundColor}
      initial={{opacity: 1}}
      animate={{opacity: hover ? .75 : 1}}
      transition={{ease: "easeInOut", duration: .25}}
    >
      <ProfileButtonIcon>
        {icon}
      </ProfileButtonIcon>

      <ProfileButtonText>
        {text}
      </ProfileButtonText>

    </ProfileButton>
  )
}

export default ContactPage