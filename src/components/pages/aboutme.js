import React from 'react'
import styled from 'styled-components'
import PageShell from '../../components/templates/page-shell'
import { H1, H2, H3, P, Small } from '../../components/atoms/typography'
import { green, blue, black, violet } from '../../utils/colors'
import { TextLink } from '../../components/atoms/buttons'
import { Image } from '../../components/atoms/images'
import { media } from '../../utils/breakpoints'

export const AboutMe = () => (
  <PageShell withMainNavigation={true} title="Über mich">
    <HeaderTitle>
      <TitleDiv><H1Front>Thomas Moser</H1Front></TitleDiv>
      <TitleDiv><H2Front>Frontend Web Developer</H2Front></TitleDiv>
    </HeaderTitle>
    <Content>
      <Row>
        <ColumnLabel>
          <Small><H3Label>Erfahrung</H3Label></Small>
        </ColumnLabel>
        <ColumnDescription>
          <PFront>7 Jahre Web Developer, 7 Jahre Product Owner und Projektleiter und nun wieder Web Developer mit Fokus auf Frontend.</PFront>
          <PFront><TextLinkGradient to="/cv">Mein CV &rarr;</TextLinkGradient></PFront>
        </ColumnDescription>
      </Row>
      <Row>
        <ColumnLabel>
          <Small><H3Label>&#10084;-Technologie</H3Label></Small>
        </ColumnLabel>
        <ColumnDescription>
          <PFront>React, ES6 und alles was dazugehört*.</PFront>
          <PFront><small>*Diesen CV habe ich mit React, Styled Components, Storybook, Apollo, GraphQL und GraphCMS erstellt.</small></PFront>
          <PFront><TextLinkGradient to="/cv">Code auf Github &rarr;</TextLinkGradient><TextLinkGradient to="/cv">Design in Storybook &rarr;</TextLinkGradient></PFront>
        </ColumnDescription>
      </Row>
      <CenteredRow>
        <H2>Awards</H2>
        <RowLogos>
          <Logo>
            <Image handle="jsnZ6OFJSiKMI8XKIomE" height="100" />
          </Logo>
          <Logo>
            <Image handle="ONnC5Gt6Tam0DOJDD4wJ" height="100" />
          </Logo>
          <Logo>
            <Image handle="IZu0yTbaT3GrHZOSBKtj" height="100" />
          </Logo>
          <Logo>
            <Image handle="PM9hcfSCqtvJMARYHcQ8" height="100" />
          </Logo>
          <Logo>
            <Image handle="q35H0JAHShOSNvIEwkVg" height="100" />
          </Logo>
          <Logo>
            <Image handle="WTEDLoc2RleNnxlxG23R" height="100" />
          </Logo>
          <Logo>
            <Image handle="w7ammVlTMWvbP7AvC5jX" height="100" />
          </Logo>
          <Logo>
            <Image handle="YRMPWRWkQYuSgcPBFfT6" height="100" />
          </Logo>
          <Logo>
            <Image handle="5kb26FtFTluYw1mGEkI4" height="100" />
          </Logo>
        </RowLogos>
      </CenteredRow>
      <CenteredRow>
        <H2>Arbeit- und Auftraggeber</H2>
        <PFront>
          <small>
            Schweizer Radio und Fernsehen, Luzerner Kantonsspital, Unic, Pädagogische Hochschule Zentralscheiz, Universität Zürich, UBS, Credit Suisse, Winterthur Versicherungen, Walo Bertschinger, Quickline, Akris, Doodah
          </small>
        </PFront>
      </CenteredRow>
      <CenteredRow>
        <H2>Beim Arbeiten</H2>
        <RowImages>
          <TwoImages>
            <img src="/assets/images/thomas_moser_3-1000w.jpg" />
          </TwoImages>
          <TwoImages>
            <img src="/assets/images/thomas_moser_4-1000w.jpg" />
          </TwoImages>
        </RowImages>
      </CenteredRow>
      <CenteredRow>
        <H2>In der Freizeit</H2>
        <RowImages>
          <ThreeImages>
            <img src="https://media.graphcms.com/HCgGXNqFTxOFVQa3hX4R" />
          </ThreeImages>
          <ThreeImages>
            <img src="https://media.graphcms.com/rg7ELbbGTH6AAb72hK7Z" />
          </ThreeImages>
          <ThreeImages>
            <img src="https://media.graphcms.com/J1vMC6coS8KwmsgT1e4m" />
          </ThreeImages>
        </RowImages>
      </CenteredRow>
    </Content>
  </PageShell>
)

const CenteredRow = styled.div`
  display: block;
  text-align: center;
  padding-top:3em;
  padding-bottom:2em;
  max-width: 1000px;
  margin: 0 auto;
`
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
  background-image: -webkit-linear-gradient(165deg, ${green} 20%,${black} 110%); /* For Chrome and Safari */
  background-image:         linear-gradient(165deg, ${green} 20%,${black} 110%); /* Standard syntax; must be last */
  -webkit-background-clip: text;
  background-clip: text;
`
const H1Front = H1.extend`
  display: inline;
`
const H2Front = H2.extend`;
  display: inline;
`
const TitleDiv = styled.div`
  padding-bottom: 10px;
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
const Content = styled.div`
  color:${black}
`
const PFront = P.extend`

`
const H3Label = H3.extend`
  text-transform: uppercase;
  padding-top:2px;
`

const ColumnLabel = styled.div`
  flex:1;
`
const ColumnDescription = styled.div`
  flex:3;
`
