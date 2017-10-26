import React, { Component } from 'react';
import CurriculumVitae from './components/curriculum-vitae'
import { Helmet } from 'react-helmet';
import styled from 'styled-components'
import { white, primary, primaryDark } from './utils/colors'
import { StyledH1, StyledP, StyledH4, StyledH2 } from './components/styled-atoms'
import Timeline from './components/timeline'

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
      <StyledDiv>
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
        <SectionFlex>
          <TurnedDiv1>
            <StyledH2>Arbeit</StyledH2>
            <img
              src="data:image/svg+xml;charset=utf-8,%3Csvg%20fill%3D%22%23FFFFFF%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0A%20%20%20%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%0D%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0D%0A%3C%2Fsvg%3E"
            />
          </TurnedDiv1>
          <TurnedDiv2 right>
            <StyledH2>Ausbildung</StyledH2>
            <img
              src="data:image/svg+xml;charset=utf-8,%3Csvg%20fill%3D%22%23FFFFFF%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0A%20%20%20%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%0D%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0D%0A%3C%2Fsvg%3E"
            />
          </TurnedDiv2>
        </SectionFlex>
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
            responsibility="Responsible for Relaunching luks.ch"
            more="Link to more info"
          />
          <Timeline
            left
            bothleft
            startDate="2011"
            endDate="2015"
            title="Product Owner"
            company="Schweizer Radio und Fernsehen"
            responsibility="Responsible as Product Owner for srf.ch"
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
            responsibility="Responsible for customor web projects"
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
            responsibility="Responsible for customor web projects"
            more="Link to more info"
          />
          <Timeline
            left
            bothright
            startDate="2006"
            endDate="2008"
            title="Web Developer und Mitinhaber"
            company="Agentur Sign, Luzern"
            responsibility="Responsible for customor web projects"
            more="Link to more info"
          />
          <Timeline
            left
            bothright
            startDate="2002"
            endDate="2006"
            title="Web Developer, selbständig erwerbend"
            company="Netzwerk Neuweg, Luzern"
            responsibility="Responsible for customor web projects"
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
            responsibility="Responsible for customor web projects"
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
          {
            //TODO: What I did so far
            //This will be more complex and will contain a timeline, all certificates, and employer references including sample projects and prices won
          }
        </SectionNoOverflow>
        <Footer>
          <StyledP>Thomas Moser, Bireggstrasse 33, 6003 Luzern</StyledP>
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
  width:100%;
  display: flex;
  /*padding:1em;*/
`

const Header = styled.header`
  color: ${white};
  background-color: ${primary};
  /*padding:1em;*/
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
const TurnedDiv1 = styled.div`
  ${props => props.right ? `background-color:${primaryDark};` : `background-color:${primary};`};
  color:${white};
  width:40%;
  height:500px;
  text-align: left;
  padding-left:63px;
  vertical-align: middle;
  border-top-right-radius: 100px;
  z-index:2;

`
const TurnedDiv2 = styled.div`
  ${props => props.right ? `background-color:${primaryDark};` : `background-color:${primary};`};
  color:${white};
  width:60%;
  height:800px;
  padding-right:61px;
  text-align: right;
  vertical-align: middle;
  z-index:-1;
  border-top-left-radius: 100px;
  position:relative;
  top:73px;
`
const SectionFlex = styled.section`
  display:flex;
  height:200px;
`

export default App;
