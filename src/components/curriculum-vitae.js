import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import FullWithImage from '../components/full-with-image'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { white, primary } from '../utils/colors'
import { StyledH1, StyledP } from '../components/styled-atoms'
import { TimelineContentWithData } from '../components/content/timeline-content'


export const CurriculumVitae = () => (
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
      <FullWithImage assetType=".jpg" assetName="thomas_moser_3" altText="This is Thomas"/>
    </Section>

    <Section>
      {
        //TODO: Why am I suited for this Job (Mainly Text, maybe with some interaction)
      }
    </Section>
    <TimelineContentWithData />
    <Footer>
      <StyledP>Thomas Moser, Bireggstrasse 33, 6003 Luzern</StyledP>
      {
        //TODO: Add Footer with adress and contact details
      }
    </Footer>
  </div>
)

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
