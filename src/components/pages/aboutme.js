import React from 'react'
import styled from 'styled-components'
import PageShell from '../../components/templates/page-shell'
import { H1, H2, H3, P, Small } from '../../components/atoms/typography'
import { TextLink } from '../../components/atoms/buttons'
import { Image } from '../../components/atoms/images'
import { media } from '../../utils/breakpoints'
import { Section, SectionCentered } from '../../components/atoms/containers'
import { ImagesGrid } from '../../components/molecules/images-grid'
import { LogoCloud } from '../../components/molecules/logo-cloud'

export const AboutMe = () => (
  <PageShell withMainNavigation={true} title="Über mich">
    <HeaderTitle>
      <H1Front>Thomas Moser</H1Front>
      <H2Front>Frontend Web Developer</H2Front>
    </HeaderTitle>

    <Section>
      <Row>
        <ColumnLabel>
          <Small><H3Label>Erfahrung</H3Label></Small>
        </ColumnLabel>
        <ColumnDescription>
          <P>7 Jahre Web Developer, 7 Jahre Product Owner und Projektleiter und nun wieder Web Developer mit Fokus auf Frontend.</P>
          <P><TextLinkGradient to="/cv">Mein CV &rarr;</TextLinkGradient></P>
        </ColumnDescription>
      </Row>
      <Row>
        <ColumnLabel>
          <Small><H3Label>&#10084;-Technologie</H3Label></Small>
        </ColumnLabel>
        <ColumnDescription>
          <P>React, ES6 und alles was dazugehört*.</P>
          <P><small>*Diesen CV habe ich mit React, Styled Components, Storybook, Apollo, GraphQL und GraphCMS erstellt.</small></P>
          <P><TextLinkGradient to="/cv">Code auf Github &rarr;</TextLinkGradient><TextLinkGradient to="/cv">Design in Storybook &rarr;</TextLinkGradient></P>
        </ColumnDescription>
      </Row>
    </Section>
    <SectionCentered>
      <LogoCloud
        title="Awards"
        images={[
          { handle:"jsnZ6OFJSiKMI8XKIomE"},
          { handle:"ONnC5Gt6Tam0DOJDD4wJ"},
          { handle:"IZu0yTbaT3GrHZOSBKtj"},
          { handle:"PM9hcfSCqtvJMARYHcQ8"},
          { handle:"q35H0JAHShOSNvIEwkVg"},
          { handle:"WTEDLoc2RleNnxlxG23R"},
          { handle:"w7ammVlTMWvbP7AvC5jX"},
          { handle:"YRMPWRWkQYuSgcPBFfT6"},
          { handle:"5kb26FtFTluYw1mGEkI4"}
        ]}
        height="110"
      />
    </SectionCentered>
    <SectionCentered>
      <H2>Arbeit- und Auftraggeber</H2>
      <P>
        <small>
          Schweizer Radio und Fernsehen, Luzerner Kantonsspital, Unic, Pädagogische Hochschule Zentralscheiz, Universität Zürich, UBS, Credit Suisse, Winterthur Versicherungen, Walo Bertschinger, Quickline, Akris, Doodah
        </small>
      </P>
    </SectionCentered>
    <SectionCentered>
      <ImagesGrid
        columns={2}
        title="Bei der Arbeit"
        images={[
          {handle: "HCgGXNqFTxOFVQa3hX4R"},
          {handle: "rg7ELbbGTH6AAb72hK7Z"}
        ]}/>
    </SectionCentered>
    <SectionCentered>
      <ImagesGrid
        columns={3}
        title="In der Freizeit"
        images={[
          {handle: "HCgGXNqFTxOFVQa3hX4R"},
          {handle: "rg7ELbbGTH6AAb72hK7Z"},
          {handle: "J1vMC6coS8KwmsgT1e4m"}
        ]}/>
    </SectionCentered>
  </PageShell>
)

const Row = styled.div`
  ${media.desktop`display:flex;`}
  margin-bottom:2em;
  max-width: 800px;
  margin: 1em auto;
`

const HeaderTitle = styled.div`
  color:transparent;
  text-align: center;
  margin-top: 10em;
  margin-bottom: 9em;
  background-image: -webkit-linear-gradient(165deg, ${props => props.theme.colors.green} 20%,${props => props.theme.colors.black} 110%); /* For Chrome and Safari */
  background-image:         linear-gradient(165deg, ${props => props.theme.colors.green} 20%,${props => props.theme.colors.black} 110%); /* Standard syntax; must be last */
  -webkit-background-clip: text;
  background-clip: text;
`
const H1Front = H1.extend`
  display: inline;
`
const H2Front = H2.extend`;
  display: block;
  margin-top: 0.4em;
`
const RowImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const RowLogos = RowImages.extend`
  max-width: 600px;
  margin: 0 auto;
`
const Logo = styled.div`
  padding: 5px 10px 0 0;
`

const ThreeImages = styled.div`
  padding-bottom:5px;
  ${media.desktop`width: calc(100% / 3 - 10px); padding-right: 10px;`}
  ${media.tablet`width: calc(100% / 3 - 10px); padding-right: 10px;`}
  & > img {
    width: 100%;
  }
`
const TwoImages = styled.div`
  padding-bottom:5px;
  ${media.desktop`width: calc(100% / 2 - 10px); padding-right: 10px;`}
  ${media.tablet`width: calc(100% / 2 - 10px); padding-right: 10px;`}
  & > img {
    width: 100%;
  }
`
const TextLinkGradient =  TextLink.extend`
  font-weight: 400;
  font-size: 0.9em;
  padding-right: 20px;
`

const H3Label = H3.extend`
  text-transform: uppercase;
  ${media.desktop`padding-top:8px; text-align: right; padding-right: 40px;`}
`

const ColumnLabel = styled.div`
  flex:1;
`
const ColumnDescription = styled.div`
  flex:3;
`
