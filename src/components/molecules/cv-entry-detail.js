import React from 'react';
import { H1, P, H4, H2, H3, H4Capitals, PCapitals } from '../../components/atoms/typography'
import { SectionCentered } from '../../components/atoms/containers'
import { FullWithImage, Image } from '../../components/atoms/images'
import styled from 'styled-components'
import { white, black, blue, primary } from '../../utils/colors'
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
  padding-bottom:3em;
`
const HeaderWithBorder = styled.div`
  border: solid 0px;
  text-align: center;
  border-top-width: 40px;
  border-top-color: transparent;
  border-left-width: 40px;
  border-left-color: ${primary};
  border-right-width: 40px;
  border-right-color: ${primary};
  padding-bottom: 5em;
  position: relative;
`
const HeaderWithDate = styled.div`
  margin-top: -52px;
  color: ${white};
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
      <P dangerouslySetInnerHTML={responsabilitiesdescription} />
    </Tasks>
    <Projects>
      <H3>{projectstitle}</H3>
      <span dangerouslySetInnerHTML={projectdescription} />
    </Projects>
  </StyledJobdescription>
)

const StyledJobdescription = styled.div`
  ${media.desktop`display: flex; `}
  ${media.tablet`display: flex; `}
`
const Projects = styled.div`
  flex: 1;
  font-size: 1em;
  margin-top: 1.3em;
  ${media.desktop`padding: 0 2em 0 2.5em; `}
  ${media.tablet`padding: 0 2em 0 2.5em; `}
  & > h3 {
    font-size: 1.1em;
    text-transform: uppercase;
  }
  & > span > h3 {
    font-size: 1.1em;
    font-weight: 400;
    text-transform: uppercase;
  }
`
const Tasks = styled.div`
  flex: 3;
  ${media.desktop`padding: 0 2em 0 2.5em; `}
  ${media.tablet`padding: 0 2em 0 2.5em; `}
  & p {
    ${media.desktop`font-size: 1.15em; line-height: 1.3em; `}
    ${media.tablet`font-size: 1.15em; line-height: 1.2em; `}
    ${media.phone`font-size: 1.1em; line-height: 1.15em; `}
  }
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
    <PCapitals>{description}</PCapitals>
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
