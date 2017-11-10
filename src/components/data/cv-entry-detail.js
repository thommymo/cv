import React from 'react';
import { CVEntry, PreviewCVEntry } from "../../components/molecules/cv-entry-detail"
import PageNotFound from '../pages/page-not-found'
import PageShell from '../../components/templates/page-shell'
import { Loading } from '../../components/atoms/loading'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const PreviewCVEntryState = ({ data : { networkStatus=1, loading=false, CVEntries=false } } ) => {
  if(loading || networkStatus === 8){
    return <PageShell><Loading/></PageShell>
  }else if(CVEntries && CVEntries.moreinfocventry){
    return (
      <PreviewCVEntry
        company={CVEntries.company}
        school={CVEntries.school}
        startDate={CVEntries.startDate}
        endDate={CVEntries.endDate}
        title={CVEntries.title}
        background={CVEntries.moreinfocventry.background}
      />
      )
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
      company
      school
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
  })(PreviewCVEntryState)

const CVEntryState = ({ data : { networkStatus=1, loading=false, CVEntries=false, variables }} ) => {
  if(loading || networkStatus === 8 || !CVEntries){
    return <PreviewCVEntryWithData id={variables.id}/>
  }else{
    return <CVEntry {...CVEntries}/>
  }
}

const fullQuery = gql`
  query CVEntriesQuery($id: ID!){
  CVEntries(id: $id) {
    id
    title
    startDate
    endDate
    company
    school
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
      awardlogo3 {
        id
        url
      }
      awarddescription3
      additionaltitel
      additionaldescription
      workreview
      workreviewimages {
        id
        handle
      }
    }
  }
}`

export const CVEntryWithData = graphql(
  fullQuery,
  {options: (props) => ({
     variables: { id: props.location.pathname ? props.location.pathname.replace(/id|[/]/g, "") : false }
    })
  })(CVEntryState)

//TODO: Replace this with a HOC

export const ShellCVEntryWithData = (props) => {
  return <div><CVEntryWithData {...props}/></div>
}
