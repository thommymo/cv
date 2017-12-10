import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { CVIsLoading, CV } from '../../components/templates/cv'


// TODO: Instead of creating my own HOC, it might be usefull to use someting like recompose. See:
// https://dev-blog.apollodata.com/simplify-your-react-components-with-apollo-and-recompose-8b9e302dea51

const CVEntriesState = ( { data : { loading=false, allCVEntrieses=false }} ) => {
  if(loading){
    return(<CVIsLoading />)
  } else if (allCVEntrieses){
    //TODO: Put data in Cache with name tm-cv-entries
    console.log(allCVEntrieses)
    return(<CV allCVEntrieses={allCVEntrieses}/>)
  } else {
    return(
      //TODO: Add React 16 Error Handling, because here an error happend. Most propably the graphql server is down or there is no internet connectivity
      <p>something went wrong</p>
    )
  }
}

/*
  here we create a graphql operation
  there is an id needed for each graphql object
 */

const data = gql`
  query getEntriesQuery {
    allCVEntrieses(orderBy: order_ASC) {
      id
      showmore
      startDate
      endDate
      right
      left
      addTopLeftTriangle
      addTopRightTriangle
      addBottomLeftTriangle
      addBottomRightTriangle
      bothleft
      bothright
      organization
      excerpt
      title
      moreinfocventry {
        id
        background
      }
      furtherEducationTitle
      furtherEducationContent
    }
  }
`

/*
  We then can use the graphql container to pass the query results returned by getEntriesQuery
  to a component as a prop (and update them as the results change)
*/

const CVEntriesWithData = (...props) => {
  const dataInCache = checkIfDataInCache()
  if(dataInCache){
    return <CVEntriesWithDataFromCache {...dataInCache}/>
  }else{
    return <CVEntriesWithDataFromAPI {...props}/>
  }
}

const checkIfDataInCache = () => {
  //TODO: Check if IndexedDB with the name tm-cv-entries exists, return true if yes
  return false
}

const CVEntriesWithDataFromAPI = graphql(data)(CVEntriesState);

const CVEntriesWithDataFromCache = () => {
  let allCVEntriesesfromCache = {}
  //TODO: Get data from indexedDB with the name tm-cv-entries
  return <CV allCVEntrieses={allCVEntriesesfromCache}/>
}


//TODO: Replace this with a HOC

export const ShellCVEntriesWithData = (props) => (
  <div><CVEntriesWithData {...props}/></div>
)
