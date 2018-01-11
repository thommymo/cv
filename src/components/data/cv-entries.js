import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { CVIsLoading, CV } from '../../components/templates/cv'
import idb from 'idb'


// TODO: Instead of creating my own HOC, it might be usefull to use someting like recompose. See:
// https://dev-blog.apollodata.com/simplify-your-react-components-with-apollo-and-recompose-8b9e302dea51

const CVEntriesState = ( { data : { loading=false, allCVEntrieses=false }} ) => {
  if(loading){
    return(<CVIsLoading />)
  } else if (allCVEntrieses){
    //TODO: Update version number, if data changes
    const dbPromise = idb.open('tm-cv',2,upgradeDB => {
      upgradeDB.createObjectStore('keyval');
    }).then((db)=>{
      const tx = db.transaction('keyval','readwrite').objectStore('keyval').put(allCVEntrieses,'all-entries');
      return tx.complete;
    })
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

const CVEntriesWithDataFromAPI = graphql(data)(CVEntriesState);

class ShellCVEntriesWithData extends React.Component {
  constructor(){
    super()
    this.state = {
      dataInCache: false,
      checkedIfDataInCache: false,
      dataFromCache: {}
    }
  }
  componentWillMount(){
    //Check if data is available from indexedDB if yes set State to yes
    idb.open('tm-cv', 1, upgradeDB => {
      upgradeDB.createObjectStore('keyval');
    }).then((db)=>(
      db.transaction('keyval').objectStore('keyval').get('all-entries')
    )).then((data) => {
      if(data){
        this.setState({dataInCache: true, checkedIfDataInCache: true, dataFromCache: data})
      }else{
        this.setState({dataInCache: false, checkedIfDataInCache: true})
      }
    })
  }
  render(){
    const {dataInCache, checkedIfDataInCache, dataFromCache} = this.state
    return(
      <div>
        { !dataInCache && checkedIfDataInCache &&
          <CVEntriesWithDataFromAPI {...this.props}/>
        }
        { dataInCache && checkedIfDataInCache &&
          <CV allCVEntrieses={dataFromCache}/>
        }
      </div>
  )
}
}
export default ShellCVEntriesWithData;
