import React, { useEffect, useRef, useState } from "react"

import "fontsource-montserrat"
import { motion } from "framer-motion"
import { FaUser } from 'react-icons/fa';
import { FaAt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export default function Home() {

  return (
      <div id="page">
        <div className="container">
          <div className="header">
            <h1 className="heading">Let's <span className="secondary">Talk</span>
              <span className="oswald">.</span>
            </h1>
          </div>
          <div className="content">
            <p>I am always up for additional oppurtunities.</p>
            <p>If you are interested in hiring me for a project or 
              want or just want to say hi, fill out the form or email
              me directly at <strong>blah@blah.com</strong></p>

              <TextInput label="Name"/>
              <TextInput label="Email"/>
              <TextArea  label="Message"/>
              <button><strong>Submit Message</strong></button>

          </div> 
          </div>
        </div>
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