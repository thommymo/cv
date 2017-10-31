import React from "react"
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { H1, P, H4, H2, H3 } from '../components/styled-atoms'
import styled from 'styled-components'
import PageNotFound from '../components/page-not-found'
import { white } from '../utils/colors'
import PageShell from '../components/page-shell'
import { GraphCMSImages } from '../components/full-with-image'
import { media } from '../utils/breakpoints'
import { CSSTransition, TransitionGroup } from 'react-transition-group'



/*
  TODO:
  1. DONE get ID from URL - partially DONE
  2. DONE get already available data from cache // See http://dev.apollodata.com/react/migration.html#returnPartialData
  3. DONE get the rest of the data from graphcms
  4. Create the rest of the Data in graphcms
  5. DONE Make this more error proove (i.e. only part of the data is available)
  6. Implement a (global) loading mechanism
  7. Fix CSS clitches
*/

const PreviewCVEntry = (props) => {
  if (props.data.loading) {
    return <div>Still Loading</div>
  } else if (props.data.CVEntries && props.data.CVEntries.moreinfocventry){
    const color = JSON.parse(props.data.CVEntries.moreinfocventry.background)
    const colorRGBA = `rgba(${color.r},${color.g},${color.b},${color.a})`
    return(
      <PageShell color={colorRGBA} title={props.data.CVEntries.title}>
        <CVEntryHeader
          background={colorRGBA}
          startDate={props.data.CVEntries.startDate}
          endDate={props.data.CVEntries.endDate}
          title={props.data.CVEntries.title}
        />
        <BasicInfo>
          <P>The Rest needs some Time to Load </P>
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
  const formattedStartDate = startDate.toLocaleDateString('de-DE', options)
  const formattedEndDate = endDate.toLocaleDateString('de-DE', options)
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
      <H4>{formattedStartDate} – {formattedEndDate}</H4>
      <H1WithDate>{props.title}</H1WithDate>
    </BasicInfo>
  )
}

const FullCVEntry = (props) => {
  //This is most propably cached
  const previewQuery = gql`{
    CVEntries(id: "${props.queryid}") {
      id
      startDate
      endDate
      title
      moreinfocventry {
        background
      }
    }
  }`
  const PreviewCVEntryWithData = graphql(previewQuery)(PreviewCVEntry)
  console.log(`FULLCV: ${props.data.loading}`)

  if (props.data.loading || props.data.networkStatus === 8) {
    return <PreviewCVEntryWithData />
  } else if (props.data.CVEntries) {
    const entry = props.data.CVEntries.moreinfocventry
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
    const timeoutTransition = { enter:1800, exit:300 }

    return(
      <PageShell color={colorRGBA} title={props.data.CVEntries.title}>
        <CVEntryHeader
          logo={entry.logo}
          background={entry.background}
          startDate={props.data.CVEntries.startDate}
          endDate={props.data.CVEntries.endDate}
          title={props.data.CVEntries.title}
        />
        <TransitionGroup
          appear={true}>
          <CSSTransition appear={true}
            timeout={timeoutTransition}
            classNames="SlideIn"
            key="awegf"
            unmountOnExit={true}
          >
            <MainDiv>
              <BasicInfo>
                { entry.responsabilities &&
                  <TwoColumns>
                    <Column>
                      <H4>{entry.responsabilities}</H4>
                      <P dangerouslySetInnerHTML={responsabilitiesdescription} />
                    </Column>
                    <Column>
                      <H4>{entry.projects}</H4>
                      <P dangerouslySetInnerHTML={projectdescription} />
                    </Column>
                  </TwoColumns>
                }
                { entry.descriptionimages &&
                  entry.descriptionimages.map((image) => (
                    <GraphCMSImages handle={image.handle} key={image.handle}/>
                  )) }
              </BasicInfo>
              { entry.awardstitle &&
                <Awards>
                  <CenteredContent>
                    <H2>{entry.awardstitle}</H2>
                    <TwoColumns>
                      <Column>
                        <img src={entry.awardlogo1.url} width="100" height="100"/>
                        <P>{entry.awarddescription1}</P>
                      </Column>
                      <Column>
                        <img src={entry.awardlogo2.url} width="100" height="100" />
                        <P>{entry.awarddescription2}</P>
                      </Column>
                      <Column>
                        <img src={entry.awardlogo2.url} width="100" height="100" />
                        <P>{entry.awarddescription2}</P>
                      </Column>
                    </TwoColumns>
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
                  <H4>Arbeitszeugnis</H4>
                  <P>Maybe an image is needed here</P>
                </WorkReview>
              }
            </MainDiv>
            </CSSTransition>
        </TransitionGroup>
      </PageShell>
      )
      } else {
        return (
          <PreviewCVEntryWithData />
        )
      }
    }

const BasicInfo = styled.section`
  text-align: center;
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
const H1WithDate = H1.extend`
  margin-top:-0.5em;
`
const TwoColumns = styled.div`
  ${media.desktop`display: flex;max-width: 800px;margin-left:auto;margin-right:auto;`}
  ${media.desktop`display: flex;`}
`
const Column = styled.div`
  flex:1;
`
const CenteredContent = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`
class CVEntryDetailViewWithData extends React.Component {

  //Here I'm preventing React to rerender if my props did not change
  shouldComponentUpdate(nextProps, nextState){
    return !(nextProps, this.props);
  }

  render(){
  //  componentWillMount(){
      window.setTimeout(() => (window.scrollTo(0, 0)),400)
  //  }
    const id = this.props.location.pathname ? this.props.location.pathname.replace(/[/]/g, "") : false
    //query to get the Full View
    const fullQuery = gql`{
      CVEntries(id: "${id}") {
        id
        title
        startDate
        endDate
        moreinfocventry {
          id
          background
          responsabilities
          responsabilitiesdescription
          projects
          projectdescription

          logo {
            url
          }
          descriptionimages {
            handle
          }
          awardstitle
          awardlogo1 {
            url
          }
          awarddescription1
          awardlogo2 {
            url
          }
          awarddescription2
          additionaltitel
          additionaldescription
        }
      }
    }`
    const FullCVEntryWithData = graphql(fullQuery)(FullCVEntry)

    return(
      <MainDiv>
        <FullCVEntryWithData queryid={id} />
      </MainDiv>
    )
  }
}

export default CVEntryDetailViewWithData

const MainDiv = styled.div`
  width:100%;
  min-height:100%;
`

const Logo = styled.svg`
  width:100%;
  height:1.3em;
  opacity:0.9;
  background-color: ${white};
  -webkit-mask: url(${props => props.src}) center/4em no-repeat;
  mask: url(${props => props.src}) center/4em no-repeat;
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
