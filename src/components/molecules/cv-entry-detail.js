import React from 'react';
import { H1, P, H4, H2, H3 } from '../../components/atoms/typography'
import { FullWithImage } from '../../components/atoms/images'
import { Loading } from '../../components/atoms/loading'
import styled from 'styled-components'
import PageNotFound from '../../components/molecules/page-not-found'
import { white } from '../../utils/colors'
import PageShell from '../../components/page-shell'
import { media } from '../../utils/breakpoints'
import { CSSTransition } from 'react-transition-group'
import { timeoutTransition } from '../../utils/constants'

// FullPreviewCVEntry shows loding bar, when no data is available or when data is only partially available
export const FullPreviewCVEntry = (props) => {
  if (props && props.moreinfocventry){
    const color = JSON.parse(props.moreinfocventry.background)
    const colorRGBA = `rgba(${color.r},${color.g},${color.b},${color.a})`
    return(
      // TODO: Prevent Apollo to do 2 API calls, when data is available
      // client.select(gql`{ ... }`, '5'); This way I should be able to get data
      // from the store without loading it, that way I can prevent to make 2
      // API calls, when no data is available.
      // Read: https://github.com/apollographql/apollo-client/issues/1036
      <PageShell color={colorRGBA} title={props.title} backlink="/cv">
        <CVEntryHeader
          company={props.company}
          school={props.school}
          background={colorRGBA}
          startDate={props.startDate}
          endDate={props.endDate}
          title={props.title}
          color={colorRGBA}
        />
        <BasicInfo>
          <Loading />
        </BasicInfo>
      </PageShell>
    )
  } else {
    return <PageNotFound />
  }
}

const CVEntryHeader = (props) => {
  const startDate = new Date(props.startDate)
  const endDate = new Date(props.endDate)
  const options = { year: 'numeric', month: 'long'}
  const formattedStartDate = props.startDate ? startDate.toLocaleDateString('de-DE', options) : ""
  const formattedEndDate = props.endDate ? endDate.toLocaleDateString('de-DE', options) : ""
  return(
    <BasicInfoWithBorder color={props.color}>
      <DateSpan>{formattedStartDate} – {formattedEndDate}</DateSpan>
      <H4Capitals>{props.company}{props.school}</H4Capitals>
      <H1DetailPage>{props.title}</H1DetailPage>
    </BasicInfoWithBorder>
  )
}

const H4Capitals = H4.extend`
  text-transform:uppercase;
`

export const FullCVEntry = (props) => {

  const entry = props.moreinfocventry
  const responsabilitiesdescription = {
    __html: entry.responsabilitiesdescription
  }
  const projectdescription = {
    __html: entry.projectdescription
  }
  const additionaldescription = {
    __html: entry.additionaldescription
  }
  const color = JSON.parse(entry.background)
  const colorRGBA = `rgba(${color.r},${color.g},${color.b},${color.a})`
  return(

      <PageShell color={colorRGBA} title={props.title} backlink="/cv">

        <CVEntryHeader
          company={props.company}
          school={props.school}
          background={entry.background}
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
                <Columns>
                  <Projects>
                    <H4>{entry.projects}</H4>
                    <span dangerouslySetInnerHTML={projectdescription} />
                  </Projects>
                  <Tasks>
                    <H3>{entry.responsabilities}</H3>
                    <P dangerouslySetInnerHTML={responsabilitiesdescription} />
                  </Tasks>
                </Columns>
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
                <Awards>
                  <CenteredContent>
                    <H2>{entry.awardstitle}</H2>
                    <Columns>
                      {
                        entry.awardlogo1 && entry.awarddescription1 &&
                        <Column>
                          <img src={entry.awardlogo1.url} height="100" alt="Award Logo"/>
                          <PAward>{entry.awarddescription1}</PAward>
                        </Column>
                      }
                      {
                        entry.awardlogo2 && entry.awarddescription2 &&
                        <Column>
                          <img src={entry.awardlogo2.url} height="100" alt="Award Logo" />
                          <PAward>{entry.awarddescription2}</PAward>
                        </Column>
                      }
                      {
                        entry.awardlogo3 && entry.awarddescription3 &&
                        <Column>
                          <img src={entry.awardlogo3.url} height="100" alt="Award Logo" />
                          <PAward>{entry.awarddescription3}</PAward>
                        </Column>
                      }
                    </Columns>
                  </CenteredContent>
                </Awards>
              }
              { entry.additionaltitel &&
                <Additional>
                  <H2>{entry.additionaltitel}</H2>
                  <P dangerouslySetInnerHTML={additionaldescription} />
                </Additional>
              }
              { entry.workreview &&
                <WorkReview>
                  {/* TODO: Add these fields to GraphCMS */}
                  <H2>{entry.workreview}</H2>
                  { entry.workreviewimages &&
                    entry.workreviewimages.map((image) => (
                      <BasicInfo key={image.handle}>
                        <FullWithImage color={colorRGBA} handle={image.handle} />
                      </BasicInfo>
                    )) }
                </WorkReview>
              }
            </BasicInfo>
          </MainDiv>
        </CSSTransition>
      </PageShell>


  )
}

//TODO: Review if these elements are all really needed

/*
  Typography
*/

const H1DetailPage = H1.extend`
  margin-bottom:40px;
  margin-top:120px;
`
const DateSpan = H4.extend`
  text-transform: uppercase;
  margin-top:-29px;
  color:black;
  font-weight: 600;
  opacity: 0.8
`
const PAward = P.extend`
  text-transform:uppercase;
  max-width: 320px;
  margin-left:auto;
  margin-right:auto;
`

/*
  Containers
*/


const BasicInfo = styled.section`
  text-align: center;
  padding-bottom:5em;
`
const BasicInfoWithBorder = BasicInfo.extend`
  border: solid 0px;
  border-top-width: 40px;
  border-top-color: ${white};
  border-left-width: 40px;
  border-left-color: ${props => props.color};
  border-right-width: 40px;
  border-right-color: ${props => props.color};
`
const Awards = styled.section`
  text-align: center;
  padding-bottom:5em;
`
const Additional = styled.section`
  text-align: center;
`
const WorkReview = styled.section`
  text-align: center;
  max-width: 700px;
  margin-left:auto;
  margin-right:auto;
`

const Columns = styled.div`
  ${media.desktop`display: flex; margin-left:auto; margin-right:auto;`}
  ${media.desktop`display: flex;`}
`
const Tasks = styled.div`
  flex:3;
  padding: 0 2em 0 2em;
  text-align: left;
  margin-left:auto;
  margin-right:auto;
  & p {
    font-size: 1.15em;
    line-height: 1.3em;
  }
`
const Projects = styled.div`
  flex:1;
  opacity: 0.95;
  font-size: 0.9em;
  margin-top: 1.3em;
  text-align: left;
  padding: 0 2em 0 2em;
  margin-left:auto;
  margin-right:auto;
  & > h4 {
    text-transform: uppercase;
  }
  & > span > h3 {
    text-transform: uppercase;
  }
`
const Column = styled.div`
  flex:1;
  padding: 0 1.5em 0 1.5em;
  max-width:500px;
  margin-left:auto;
  margin-right:auto;
`
const CenteredContent = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`
const MainDiv = styled.div`
  width:100%;
  min-height:100%;
`
