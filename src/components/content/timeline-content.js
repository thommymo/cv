import React, { Component } from 'react';
import { Timeline, TimelineHeader } from '../../components/timeline'
import styled from 'styled-components'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


// here we create a query operation
const getEntriesQuery = gql`
  query getEntriesQuery {
    allCVEntrieses(orderBy: startDate_DESC) {
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

class TimelineContent extends Component {

  render() {
    console.log(this.props.data.allCVEntrieses)

    console.log(this.props.data.loading)


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
            />
          ))
        }

        <Timeline
          bothleft
          right
          addBottomBorder
          startDate="2015"
          endDate="2017"
          title="Fullstack Web Developer"
          school="Udacity"
          learned="Learning React, Node.js"
          showmore
        />
        <Timeline
          addTopBorder
          left
          bothleft
          startDate="2015"
          endDate="2017"
          title="Projektleiter Web"
          company="Luzerner Kantonsspital"
          responsability="Responsible for Relaunching luks.ch"
          showmore
        />
        <Timeline
          left
          bothleft
          startDate="2011"
          endDate="2015"
          title="Product Owner"
          company="Schweizer Radio und Fernsehen"
          responsability="Responsible as Product Owner for srf.ch"
          showmore
        />
        <Timeline
          left
          addBottomBorder
          bothleft
          startDate="2010"
          endDate="2011"
          title="Projektleiter Web"
          company="Unic AG"
          responsability="Responsible for customor web projects"
          showmore
        />
        <Timeline
          right
          addTopBorder
          bothleft
          startDate="2003"
          endDate="2010"
          title="Master of Science UZH"
          school="Universität Zürich"
          learned="Media Science, Cognitive Psychology, Informatics"
          showmore
        />
        <Timeline
          left
          bothright
          startDate="2007"
          endDate="2010"
          title="Web Developer und Wissenschaftlicher Mitarbeiter"
          school="Pädagogische Hochschule Zentralschweiz"
          responsability="Responsible for customor web projects"
          showmore
        />
        <Timeline
          left
          bothright
          startDate="2006"
          endDate="2008"
          title="Web Developer und Mitinhaber"
          company="Agentur Sign, Luzern"
          responsability="Responsible for customor web projects"
          showmore
        />
        <Timeline
          left
          bothright
          startDate="2002"
          endDate="2006"
          title="Web Developer, selbständig erwerbend"
          company="Netzwerk Neuweg, Luzern"
          responsability="Responsible for customor web projects"
          showmore
        />
        <Timeline
          right
          bothleft
          startDate="2002"
          endDate="2003"
          title="Multimedia Producer SAE"
          school="School of Audio Engenieering (SAE) Zürich"
          learned="Multimedia"
        />
        <Timeline
          left
          bothright
          addBottomBorder
          startDate="2000"
          endDate="2000"
          title="Fahrradkurier"
          company="Velokurier, Luzern"
          responsability="Responsible for customor web projects"
          showmore
        />
        <Timeline
          right
          addTopBorder
          bothright
          startDate="1995"
          endDate="2002"
          title="Matura Typus C"
          school="Kantonsschule Rothen (LU)"
          learned="Mainly Mathematics and Science"
        />
        <Timeline
          right
          startDate="1988"
          endDate="1995"
          title="Kindergarten und Primarschule"
          school="Primarschule Luzern"
        />

      </SectionNoOverflow>
    )
  }
}

// We then can use the graphql container to pass the query results returned by MY_QUERY
// to a component as a prop (and update them as the results change)
export const TimelineContentWithData = graphql(getEntriesQuery)(TimelineContent);

const SectionNoOverflow = styled.section`
  background-color: #eeeeee;
  overflow: hidden;
`
