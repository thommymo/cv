import React, { Component } from 'react';
import { CVEntries, CVEntriesHeader } from '../../components/cv-entries-view'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PageShell from '../../components/page-shell'
import { Loading } from '../../components/styled-atoms'
import { CSSTransition} from 'react-transition-group'
import { timeoutTransition } from '../../utils/constants'

// TODO: Instead of creating my own HOC, it might be usefull to use someting like recompose. See:
// https://dev-blog.apollodata.com/simplify-your-react-components-with-apollo-and-recompose-8b9e302dea51

class TimelineContent extends Component {
  render() {
    //TODO: This does not load/show data if it is not the first page loaded
    //TODO: Only render once: This is rendered 4 Times now (might be because of the CSSTransition. This does not make any sense)
    return(
      <PageShell>
        <CVEntriesHeader titleleft="Work" titleright="Studies"/>
        { this.props.data.loading &&
          <div><Loading /></div>
        }
        { this.props.data.allCVEntrieses &&
          this.props.data.allCVEntrieses.map((entry) => (
            <CSSTransition
              in
              appear={true}
              timeout={timeoutTransition}
              classNames="SlideIn"
              unmountOnExit={true}
            >
              <CVEntries
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
                moreinfocventry = {entry.moreinfocventry}
              />
            </CSSTransition>
          ))
        }
      </PageShell>
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
      moreinfocventry {
        background
      }
    }
  }
`

// We then can use the graphql container to pass the query results returned by getEntriesQuery
// to a component as a prop (and update them as the results change)
export const TimelineContentWithData = graphql(getEntriesQuery)(TimelineContent);
