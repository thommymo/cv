import React from 'react'
import styled from 'styled-components'
import PageShell from '../../components/templates/page-shell'
import { H1, H2, H3, P } from '../../components/atoms/typography'
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
          <PLabel>Erfahrung</PLabel>
        </ColumnLabel>
        <ColumnDescription>
          <PFront>7 Jahre Web Developer, 7 Jahre Product Owner und Projektleiter und nun wieder Web Developer mit Fokus auf Frontend </PFront>
          <PFront><TextLinkGradient to="/cv">Mein CV &rarr;</TextLinkGradient></PFront>
        </ColumnDescription>
      </Row>
      <Row>
        <ColumnLabel>
          <PLabel>Technologie</PLabel>
        </ColumnLabel>
        <ColumnDescription>
          <PFront>React, ES6 und alles was dazugehört. Diesen CV habe ich mit reactjs* und GraphCMS als CMS erstellt.</PFront>
          <PFront><small>(*reactjs, styled components, storybook, apollo, graphql)</small></PFront>
          <PFront><TextLinkGradient to="/cv">Github &rarr;</TextLinkGradient></PFront>
        </ColumnDescription>
      </Row>
      <Row>
        <ColumnLabel>
          <PLabel>Awards</PLabel>
        </ColumnLabel>
        <ColumnDescription>
          <RowImages>
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
          </RowImages>
        </ColumnDescription>
      </Row>
      <Row>
        <ColumnLabel>
          <PLabel>Arbeit- und Auftraggeber</PLabel>
        </ColumnLabel>
        <ColumnDescription>
          <PFront>
            <small>
              Schweizer Radio und Fernsehen, Luzerner Kantonsspital, Unic, Akris, UBS, Credit Suisse, Winterthur Versicherungen, Quickline, Doodah, Walo Bertschinger
            </small>
          </PFront>
        </ColumnDescription>
      </Row>
      <Row>
        <ColumnLabel>
          <PLabel>Beim Arbeiten</PLabel>
        </ColumnLabel>
        <ColumnDescription>
          <img src="/assets/images/thomas_moser_3-1000w.jpg" width="400"/>
        </ColumnDescription>
      </Row>
      <Row>
        <ColumnLabel>
          <PLabel>In der Freizeit</PLabel>
        </ColumnLabel>
        <ColumnDescription>
          <RowImages>
            <SmallImage>
              <img src="https://media.graphcms.com/HCgGXNqFTxOFVQa3hX4R" />
            </SmallImage>
            <SmallImage>
              <img src="https://media.graphcms.com/rg7ELbbGTH6AAb72hK7Z" />
            </SmallImage>
            <SmallImage>
              <img src="https://media.graphcms.com/J1vMC6coS8KwmsgT1e4m" />
              </SmallImage>
            </RowImages>
          </ColumnDescription>
      </Row>
    </Content>
  </PageShell>
)
const H1Front = H1.extend`
  display: inline;
`
const H2Front = H2.extend`
  margin-top: 10px;
  line-height: 5em;
  display: inline;
`
const TitleDiv = styled.div`
  padding-bottom:10px;
`
const RowImages = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Logo = styled.div`
  padding-right:10px;
  padding-bottom:5px;
  filter: grayscale(100%) opacity(90%);
`
const SmallImage = styled.div`
  padding-right:10px;
  padding-bottom:5px;
  width: calc(100% / 3 - 20px);
  & > img {
    width: 100%;
  }
`
const HeaderTitle = styled.div`
  color:transparent;
  text-align: center;
  margin-top: 7em;
  margin-bottom: 9em;
  background-image: -webkit-linear-gradient(165deg, ${green} 20%,${black} 110%); /* For Chrome and Safari */
  background-image:         linear-gradient(165deg, ${green} 20%,${black} 110%); /* Standard syntax; must be last */
  -webkit-background-clip: text;
  background-clip: text;
`
const TextLinkGradient =  TextLink.extend`
  background-image: -webkit-linear-gradient(165deg, ${blue} 20%,${violet} 70%); /* For Chrome and Safari */
  background-image:         linear-gradient(165deg, ${blue} 20%,${violet} 70%); /* Standard syntax; must be last */
  color:transparent;
  -webkit-background-clip: text;
  background-clip: text;
  font-weight: 400;
  font-size: 0.9;
`

const Content = styled.div`
  color:${black}
`
const PFront = styled.p`
  ${media.desktop`font-size: 1.5em;`}
  ${media.tablet`font-size: 1.25em;`}
  ${media.phone`font-size: 1.25em;`}
  margin-top:0;
`
const PLabel = PFront.extend`
  text-transform: uppercase;
  ${media.desktop`font-size: 0.9em;`}
  ${media.tablet`font-size: 0.9em;`}
  ${media.phone`font-size: 0.9em;`}
  font-weight: 400;
  margin-top: 10px;
`
const Row = styled.div`
  ${media.desktop`display:flex;`}
  ${media.tablet`display:flex;`}

  margin-bottom:2em;
`
const ColumnLabel = styled.div`
  flex:1;
`
const ColumnDescription = styled.div`
  flex:5;
`
