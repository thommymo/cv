import React, { Component } from 'react';
import CurriculumVitae from './components/curriculum-vitae'
import { Helmet } from 'react-helmet';
import styled from 'styled-components'
import { white, primary } from './utils/colors'
import { StyledH1, StyledP } from './components/styled-atoms'
import { TimelineContent } from './components/content/timeline-content'

//TODO: injectGlobal might has to be moved somewhere else
import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Assistant');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Assistant', sans-serif;
    font-size: 100%;
  }
`

//TODO: Add React Router and add a 404 page
//TODO: Maybe add Redux, although this could be a bit over engineered
//TODO: Add a print version

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
          <StyledH1>CV Thomas Moser</StyledH1>
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
        <TimelineContent />
        <Footer>
          <StyledP>Thomas Moser, Bireggstrasse 33, 6003 Luzern</StyledP>
          {
            //TODO: Add Footer with adress and contact details
          }
        </Footer>
      </div>
    );
  }
}
const Footer = styled.footer`
  color: ${white};
  background-color: ${primary};
  width:100%;
  display: flex;
`
const Header = styled.header`
  color: ${white};
  background-color: ${primary};
  width:100%;
  display: flex;
`
const Section = styled.section`
  min-height:100px;
  background-color: #eeeeee;
`


export default App;
