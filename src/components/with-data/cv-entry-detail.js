import React from 'react';
import { FullCVEntry, FullPreviewCVEntry } from "../../components/cv-entry-detail-molecule"
import PageNotFound from '../../components/page-not-found-molecule'

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components'

const CVEntry = ({ data : { networkStatus=1, loading=false, CVEntries=false, variables }} ) => {
  if(loading || networkStatus === 8 || !CVEntries){
    return <PreviewCVEntryWithData id={variables.id}/>
  }else{
    return <FullCVEntry {...CVEntries}/>
  }
}

const PreviewCVEntry = ({ data : { networkStatus=1, loading=false, CVEntries=false } } ) => {
  if(loading || networkStatus === 8){
    return <div>Loading</div>
  }else if(CVEntries && CVEntries.moreinfocventry){
    return <FullPreviewCVEntry {...CVEntries}/>
  }else{
    return <PageNotFound />
  }
}


const previewQuery = gql`
  query CVEntriesQuery($id: ID!){
    CVEntries(id: $id) {
      id
      startDate
      endDate
      title
      moreinfocventry {
        id
        background
      }
    }
  }
`

const PreviewCVEntryWithData = graphql(
  previewQuery,
  {options: (props) => ({
     variables: { id: props.id}
    })
  })(PreviewCVEntry)

const fullQuery = gql`
  query CVEntriesQuery($id: ID!){
  CVEntries(id: $id) {
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
        id
        url
      }
      descriptionimages {
        id
        handle
      }
      awardstitle
      awardlogo1 {
        id
        url
      }
      awarddescription1
      awardlogo2 {
        id
        url
      }
      awarddescription2
      additionaltitel
      additionaldescription
    }
  }
}`

export const CVEntryWithData = graphql(
  fullQuery,
  {options: (props) => ({
     variables: { id: props.location.pathname ? props.location.pathname.replace(/[/]/g, "") : false}
    })
  })(CVEntry)


/*
TODO: Remove this class, since it is not needed anymore...

  class CVEntryDetailViewWithData extends React.Component {

    //Here I'm preventing React to rerender if my props did not change
    shouldComponentUpdate(nextProps, nextState){
      return !(nextProps, this.props);
    }

    render(){
      //scrolling to top prevents jumping around while loading data (there might)
      //be a better way to implement this.
      window.setTimeout(() => (window.scrollTo(0, 0)),400)
      const id = this.props.location.pathname ? this.props.location.pathname.replace(/[/]/g, "") : false
      //query to get the Full View

      return(
        <MainDiv>
          <CVEntryWithData queryid={id} />
        </MainDiv>
      )
    }
  }

  export default CVEntryDetailViewWithData

  const MainDiv = styled.div`
    width:100%;
    min-height:100%;
  `

  */
