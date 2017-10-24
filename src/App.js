import React, { Component } from 'react';
import CurriculumVitae from './components/curriculum-vitae'
import { Helmet } from "react-helmet";
import styled from 'styled-components'

//TODO: Add React Router and add a 404 page
//TODO: Maybe add Redux, although this could be a bit over engineered

class App extends Component {
  render() {
    return (
      <div>
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
          {
            //TODO: Add Footer with adress and contact details
          }
        </Footer>
      </div>
    );
  }
}

const Footer = styled.footer`
  flex:1;
  background-color: #eeeeee;
`

const Header = styled.header`
  flex:1;
  background-color: #eeeeee;
`

const Section = styled.section`
  flex:1;
  background-color: #eeeeee;
`

export default App;
