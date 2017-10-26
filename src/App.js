import React, { Component } from 'react';
import CurriculumVitae from './components/curriculum-vitae'
import { Helmet } from 'react-helmet';
import styled from 'styled-components'
import { white, primary, secondary } from './utils/colors'
import { StyledH1, StyledP, StyledH2 } from './components/styled-atoms'
import { Timeline, TimelineHeader } from './components/timeline'
import { media } from './utils/breakpoints'


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
        <TimelineHeader titleleft="Work" titleright="Studies"/>
        <SectionNoOverflow>
          <Timeline
            bothleft
            right
            bottom
            borderBottomRightRadius
            startDate="2015"
            endDate="2017"
            title="Fullstack Web Developer"
            school="Udacity"
            learned="Learning React, Node.js"
            more="Link to more info"
          />
          <Timeline
            top
            borderTopLeftRadius
            left
            bothleft
            startDate="2015"
            endDate="2017"
            title="Projektleiter Web"
            company="Luzerner Kantonsspital"
            responsability="Responsible for Relaunching luks.ch"
            more="Link to more info"
          />
          <Timeline
            left
            bothleft
            startDate="2011"
            endDate="2015"
            title="Product Owner"
            company="Schweizer Radio und Fernsehen"
            responsability="Responsible as Product Owner for srf.ch"
            more="Link to more info"
          />
          <Timeline
            left
            bottom
            borderBottomLeftRadius
            bothleft
            startDate="2010"
            endDate="2011"
            title="Projektleiter Web"
            company="Unic AG"
            responsability="Responsible for customor web projects"
            more="Link to more info"
          />
          <Timeline
            right
            top
            borderTopRightRadius
            bothleft
            startDate="2003"
            endDate="2010"
            title="Master of Science UZH"
            school="Universität Zürich"
            learned="Media Science, Cognitive Psychology, Informatics"
            more="Link to more info"
          />
          <Timeline
            left
            bothright
            startDate="2007"
            endDate="2010"
            title="Web Developer und Wissenschaftlicher Mitarbeiter"
            school="Pädagogische Hochschule Zentralschweiz"
            responsability="Responsible for customor web projects"
            more="Link to more info"
          />
          <Timeline
            left
            bothright
            startDate="2006"
            endDate="2008"
            title="Web Developer und Mitinhaber"
            company="Agentur Sign, Luzern"
            responsability="Responsible for customor web projects"
            more="Link to more info"
          />
          <Timeline
            left
            bothright
            startDate="2002"
            endDate="2006"
            title="Web Developer, selbständig erwerbend"
            company="Netzwerk Neuweg, Luzern"
            responsability="Responsible for customor web projects"
            more="Link to more info"
          />
          <Timeline
            right
            bothleft
            startDate="2002"
            endDate="2003"
            title="Multimedia Producer SAE"
            school="School of Audio Engenieering (SAE) Zürich"
            learned="Multimedia"
          />
          <Timeline
            left
            bothright
            bottom
            borderBottomLeftRadius
            startDate="2000"
            endDate="2000"
            title="Fahrradkurier"
            company="Velokurier, Luzern"
            responsability="Responsible for customor web projects"
            more="Link to more info"
          />
          <Timeline
            right
            top
            borderTopRightRadius
            bothright
            startDate="1995"
            endDate="2002"
            title="Matura Typus C"
            school="Kantonsschule Rothen (LU)"
            learned="Mainly Mathematics and Science"
          />
          <Timeline
            right
            startDate="1988"
            endDate="1995"
            title="Kindergarten und Primarschule"
            school="Primarschule Luzern"
          />

        </SectionNoOverflow>
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
const SectionNoOverflow = styled.section`
  min-height:100px;
  background-color: #eeeeee;
  overflow: hidden;
`
const SectionFlex = styled.section`
  display:flex;
  height:200px;
`

export default App;
