import React from 'react';
import { H1, P, H4, H2, H3, H4Capitals, PCapitals, Small } from '../../components/atoms/typography'
import { SectionCentered } from '../../components/atoms/containers'
import { FullWithImage, Image } from '../../components/atoms/images'
import styled from 'styled-components'
import { media } from '../../utils/breakpoints'


/*
  Molecule
*/

export const CVEntryHeader = ({
  organization,
  startDate,
  endDate,
  title,
  color,
}) => {
  const startDateDate = new Date(startDate)
  const endDateDate = new Date(endDate)
  const options = { year: 'numeric', month: 'long'}
  const formattedStartDate = startDate ? startDateDate.toLocaleDateString('de-DE', options) : ""
  const formattedEndDate = endDate ? endDateDate.toLocaleDateString('de-DE', options) : ""
  return(
    <HeaderWithBorder color={color}>
      <DateAndCompany>
        <HeaderWithDate>
          <H4Capitals>{formattedStartDate} – {formattedEndDate}</H4Capitals>
        </HeaderWithDate>
        <H4Capitals>{organization}</H4Capitals>
      </DateAndCompany>
      <H1>{title}</H1>
    </HeaderWithBorder>
  )
}

/*
Containers (as part of a molecule)
*/

const DateAndCompany = styled.div`
  padding-bottom:2em;
`
const HeaderWithBorder = styled.div`
  border: solid 0px;
  text-align: center;
  border-top-width: 40px;
  border-top-color: transparent;
  border-left-width: 40px;
  border-left-color: ${props=>props.theme.primary};
  border-right-width: 40px;
  border-right-color: ${props=>props.theme.primary};
  padding-bottom: 6em;
  position: relative;
`
const HeaderWithDate = styled.div`
  margin-top: -52px;
  color: ${props => props.theme.white};
`

/*
  Molecules
*/

export const JobDescription = ({
  projectstitle,
  projectdescription,
  responsabilities,
  responsabilitiesdescription,
}) => (
  <StyledJobdescription>
    <Tasks>
      <H3>{responsabilities}</H3>
      <span dangerouslySetInnerHTML={responsabilitiesdescription} />
    </Tasks>
    <Projects>
      <Small>
        <H3>{projectstitle}</H3>
        <span dangerouslySetInnerHTML={projectdescription} />
      </Small>
    </Projects>
  </StyledJobdescription>
)

const StyledJobdescription = styled.div`
  ${media.desktop`display: flex; `}
  ${media.tablet`display: flex; `}
`
const Projects = styled.div`
  flex: 1;
  font-size: 1.2em;
  margin-top: 0.5em;
  ${media.desktop`padding: 0 2em 0 2.5em; `}
  ${media.tablet`padding: 0 2em 0 2.5em; `}
  & h3 {
    text-transform: uppercase;
  }
`
const Tasks = styled.div`
  flex: 3;
  ${media.desktop`padding: 0 2em 0 2.5em; `}
  ${media.tablet`padding: 0 2em 0 2.5em; `}
  ${media.desktop`order: 1; `}
  ${media.tablet`order: 1; `}
`
export const Awards = ({
  awardstitle,
  awards,
}) => (
  <StyledAwards>
    <H2>{awardstitle}</H2>
    <Row>
      {
        awards.map((award) => {
          if(award.logo && award.description) {
            return(
              <Award key={award.logo.handle} logo={award.logo} description={award.description} />
            )
          } else {
            return("")
          }
        })
      }

    </Row>
  </StyledAwards>
)

const Row = styled.div`
  ${media.desktop`display: flex; `}
`
const StyledAwards = styled.div`
  display: block;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

//TODO: Image handling should be done via its own component (Loading and resizing etc.)

const Award = ({
  logo,
  description
}) => (
  <StyledAward key={logo}>
    <Image handle={logo.handle} height="120" alt="Award Logo"/>
    <Small><PCapitals>{description}</PCapitals></Small>
  </StyledAward>
)

const StyledAward = styled.div`
  flex: 1;
  display: block;
  padding: 1em 1.5em 1em 1.5em;
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
`

export const WorkReview = ({
  workreview,
  workreviewimages,
  colorRGBA,
}) => (
  <StyledWorkReview>
    <H2>{workreview}</H2>
    { workreviewimages &&
      workreviewimages.map((image) => (
        <FullWithImagePadding key={image.handle}>
          <FullWithImage color={colorRGBA} handle={image.handle}/>
        </FullWithImagePadding>
      )) }
  </StyledWorkReview>
)

const FullWithImagePadding = styled.div`
  padding-bottom: 5em;
  &:last-child {
    padding-bottom: 0em;
  }
`
const StyledWorkReview = SectionCentered.extend`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`

/*
  Molecule
*/

export const CVEntryFooter = () => (
    <FooterWithBorder />
)

/*
Containers (as part of a molecule)
*/


const FooterWithBorder = styled.div`
  border: solid 0px;
  border-bottom-width: 40px;
  border-bottom-color: transparent;
  border-left-width: 40px;
  border-left-color: ${props=>props.theme.primary};
  border-right-width: 40px;
  border-right-color: ${props=>props.theme.primary};
  position: relative;
  z-index: 1000;
  ${media.desktop`box-shadow: 700px 0px ${props=>props.theme.primary}, -700px 0px ${props=>props.theme.primary}; `}
  ${media.tablet`box-shadow: 300px 0px ${props=>props.theme.primary}, -300px 0px ${props=>props.theme.primary}; `}
  ${media.phone`box-shadow: 100px 0px ${props=>props.theme.primary}, -100px 0px ${props=>props.theme.primary}; `}
`
