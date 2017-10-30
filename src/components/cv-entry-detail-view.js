import React from "react"
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { H1, P, H4 } from '../components/styled-atoms'
import styled from 'styled-components'
import PageNotFound from '../components/page-not-found'
import { white } from '../utils/colors'
import PageShell from '../components/page-shell'

/*
  TODO:
  1. get ID from URL - partially DONE
  2. get already available data from cache // See http://dev.apollodata.com/react/migration.html#returnPartialData
  3. get the rest of the data from graphcms
*/

const PreviewCVEntry = (props) => {
  console.log(`PREVIEWCV: ${props.data.loading}`)
  if (props.data.loading) {
    return <div>Still Loading</div>
  } else if (props.data.CVEntries){
    const color = JSON.parse(props.data.CVEntries.moreinfoentry.background)
    const colorRGBA = `rgba(${color.r},${color.g},${color.b},${color.a})`
    return(
      <PageShell color={colorRGBA} title={props.data.CVEntries.title}>
        <LogoColor><Logo/></LogoColor>
        <H1>{props.data.CVEntries.title}</H1>
        <P>Hello from the PreviewCVEntry page!</P>
      </PageShell>
    )
  } else {
    return <div>PreviewCVEntry</div>
  }
}

const FullCVEntry = (props) => {
  //This is most propably cached

  //TODO: Move this into componentWillMount so it doesn't fire more then once
  console.log(props.queryid)
  const previewQuery = gql`{
    CVEntries(id: "${props.queryid}") {
      id
      title
      moreinfoentry {
        background
      }
    }
  }`
  const PreviewCVEntryWithData = graphql(previewQuery)(PreviewCVEntry)
  console.log(`FULLCV: ${props.data.loading}`)
  if (props.data.loading || props.data.networkStatus === 8) {
    return <PreviewCVEntryWithData />
  } else if (props.data.CVEntries) {
    const description = {
      __html: props.data.CVEntries.moreinfoentry.description
    }
    const color = JSON.parse(props.data.CVEntries.moreinfoentry.background)
    const colorRGBA = `rgba(${color.r},${color.g},${color.b},${color.a})`

    return(
      <PageShell color={colorRGBA} title={props.data.CVEntries.title}>
        <LogoColor><Logo src={props.data.CVEntries.moreinfoentry.logo.url} background={props.data.CVEntries.moreinfoentry.background} /></LogoColor>
        <H1>{props.data.CVEntries.title}</H1>
        <H4>What did I do there?</H4>
        <P dangerouslySetInnerHTML={description} />
        <P>An Image or two should appear, which explains, what I did</P>
        <H4>Prices won</H4>
        <P dangerouslySetInnerHTML={description} />
        <P>{props.data.CVEntries.moreinfoentry.background}</P>
        <H4>What was really difficult?</H4>
        <P>{props.data.CVEntries.moreinfoentry.background}</P>
        <P dangerouslySetInnerHTML={description} />
        <H4>Arbeitszeugnis</H4>
        <P>Maybe an image is needed here</P>
        <H4>Arbeitszeugnis</H4>
      </PageShell>
    )
  } else {
    return (
      <div>
        <PageNotFound />
      </div>
    )
  }
}

class CVEntryDetailViewWithData extends React.PureComponent {
  // Using PureCompenent prevents this Child to rerender four times (because of TransitionGroup)
  // This should not more than once
  render(){
    const id = this.props.location.pathname ? this.props.location.pathname.replace(/[/]/g, "") : false
    //query to get the Full View
    const fullQuery = gql`{
      CVEntries(id: "${id}") {
        id
        title
        moreinfoentry {
          id
          background
          description
          logo {
            url
          }
        }
      }
    }`
    const FullCVEntryWithData = graphql(fullQuery)(FullCVEntry)

    return(
      <FullCVEntryWithData queryid={id}/>
    )

  }
}

export default CVEntryDetailViewWithData

const Logo = styled.svg`
  width:100%;
  height:1.5em;
  opacity:0.9;
  background-color: ${white};
  -webkit-mask: url(${props => props.src}) 0 0/4em no-repeat;
  mask: url(${props => props.src}) 0 0/4em no-repeat;
  background-position: 0;
  background-repeat: no-repeat;
`
const LogoColor = H1.extend`

`
