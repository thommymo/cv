import React from 'react';
import { CVEntry, PreviewCVEntry } from "../../components/templates/cv-entry"
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
        organization={CVEntries.organization}
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
      organization
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
  })(PreviewCVEntryState)

const CVEntryState = ({ data : { networkStatus=1, loading=false, CVEntries=false, variables }} ) => {
  if(loading || networkStatus === 8 || !CVEntries){
    return <PreviewCVEntryWithData id={variables.id}/>
  }else{
    return (
      <CVEntry
        organization={CVEntries.organization}
        startDate={CVEntries.startDate}
        endDate={CVEntries.endDate}
        title={CVEntries.title}
        background={CVEntries.moreinfocventry.background}
        responsabilities={CVEntries.moreinfocventry.responsabilities}
        responsabilitiesdescription={CVEntries.moreinfocventry.responsabilitiesdescription}
        projects={CVEntries.moreinfocventry.projects}
        projectdescription={CVEntries.moreinfocventry.projectdescription}
        descriptionimages={CVEntries.moreinfocventry.descriptionimages}
        awardstitle={CVEntries.moreinfocventry.awardstitle}
        awardlogo1={CVEntries.moreinfocventry.awardlogo1}
        awarddescription1={CVEntries.moreinfocventry.awarddescription1}
        awardlogo2={CVEntries.moreinfocventry.awardlogo2}
        awarddescription2={CVEntries.moreinfocventry.awarddescription2}
        awardlogo3={CVEntries.moreinfocventry.awardlogo3}
        awarddescription3={CVEntries.moreinfocventry.awarddescription3}
        workreview={CVEntries.moreinfocventry.workreview}
        workreviewimages={CVEntries.moreinfocventry.workreviewimages}
      />
    )
  }
}

const fullQuery = gql`
  query CVEntriesQuery($id: ID!){
  CVEntries(id: $id) {
    id
    title
    startDate
    endDate
    organization
    moreinfocventry {
      id
      background
      responsabilities
      responsabilitiesdescription
      projects
      projectdescription
      descriptionimages {
        id
        handle
      }

      awardstitle
      awardlogo1 {
        id
        handle
      }
      awarddescription1
      awardlogo2 {
        id
        handle
      }
      awarddescription2
      awardlogo3 {
        id
        handle
      }
      awarddescription3
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
