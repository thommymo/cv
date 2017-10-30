import React, { Component } from "react"
import { history } from 'react-router-dom'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PageNotFound from '../components/page-not-found'

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
    return(
      <div>
        <h1>{props.data.CVEntries.title}</h1>
        <p>Hello from the PreviewCVEntry page!</p>
      </div>
    )
  } else {
    return <PageNotFound />
  }
}

const FullCVEntry = (props) => {
  //This is most propably cached
  const previewQuery = gql`{
    CVEntries(id: "${props.id}") {
      id
      title
    }
  }`
  const PreviewCVEntryWithData = graphql(previewQuery)(PreviewCVEntry)
  console.log(`FULLCV: ${props.data.loading}`)
  if (props.data.loading || props.data.networkStatus === 8) {
    return <PreviewCVEntryWithData {...props} />
  } else if (props.data.CVEntries) {
    return(
      <div>
        <h1>{props.data.CVEntries.title}</h1>
        <p>Hello from the FullCVEntry page!</p>
      </div>
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

  render(){
    //query to get the Full View
    const fullQuery = gql`{
      CVEntries(id: "${this.props.id}") {
        id
        title
        moreinfoentry {
          id
          background
        }
      }
    }`
    const FullCVEntryWithData = graphql(fullQuery)(FullCVEntry)

    return(
      <FullCVEntryWithData {...this.props} />
    )

  }
}

export default CVEntryDetailViewWithData
