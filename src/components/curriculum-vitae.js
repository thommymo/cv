import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import FullWithImage from '../components/full-with-image'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { white, primary, secondaryDark } from '../utils/colors'
import { StyledH1, StyledP } from '../components/styled-atoms'
import { TimelineContentWithData } from '../components/content/timeline-content'


export const CurriculumVitae = () => (
  <SectionNoOverflow>
    <Helmet>
      <title>Bewerbung Thomas Moser</title>
    </Helmet>
    
    <Section>
      {
        //TODO: Why am I suited for this Job (Mainly Text, maybe with some interaction)
      }
    </Section>
    <TimelineContentWithData />
    <Footer>
      <StyledP>Thomas Moser, Bireggstrasse 33, 6003 Luzern</StyledP>
      <div className="TopBar">
        <Link to="/">Home</Link>
        <Link to="/404">Subpage</Link>
        <Link to="/chapter">Chapter</Link>
      </div>
    </Footer>
  </SectionNoOverflow>
)

const SectionNoOverflow = styled.div`
  width: 100%;
`
const Footer = styled.footer`
  color: ${white};
  background-color: ${secondaryDark};
  width:100%;
  display: flex;
`
const Header = styled.header`
  max-width:1024px;
  margin-left:auto;
  margin-right:auto;
  color: ${white};
  background-color: ${primary};
  width:100%;
  display: flex;
`
const Section = styled.section`
  max-width:1024px;
  min-height:100px;
  margin-left:auto;
  margin-right:auto;
`
