import React from 'react';
import { FullCVEntry, FullPreviewCVEntry } from "../../components/cv-entry-detail-molecule"
import PageNotFound from '../../components/page-not-found-molecule'
import PageShell from '../../components/page-shell'
import { Loading } from '../../components/styled-atoms'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const PreviewCVEntry = ({ data : { networkStatus=1, loading=false, CVEntries=false } } ) => {
  if(loading || networkStatus === 8){
    return <PageShell><Loading/></PageShell>
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
        logo {
          id
          url
        }
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

const CVEntry = ({ data : { networkStatus=1, loading=false, CVEntries=false, variables }} ) => {
  if(loading || networkStatus === 8 || !CVEntries){
    return <PreviewCVEntryWithData id={variables.id}/>
  }else{
    return <FullCVEntry {...CVEntries}/>
  }
}

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

//TODO: Replace this with a HOC

export const ShellCVEntryWithData = (props) => (
  <div><CVEntryWithData {...props}/></div>
)
