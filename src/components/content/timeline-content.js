import React, { Component } from 'react';
import { Timeline, TimelineHeader } from '../../components/timeline'
import { secondary, secondaryLight } from '../../utils/colors'
import styled from 'styled-components'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

//TODO: make this a stateless component

class TimelineContent extends Component {
  render() {
    let color = secondary
    return(
      <SectionNoOverflow>
        <TimelineHeader titleleft="Work" titleright="Studies"/>
        { this.props.data.loading &&
          <div>I am Loading Data, please wait</div>
        }
        { this.props.data.allCVEntrieses &&
          this.props.data.allCVEntrieses.map((entry) => (
            <Timeline
              key = {entry.id}
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
              color = {color = color === secondary ? secondaryLight : secondary} //for zebras to be happy
            />
          ))
        }
      </SectionNoOverflow>
    )
  }
}

// here we create a grapphql operation
const getEntriesQuery = gql`
  query getEntriesQuery {
    allCVEntrieses(orderBy: order_ASC) {
      id
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
    }
  }
`

// We then can use the graphql container to pass the query results returned by getEntriesQuery
// to a component as a prop (and update them as the results change)
export const TimelineContentWithData = graphql(getEntriesQuery)(TimelineContent);

const SectionNoOverflow = styled.section`
  background-color: #eeeeee;
  overflow: hidden;
`
