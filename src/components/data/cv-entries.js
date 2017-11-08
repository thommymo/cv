import React from 'react';
import { CVEntries, CVEntriesHeader } from '../../components/molecules/cv-entries'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PageShell from '../../components/page-shell'
import { Loading } from '../../components/atoms/loading'

// TODO: Instead of creating my own HOC, it might be usefull to use someting like recompose. See:
// https://dev-blog.apollodata.com/simplify-your-react-components-with-apollo-and-recompose-8b9e302dea51

const CVEntriesTemplate = ( { data : { loading=false, allCVEntrieses=false }} ) => {
  if(loading){
    return(
      <PageShell withMainNavigation>
        <CVEntriesHeader titleleft="Arbeit" titleright="Ausildung"/>
        <Loading />
      </PageShell>
    )
  } else if (allCVEntrieses){
    return(
      <PageShell withMainNavigation>
        <CVEntriesHeader titleleft="Arbeit" titleright="Ausildung"/>
        { allCVEntrieses.map((entry) => (
          <CVEntries data={entry} key={entry.id} />
        ))}
      </PageShell>
    )
  } else {

    //TODO: Add React 16 Error Handling

    return(
      <PageShell withMainNavigation>
        <CVEntriesHeader titleleft="Work" titleright="Studies"/>
        <div><Loading /></div>
        <p>something went wrong</p>
      </PageShell>
    )
  }
}


/*
  here we create a grapphql operation
  there is an id needed for each graphql object
 */

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
      addTopLeftTriangle
      addTopRightTriangle
      addBottomLeftTriangle
      addBottomRightTriangle
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
        logo {
          id
          url
        }
      }
    }
  }
`

/*
  We then can use the graphql container to pass the query results returned by getEntriesQuery
  to a component as a prop (and update them as the results change)
*/
export const CVEntriesWithData = graphql(data)(CVEntriesTemplate);

//TODO: Replace this with a HOC

export const ShellCVEntriesWithData = (props) => (
  <div><CVEntriesWithData {...props}/></div>
)
