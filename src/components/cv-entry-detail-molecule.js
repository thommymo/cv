import React from "react"
import { H1, P, H4, H2, H3, Loading, FullWithImage } from '../components/styled-atoms'
import styled from 'styled-components'
import PageNotFound from '../components/page-not-found-molecule'
import { white } from '../utils/colors'
import PageShell from '../components/page-shell'
import { media } from '../utils/breakpoints'
import { CSSTransition } from 'react-transition-group'
import { timeoutTransition } from '../utils/constants'

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
          background={colorRGBA}
          startDate={props.startDate}
          endDate={props.endDate}
          title={props.title}
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
    <BasicInfo>
      <LogoColor>
        { props.logo &&
          <Logo src={props.logo.url} background={props.background} />
        }
        { !props.logo &&
          <Logo background={props.background} />
        }
      </LogoColor>
      <H1WithDate>{props.title}</H1WithDate>
      <DateSpan>{formattedStartDate} – {formattedEndDate}</DateSpan>
    </BasicInfo>
  )
}

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
          logo={entry.logo}
          background={entry.background}
          startDate={props.startDate}
          endDate={props.endDate}
          title={props.title}
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
                  <FullWithImage handle={image.handle} key={image.handle}/>
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
                          <P>{entry.awarddescription1}</P>
                        </Column>
                      }
                      {
                        entry.awardlogo2 && entry.awarddescription2 &&
                        <Column>
                          <img src={entry.awardlogo2.url} height="100" alt="Award Logo" />
                          <P>{entry.awarddescription2}</P>
                        </Column>
                      }
                      {
                        entry.awardlogo3 && entry.awarddescription3 &&
                        <Column>
                          <img src={entry.awardlogo3.url} height="100" alt="Award Logo" />
                          <P>{entry.awarddescription3}</P>
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
                  <H4>{entry.workreviewtitle}</H4>
                  <P>{entry.workreviewimages}</P>
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

const H1WithDate = H1.extend`
  margin-bottom:0;
`
const DateSpan = H4.extend`
  text-transform: uppercase;
`

/*
  Containers
*/


const BasicInfo = styled.section`
  text-align: center;
  padding-bottom:5em;
`
const Awards = styled.section`
  text-align: center;
`
const Additional = styled.section`
  text-align: center;
`
const WorkReview = styled.section`
  text-align: center;
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

const Logo = styled.svg`
  width:100%;
  height:1.3em;
  opacity:0.9;
  background-color: ${white};
  -webkit-mask: url(${props => props.src}) center/3.5em no-repeat;
  mask: url(${props => props.src}) center/3.5em no-repeat;
  background-position:center;
  background-repeat: no-repeat;
  text-align:center;
`
const LogoColor = styled.span`
  font-size:3em;
  padding-top:30px;
  padding-bottom:20px;
  display:block;
`
