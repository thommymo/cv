import React, { Component } from 'react';
import { CVEntries, CVEntriesHeader } from '../../components/cv-entries-molecule'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PageShell from '../../components/page-shell'
import { Loading } from '../../components/styled-atoms'
import { CSSTransition} from 'react-transition-group'
import { timeoutTransition } from '../../utils/constants'

// TODO: Instead of creating my own HOC, it might be usefull to use someting like recompose. See:
// https://dev-blog.apollodata.com/simplify-your-react-components-with-apollo-and-recompose-8b9e302dea51


//TODO: This does not load/show data if it is not the first page loaded
//TODO: Only render once: This is rendered 4 Times now (might be because of the CSSTransition. This does not make any sense)

const TimelineContent = ( { data : { loading=false, allCVEntrieses=false }} ) => {
  if(loading){
    console.log("LOADING")
    return(
      <PageShell>
        <CVEntriesHeader titleleft="Work" titleright="Studies"/>
        <div><Loading /></div>
      </PageShell>
    )
  } else if (allCVEntrieses){
    console.log("Show Entries")
    return(
      <PageShell>
        <CVEntriesHeader titleleft="Work" titleright="Studies"/>
        { allCVEntrieses.map((entry) => (
          <CVEntries data={entry} key={entry.id} />
        ))}
      </PageShell>
    )
  } else {
    console.log("Some Error Happend")
    return(
      <PageShell>
        <CVEntriesHeader titleleft="Work" titleright="Studies"/>
        <div><Loading /></div>
        <p>something went wrong</p>
      </PageShell>
    )
  }
}


// here we create a grapphql operation
// there is an id needed for each graphql object
const data = gql`
  query getEntriesQuery {
    allCVEntrieses(orderBy: order_ASC) {
      id
      slug
      showmore
      startDate
      endDate
      right
      left
      addTopBorder
      addBottomBorder
      bothleft
      bothright
      company
      school
      responsability
      learned
      title
      moreinfocventry {
        id
        background
      }
    }
  }
`

/*
  We then can use the graphql container to pass the query results returned by getEntriesQuery
  to a component as a prop (and update them as the results change)
*/
export const CVEntriesWithData = graphql(data)(TimelineContent);
