import React, { Component } from 'react';
import CurriculumVitae from './components/curriculum-vitae'
import { Helmet } from "react-helmet";
import styled from 'styled-components'
import { white, primary, primaryDark} from './utils/colors'

//TODO: Add React Router and add a 404 page
//TODO: Maybe add Redux, although this could be a bit over engineered
//TODO: Add a print version

class App extends Component {
  render() {
    return (
      <StyledDiv>
        <Helmet>
          <title>Bewerbung Thomas Moser</title>
        </Helmet>
        <Header>
          {
            //TODO: Title and maybe a Navigation (Mainly Text, maybe with some interaction)
          }
          <h1>CV Thomas Moser</h1>
        </Header>
        <Section>
          <CurriculumVitae />
        </Section>
        <Section>
          {
            //TODO: Who am I (Mainly Text, maybe with some interaction)
          }
        </Section>
        <Section>
          {
            //TODO: Why do I want this Job (Mainly Text, maybe with some interaction)
          }
        </Section>
        <Section>
          {
            //TODO: Why am I suited for this Job (Mainly Text, maybe with some interaction)
          }
        </Section>
        <Section>
          {

            //TODO: What I did so far
            //This will be more complex and will contain a timeline, all certificates, and employer references including sample projects and prices won
          }
        </Section>
        <Footer>
          <p>Thomas Moser, Bireggstrasse 33, 6003 Luzern</p>
          {
            //TODO: Add Footer with adress and contact details
          }
        </Footer>
      </StyledDiv>
    );
  }
}
const StyledDiv = styled.div`

`
const Footer = styled.footer`
  color: ${white};
  background-color: ${primary};
  min-height:120px;
  width:100%;
  display: flex;
`

const Header = styled.header`
  color: ${white};
  background-color: ${primary};
  padding:1em;
  width:100%;
  display: flex;
`

const Section = styled.section`
  min-height:100px;
  background-color: #eeeeee;
`

export default App;
