import React from 'react';
import { H1, P, H4, H2, H3 } from '../atoms/typography'
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

// PreviewCVEntry shows loding bar, when no data is available or when data is only partially available

export const PreviewCVEntry = ({company, school, startDate, endDate, title, background}) => {
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
      <BasicInfo>
        <Loading />
      </BasicInfo>
    </PageShell>
  )
}

/*
  Molecules
*/

const CVEntryHeader = ({company, school, startDate, endDate, title, color}) => {
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
  Atoms
*/

const H4Capitals = H4.extend`
  text-transform: uppercase;
`

/*
  Template
*/

export const CVEntry = (props) => {
  const entry = props.moreinfocventry
  const color = JSON.parse(entry.background)
  const colorRGBA = `rgba(${color.r},${color.g},${color.b},${color.a})`
  return(

      <PageShell color={colorRGBA} title={props.title} backlink="/cv">

        <CVEntryHeader
          company={props.company}
          school={props.school}
          startDate={props.startDate}
          endDate={props.endDate}
          title={props.title}
          color={colorRGBA}
        />

        <CSSTransition
          in
          appear={true}
          timeout={timeoutTransition}
          classNames="FadeIn"
          unmountOnExit={true}
        >
          <MainDiv>
            <BasicInfo>
              { entry.responsabilities &&
                <Jobdesciption
                  projectstitle={entry.projects}
                  projectdescription={{__html: entry.projectdescription}}
                  responsabilities={entry.responsabilities}
                  responsabilitiesdescription={{__html: entry.responsabilitiesdescription}}
                />
              }
            </BasicInfo>
            <BasicInfo>
              { entry.descriptionimages &&
                entry.descriptionimages.map((image) => (
                  <FullWithImage color={colorRGBA} handle={image.handle} key={image.handle}/>
                )) }
            </BasicInfo>

            <BasicInfo>
              { entry.awardstitle &&
                <Awards
                  awardstitle={entry.awardstitle}
                  awards={[
                    {logo: entry.awardlogo1, description: entry.awarddescription1},
                    {logo: entry.awardlogo2, description: entry.awarddescription2},
                    {logo: entry.awardlogo3, description: entry.awarddescription3}
                  ]}
                />
              }
              { entry.workreview &&
                <WorkReview workreview={entry.workreview} workreviewimages={entry.workreviewimages} colorRGBA={colorRGBA}/>
              }
            </BasicInfo>
          </MainDiv>
        </CSSTransition>
      </PageShell>
  )
}

/*
  Atoms
*/


/*
  Molecules
*/

const Jobdesciption = ({projectstitle,projectdescription,responsabilities,responsabilitiesdescription}) => (
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

const Awards = ({awardstitle, awards}) => (
  <StyledAwards>
    <CenteredContent>
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
    </CenteredContent>
  </StyledAwards>
)

//TODO: Image handling should be done via its own component (Loading and resizing etc.)

const Award = ({logo, description}) => (
  <Column key={logo}>
    <img src={logo.url} height="100" alt="Award Logo"/>
    <PAward>{description}</PAward>
  </Column>
)

const WorkReview = ({workreview, workreviewimages, colorRGBA}) => (
  <StyledWorkReview>
    <H2>{workreview}</H2>
    { workreviewimages &&
      workreviewimages.map((image) => (
        <BasicInfo key={image.handle}>
          <FullWithImage color={colorRGBA} handle={image.handle} />
        </BasicInfo>
      )) }
  </StyledWorkReview>
)

//TODO: Review if these elements (are all elements really needed)

/*
  Typography
*/


const PAward = P.extend`
  text-transform: uppercase;
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
`

/*
  Containers
*/


const BasicInfo = styled.section`
  text-align: center;
  padding-bottom: 5em;
`
const StyledAwards = styled.section`
  text-align: center;
  padding-bottom: 5em;
`

const StyledWorkReview = styled.section`
  text-align: center;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`
const Row = styled.div`
  ${media.desktop`display: flex; `}
`
const StyledJobdescription = styled.div`
  ${media.desktop`display: flex; `}
`
const Tasks = styled.div`
  flex: 3;
  padding: 0 2em 0 2em;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  & p {
    font-size: 1.15em;
    line-height: 1.3em;
  }
`
const Projects = styled.div`
  flex: 1;
  opacity: 0.95;
  font-size: 0.9em;
  margin-top: 1.3em;
  text-align: left;
  padding: 0 2em 0 2em;
  margin-left: auto;
  margin-right: auto;
  & > h4 {
    text-transform: uppercase;
  }
  & > span > h3 {
    text-transform: uppercase;
  }
`
const Column = styled.div`
  flex: 1;
  padding: 0 1.5em 0 1.5em;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`
const CenteredContent = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`
const MainDiv = styled.div`
  width: 100%;
  min-height: 100%;
`
