import React from "react"
import { H1, P, H4, H2, Loading, FullWithImage } from '../components/styled-atoms'
import styled from 'styled-components'
import PageNotFound from '../components/page-not-found-molecule'
import { white } from '../utils/colors'
import PageShell from '../components/page-shell'
import { media } from '../utils/breakpoints'
import { CSSTransition } from 'react-transition-group'
import { timeout, timeoutTransition } from '../utils/constants'

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
      <PageShell color={colorRGBA} title={props.title}>
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
  setTimeout(() => window.scrollTo(0, 0), (450))
  return(
    <PageShell color={colorRGBA} title={props.title} >
      <CVEntryHeader
        logo={entry.logo}
        background={entry.background}
        startDate={props.startDate}
        endDate={props.endDate}
        title={props.title}
      />

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
              <FullWithImage handle={image.handle} key={image.handle}/>
            )) }
        </BasicInfo>
        <CSSTransition
          appear={true}
          key="aewlfjae"
          timeout={timeoutTransition}
          classNames="SlideIn"
        >
          <BasicInfo>
            { entry.awardstitle &&
              <Awards>
                <CenteredContent>
                  <H2>{entry.awardstitle}</H2>
                  <TwoColumns>
                    <Column>
                      <img src={entry.awardlogo1.url} width="100" height="100" alt="Award Logo"/>
                      <P>{entry.awarddescription1}</P>
                    </Column>
                    <Column>
                      <img src={entry.awardlogo2.url} width="100" height="100" alt="Award Logo" />
                      <P>{entry.awarddescription2}</P>
                    </Column>
                    <Column>
                      <img src={entry.awardlogo2.url} width="100" height="100" alt="Award Logo" />
                      <P>{entry.awarddescription2}</P>
                    </Column>
                  </TwoColumns>
                </CenteredContent>
              </Awards>
            }
            { entry.additionaltitle &&
              <Additional>
                <H2>{entry.additionaltitle}</H2>
                <P dangerouslySetInnerHTML={additionaldescription} />
              </Additional>
            }
            { entry.workreview &&
              <WorkReview>
                {/* TODO: Add these fields to GraphCMS */}
                <H4>Arbeitszeugnis</H4>
                <P>Maybe an image is needed here</P>
              </WorkReview>

            }
          </BasicInfo>
        </CSSTransition>
      </MainDiv>
    </PageShell>
  )
}

//TODO: Review if these elements are all really needed

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
