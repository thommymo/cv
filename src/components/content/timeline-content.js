import React, { Component } from 'react';
import { Timeline, TimelineHeader } from '../../components/timeline'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

//TODO: make this a higher order component, which loads data with gql

// TODO: Instead of creating my own HOC, I could defently use the one here (recompose)
// https://dev-blog.apollodata.com/simplify-your-react-components-with-apollo-and-recompose-8b9e302dea51

// TODO: I think I should store the data I'm receiving in a Redux store, so I have all the data available everywhere....

class TimelineContent extends Component {
  render() {
    //TODO: Only render once: This is rendered 4 Times now (might be because of the CSSTransition. This does not make any sense)
    return(
      <div>
        <TimelineHeader titleleft="Work" titleright="Studies"/>
        { this.props.data.loading &&
          <div>I am Loading Data, please wait</div>
        }
        { this.props.data.allCVEntrieses &&
          this.props.data.allCVEntrieses.map((entry) => (
            <Timeline
              id = {entry.id}
              key = {entry.id}
              slug = {entry.slug}
              showmore = {entry.showmore}
              startDate = {entry.startDate ? entry.startDate.slice(0, 4) : ""}
              endDate = {entry.endDate ? entry.endDate.slice(0, 4) : ""}
              right = {entry.right}
              left = {entry.left}
              addTopBorder = {entry.addTopBorder}
              addBottomBorder = {entry.addBottomBorder}
              bothleft = {entry.bothleft}
              bothright = {entry.bothright}
              company = {entry.company}
              school = {entry.school}
              responsability = {entry.responsability}
              learned = {entry.learned}
              title = {entry.title}
              moreinfoentry = {entry.moreinfoentry}
            />
          ))
        }
      </div>
    )
  }
}

// here we create a grapphql operation
const getEntriesQuery = gql`
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
      moreinfoentry {
        background
      }
    }
  }
`

// We then can use the graphql container to pass the query results returned by getEntriesQuery
// to a component as a prop (and update them as the results change)
export const TimelineContentWithData = graphql(getEntriesQuery)(TimelineContent);
