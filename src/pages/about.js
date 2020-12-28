import React, {useContext } from "react"
import styled from "styled-components"
import { Context } from "../components/context"

const Page = styled.div`
  top: 0; bottom: 0;
  left: 0; right: 0;
  overflow-x: none;
`

const Container = styled.div`
  margin: 0 auto;
  padding: 20px; 
  max-width: 1000px;
`

const Section = styled.div`
  width: 100%;
  border-bottom: 1px solid #000;
  @media (min-width: 768px) { 
  display: ${
    props => props.flex 
      ? "flex" 
      : "block"
    }; 
  }
`

const Header = styled.h1`
  width: 100%;
`

const Accent = styled.span`
  color: ${props => props.theme.accent};
`

const Description = styled.div`
  flex: ${props => props.flex};
`

const Content = styled.div`
  flex: ${props => props.flex};
`

const Label = styled.h3`
  color: #999999;
`

const Heading = styled.h3`
  margin-bottom: 0;
`

const SubHeading = styled.div`
  margin-top: 0;
  margin-bottom: 0;
`

const Timeframe = styled.div`
  margin-top: 0;
`

const List = styled.ul`
  margin-left: 0; 
  padding-left: 0;
  list-style-type: none;
`

const Item = styled.li`
  &:before {
    content: "• ";
    font-weight: bold;
    color: ${props => props.theme.accent};
  }
`

const AboutPage = ({}) => {
  const {globalContext,setGlobalContext} = useContext(Context)

  return (
    <Page>
      <Container>
        <Header>
          About{" "}<Accent>Me</Accent>.
        </Header>
        <Section flex>
          <Description flex={2}>
            <Label>Experience<Accent>.</Accent></Label>
          </Description>
          <Content flex={4}>
            <Heading>Streamline</Heading>
            <SubHeading>Full Stack Developer</SubHeading>
            <Timeframe>2016 - Present</Timeframe>
            <List>
              <Item>
                Developed front and back end applications
              </Item>
            </List>
            <Heading>DirecTV</Heading>
            <SubHeading>Software Engineer</SubHeading>
            <Timeframe>2013 - 2015</Timeframe>
            <List>
              <Item>abc</Item>
            </List>
            <Heading>DirecTV</Heading>
            <SubHeading>Quality Assurance</SubHeading>
            <Timeframe>2012</Timeframe>
            <List>
              <Item>abc</Item>
            </List>
          </Content>
        </Section>
        <Section flex>
          <Description flex={2}>
            <Label>Education<Accent>.</Accent></Label>
          </Description>
          <Content flex={4}>
            <Heading>Western Governor's University</Heading>
            <SubHeading>BSCS - Bachelor of Science, Computer Science</SubHeading>
            <Timeframe>2018 - 2020</Timeframe>
            <List>
              <Item>abc</Item>
            </List>
          </Content>
        </Section>
        <Section flex>
          <Description flex={2}>
            <Label>Certifications<Accent>.</Accent></Label>
          </Description>
          <Content flex={4}>
            <Heading>Project+</Heading>
            <SubHeading>Full Stack Developer</SubHeading>
            <Timeframe>2018</Timeframe>
            <List>
              <Item>abc</Item>
            </List>
            <Heading>ITIL 4</Heading>
            <SubHeading>Full Stack Developer</SubHeading>
            <Timeframe>2018</Timeframe>
            <List>
              <Item>abc</Item>
            </List>
            <Heading>CIW Site Developer</Heading>
            <SubHeading>Full Stack Developer</SubHeading>
            <Timeframe>2018</Timeframe>
            <List>
              <Item>abc</Item>
            </List>
          </Content>
        </Section>
      </Container>
    </Page>
  )
}

export default AboutPage

{/* 
      <section className={globalContext.darkMode && "dark"}>
        <div id="container">
          <div className="section-title">
            <h1>About{" "}<span className="accent">Me</span>.</h1>
          </div>
          <div className="section-content">Content</div>
        </div>
      </section>

      <section className={globalContext.darkMode ? "dark alt" : "alt"}>
        <div id="container">
          <div className="section-title"><h1>Experience.</h1></div>
          <div className="section-content">
            <h2>Streamline</h2>
            <h4>Full Stack Developer</h4>
            <div>2016 - Present</div>
            <ul>
              <li>
                Detail
              </li>
            </ul>
            <h2>DirecTV</h2>
            <h4>Software Engineer</h4>
            <div>2013 - 2015</div>
            <ul>
              <li>
                Detail
              </li>
            </ul>
            <h2>DirecTV</h2>
            <h4>Quality Assurance</h4>
            <div>2013</div>
            <ul>
              <li>
                Detail
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={globalContext.darkMode && "dark"}>
        <div id="container">
          <div className="section-title"><h1>Education.</h1></div>
          <div className="section-content">
            <h2>Western Governor's University</h2>
            <h4>BSCS - Bachelor of Science, Computer Science</h4>
            <div>2018 - 2020</div>
            <ul>
              <li>
                Detail
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={globalContext.darkMode ? "dark alt" : "alt"}>
        <div id="container">
          <div className="section-title"><h1>Certifications.</h1></div>
          <div className="section-content">
            <h2>Project+</h2>
            <ul>
              <li>
                Detail
              </li>
            </ul>
            <h2>ITIL</h2>
            <ul>
              <li>
                Detail
              </li>
            </ul>
            <h2>CIW Site Developer</h2>
            <ul>
              <li>
                Detail
              </li>
            </ul>
          </div>
        </div>
      </section>
      */}