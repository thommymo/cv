import React from 'react';
import { H1, P, H4, H2, H3, H4Capitals, PCapitals } from '../../components/atoms/typography'
import { Section, SectionCentered } from '../../components/atoms/containers'
import { FullWithImage } from '../../components/atoms/images'
import { Loading } from '../../components/atoms/loading'
import styled from 'styled-components'
import PageNotFound from '../pages/page-not-found'
import { white, black } from '../../utils/colors'
import PageShell from '../../components/templates/page-shell'
import { media } from '../../utils/breakpoints'
import { CSSTransition } from 'react-transition-group'
import { timeoutTransition } from '../../utils/constants'

/*
  Template
*/

// PreviewCVEntry shows loding bar, when data is only partially available

export const PreviewCVEntry = ({
  company,
  school,
  startDate,
  endDate,
  title,
  background,
}) => {
  const color = JSON.parse(background)
  const colorRGBA = `rgba(${color.r},${color.g},${color.b},${color.a})`
  return(
    // TODO: Prevent Apollo to do 2 API calls, when data is available
    // client.select(gql`{ ... }`, '5'); This way I should be able to get data
    // from the store without loading it, that way I can prevent to make 2
    // API calls, when no data is available.
    // Read: https://github.com/apollographql/apollo-client/issues/1036
    <PageShell color={colorRGBA} title={title} backlink="/cv">
      <CVEntryHeader
        company={company}
        school={school}
        startDate={startDate}
        endDate={endDate}
        title={title}
        color={colorRGBA}
      />
      <SectionCentered>
        <Loading />
      </SectionCentered>
    </PageShell>
  )
}

/*
  Template
*/

export const CVEntry = ({
  company,
  school,
  startDate,
  endDate,
  title,
  background,
  responsabilities,
  responsabilitiesdescription,
  projects,
  projectdescription,
  descriptionimages,
  awardstitle,
  awardlogo1,
  awarddescription1,
  awardlogo2,
  awarddescription2,
  awardlogo3,
  awarddescription3,
  workreview,
  workreviewimages,
}) => {
  const color = JSON.parse(background)
  const colorRGBA = `rgba(${color.r},${color.g},${color.b},${color.a})`
  return(

      <PageShell color={colorRGBA} title={title} backlink="/cv">

        <CVEntryHeader
          company={company}
          school={school}
          startDate={startDate}
          endDate={endDate}
          title={title}
          color={colorRGBA}
        />

        <CSSTransition
          in
          appear={true}
          timeout={timeoutTransition}
          classNames="FadeIn"
          unmountOnExit={true}
        >
          <div>
            <Section>
              { responsabilities &&
                <Jobdesciption
                  projectstitle={projects}
                  projectdescription={{__html: projectdescription}}
                  responsabilities={responsabilities}
                  responsabilitiesdescription={{__html: responsabilitiesdescription}}
                />
              }
            </Section>
            <SectionCentered>
              { descriptionimages &&
                descriptionimages.map((image) => (
                  <FullWithImage color={colorRGBA} handle={image.handle} key={image.handle}/>
                )) }
            </SectionCentered>

            <SectionCentered>
              { awardstitle &&
                <Awards
                  awardstitle={awardstitle}
                  awards={[
                    {logo: awardlogo1, description: awarddescription1},
                    {logo: awardlogo2, description: awarddescription2},
                    {logo: awardlogo3, description: awarddescription3}
                  ]}
                />
              }
            </SectionCentered>
            <SectionCentered>
              { workreview &&
                <WorkReview workreview={workreview} workreviewimages={workreviewimages} colorRGBA={colorRGBA}/>
              }
            </SectionCentered>
          </div>
        </CSSTransition>
      </PageShell>
  )
}

/*
  Molecule
*/

const CVEntryHeader = ({
  company,
  school,
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
        <HeaderWithDate><H4Capitals>{formattedStartDate} – {formattedEndDate}</H4Capitals></HeaderWithDate>
        <H4Capitals>{company}{school}</H4Capitals>
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
  border-top-color: ${white};
  border-left-width: 40px;
  border-left-color: ${props => props.color};
  border-right-width: 40px;
  border-right-color: ${props => props.color};
  padding-bottom: 5em;
  position: relative;
`
const HeaderWithDate = styled.div`
  margin-top: -52px;
  color: ${black};
`





/*
  Molecules
*/

const Jobdesciption = ({
  projectstitle,
  projectdescription,
  responsabilities,
  responsabilitiesdescription,
}) => (
  <StyledJobdescription>
    <Projects>
      <H4>{projectstitle}</H4>
      <span dangerouslySetInnerHTML={projectdescription} />
    </Projects>
    <Tasks>
      <H3>{responsabilities}</H3>
      <P dangerouslySetInnerHTML={responsabilitiesdescription} />
    </Tasks>
  </StyledJobdescription>
)

const StyledJobdescription = styled.div`
  ${media.desktop`display: flex; `}
`
const Projects = styled.div`
  flex: 1;
  opacity: 0.95;
  font-size: 0.9em;
  margin-top: 1.3em;
  padding: 0 2em 0 2.5em;
  & > h4 {
    text-transform: uppercase;
  }
  & > span > h3 {
    text-transform: uppercase;
  }
`
const Tasks = styled.div`
  flex: 3;
  padding: 0 2em 0 2em;
  & p {
    font-size: 1.15em;
    line-height: 1.3em;
  }
`



const Awards = ({
  awardstitle,
  awards,
}) => (
  <StyledAwards>
    <H2>{awardstitle}</H2>
    <Row>
      { awards.map((award) => {
        if(award.logo && award.description) {
          return(
            <Award key={award.logo.url} logo={award.logo} description={award.description} />
          )
        }
      })}
    </Row>
  </StyledAwards>
)

const Row = styled.div`
  ${media.desktop`display: flex; `}
`

const StyledAwards = styled.section`
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
    <img src={logo.url} height="100" alt="Award Logo"/>
    <PCapitals>{description}</PCapitals>
  </StyledAward>
)

const StyledAward = styled.div`
  flex: 1;
  padding: 0 1.5em 0 1.5em;
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
`


const WorkReview = ({
  workreview,
  workreviewimages,
  colorRGBA,
}) => (
  <StyledWorkReview>
    <H2>{workreview}</H2>
    { workreviewimages &&
      workreviewimages.map((image) => (
        <FullWithImagePadding>
          <FullWithImage color={colorRGBA} handle={image.handle} key={image.handle}/>
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
