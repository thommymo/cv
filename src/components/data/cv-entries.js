import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PageShell from '../../components/templates/page-shell'
import { CVIsLoading, CV } from '../../components/templates/cv'


// TODO: Instead of creating my own HOC, it might be usefull to use someting like recompose. See:
// https://dev-blog.apollodata.com/simplify-your-react-components-with-apollo-and-recompose-8b9e302dea51

const CVEntriesState = ( { data : { loading=false, allCVEntrieses=false }} ) => {
  if(loading){
    return(
      <CVIsLoading />
    )
  } else if (allCVEntrieses){
    return(
      <CV allCVEntrieses={allCVEntrieses}/>
    )
  } else {
    return(
      //TODO: Add React 16 Error Handling, because here an error happend. Most propably the graphql server is down or there is no internet connectivity
      <p>something went wrong</p>
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
export const CVEntriesWithData = graphql(data)(CVEntriesState);

//TODO: Replace this with a HOC

export const ShellCVEntriesWithData = (props) => (
  <div><CVEntriesWithData {...props}/></div>
)
