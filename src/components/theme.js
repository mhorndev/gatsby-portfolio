import { createGlobalStyle } from 'styled-components'
import "fontsource-montserrat"

const GlobalStyle = createGlobalStyle`
  html, body {
    font-size: 16px;
    font-family: Montserrat; 
    transition: all 250ms ease;
    color: ${props => (props.darkMode ? "#FFFFFF" : "#000000")};
    background-color: ${props => (props.darkMode  ? "#202020" : "#FFFFFF")};
  }
  * {
    box-sizing: border-box;
  }
`
const lightTheme = {
  color: "#000000",
  backgroundColor: "#FFFFFF"
}

const darkTheme = {
  color: "#FFFFFF",
  backgroundColor: "#202020"
}

export { lightTheme, darkTheme, GlobalStyle } 