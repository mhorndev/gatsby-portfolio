import { createGlobalStyle } from 'styled-components'
import "../style.css"

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
  accent: "#9400D3",
  backgroundColor: "#FFFFFF",
  buttonColor: "#9400D3",
  buttonTextColor: "#FFFFFF"
}

const darkTheme = {
  color: "#FFFFFF",
  accent: "#9400D3",
  backgroundColor: "#202020",
  buttonColor: "#9400D3",
  buttonTextColor: "#FFFFFF"
}

export { lightTheme, darkTheme, GlobalStyle } 