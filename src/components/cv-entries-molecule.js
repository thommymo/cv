import React from 'react'
import styled from 'styled-components'
import { white } from '../utils/colors'
import { media } from '../utils/breakpoints'
import { P, H2, H3, H4, Ghostbutton } from '../components/styled-atoms'
import { responsabilityIcon, learnedIcon, schoolIcon, companyIcon, bulletIcon } from '../utils/icons'
import { CSSTransition } from 'react-transition-group'
import { timeoutTransition } from '../utils/constants'

//TODO: Add PropTypes
//TODO: Check Frontend Performance: I think this is a bit slow...

//Timelineheader shows the title for the whole Timeline

export const CVEntriesHeader = ({
  titleleft = "",
  titleright = "",
}) => (
  <SectionFlex>
    <HeaderLeft>
      <H2>{titleleft}</H2>
      <img alt="Starting Point" src={bulletIcon} />
    </HeaderLeft>
    <HeaderRight>
      <H2>{titleright}</H2>
      <img alt="Starting Point" src={bulletIcon} />
    </HeaderRight>
  </SectionFlex>
)

const SectionFlex = styled.section`
  height:140px;
  display:flex;
  align-items:flex-end;
`
const Header = styled.div`
  color:${white};
  width:50%;
`
const HeaderLeft = Header.extend`
  text-align: left;
`
const HeaderRight = Header.extend`
  ${media.desktop`top:73px;`}
  ${media.tablet`top:85px;`}
  ${media.phone`top:105px;`}
  text-align: right;
`

//Timeline is a component which shows an entry in my CV and places the line on the left or right side of it.

export const CVEntries = ({data : {
  id="",
  showmore = false,
  startDate = "",
  endDate = "",
  right=false,
  left=false,
  addTopBorder=false,
  addBottomBorder=false,
  bothleft=false,
  bothright=false,
  company="",
  school="",
  responsability="",
  learned="",
  title="",
  slug="",
}}) => {
  const startDateDate = new Date(startDate)
  const endDateDate = new Date(endDate)
  const options = { year: 'numeric'}
  const formattedStartDate = startDateDate.toLocaleDateString('de-DE', options)
  const formattedEndDate = endDateDate.toLocaleDateString('de-DE', options)

  return (
    <CSSTransition
      in
      appear={true}
      timeout={timeoutTransition}
      classNames="FadeIn"
      unmountOnExit={true}
    >
      <Lap right={right}>
        <TimeSpan
          show={left}
          right={right}
          left={left}
          bothright={bothright}
          bothleft={bothleft}
          startDate={formattedStartDate}
          endDate={formattedEndDate}
        />
        <Content
          left={left}
          right={right}
          addTopBorder={addTopBorder}
          addBottomBorder={addBottomBorder}
        >
          <StyledTitle>{title}</StyledTitle>
          <AdditionalInfo right={right}>
            { company &&
              <AdditionalInfoItem right={right}>
                <Icon alt="company"
                  src={companyIcon}
                />
                <AdditionalInfoP>{company}</AdditionalInfoP>
              </AdditionalInfoItem>
            }
            { school &&
              <AdditionalInfoItem right={right}>
                <Icon alt="school" src={schoolIcon} />
                <AdditionalInfoP>{school}</AdditionalInfoP>
              </AdditionalInfoItem>
            }
            { responsability &&
              <SecondaryAdditionalInfoItem right={right}>
                <Icon alt="responsability" src={responsabilityIcon}/>
                <AdditionalInfoP>{responsability}</AdditionalInfoP>
              </SecondaryAdditionalInfoItem>
            }
            { learned &&
              <SecondaryAdditionalInfoItem right={right}>
                <Icon alt="learned" src={learnedIcon}/>
                <AdditionalInfoP>{learned}</AdditionalInfoP>
              </SecondaryAdditionalInfoItem>
            }
          </AdditionalInfo>
          { showmore &&
            //TODO: Here the slug should be used. For now I only use the id, to implement the detail view.
            <CVEntryMoreButton to={`/id/${id}/`}>More &#8594;</CVEntryMoreButton>
          }
        </Content>
        <TimeSpan
          rightposition={true}
          show={right}
          right={right}
          left={left}
          bothright={bothright}
          bothleft={bothleft}
          startDate={formattedStartDate}
          endDate={formattedEndDate}
        />
      </Lap>
    </CSSTransition>
    )
}

// Styling for Timespan component elements

const Icon = styled.img`
  padding-right: 10px;
`

const AdditionalInfoItem = styled.div`
  opacity: 0.5;
  display: flex;
  ${props => props.right ? 'justify-content: flex-end;': ''};
`
const SecondaryAdditionalInfoItem = AdditionalInfoItem.extend`
  ${media.phone`display:none;`};
`
const AdditionalInfoP = P.extend`
  margin: 5px 0px;
`

const AdditionalInfo = styled.div`
  margin-top:-15px;
  margin-bottom:20px;
`
const Lap = styled.div`
  display: flex;
  width: (100% + 61)px;
  ${media.desktop`margin-left:-61px;margin-right:-61px;`}
  ${media.tablet`margin-left:-61px;margin-right:-61px;`}
  ${media.phone`margin-left:-16px;margin-right:-16px;`}
`
const Content = styled.div`
  padding: 40px 20px 68px 20px;
  color: ${white};
  ${props => props.left ? `border-left: solid; border-left-width: 6px; border-left-color: ${white}; margin-right:30px;` : ''};
  ${props => props.right ? `border-right: solid; border-right-width: 6px; border-right-color: ${white}; margin-left:30px; text-align:right;` : ''};
  ${props => props.addTopBorder ? `border-top: solid; border-top-width: 6px; border-top-color: ${white}; margin-top:-6px;` : ''};
  ${props => props.addBottomBorder ? `border-bottom: solid; border-bottom-width: 6px; border-bottom-color: ${white};` : ''};
  ${props => props.left && props.addTopBorder ? 'border-top-left-radius: 30px;':''};
  ${props => props.left && props.addBottomBorder ? 'border-bottom-left-radius: 30px;':''};
  ${props => props.right && props.addTopBorder ? 'border-top-right-radius: 30px;':''};
  ${props => props.right && props.addBottomBorder ? 'border-bottom-right-radius: 30px;':''};
  flex:1;
`
const StyledTitle = H3.extend`
  ${media.desktop`margin-top: 28px;`}
  ${media.tablet`margin-top: 31px;`}
  ${media.phone`margin-top: 34px;`}
`

// Timespan Component for displaying the timespan left or right of the content of a Timeline element

const TimeSpan = ({
  rightposition = false,
  show = false,
  startDate = false,
  endDate = false,
  right=false,
  left=false,
  bothleft=false,
  bothright=false,
}) => (
  <Year borderright={bothright} borderleft={bothleft} rightposition={rightposition}>
    <StyledTimeSpan show={show}>
      { endDate &&
        <span>{endDate}</span>
      }
      { startDate && endDate &&
        <span>&#8599;</span>
      }
      { startDate &&
        <span>{startDate}</span>
      }
    </StyledTimeSpan>
    { left && show &&
      <Bulletleft src={bulletIcon}/>
    }
    { right && show &&
      <Bulletright src={bulletIcon}/>
    }
  </Year>
);

// Styling for Timespan

const Bulletright = styled.img`
  ${media.desktop`right:61px;`};
  ${media.tablet`right:61px;`};
  ${media.phone`right:17px;`};
  position: absolute;
  top:75px;
`
const Bulletleft = styled.img`
  ${media.desktop`left:61px;`};
  ${media.tablet`left:61px;`};
  ${media.phone`left:16px;`};
  position: absolute;
  top:75px;
`
const StyledTimeSpan = H4.extend`
  height:121px;
  display:flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  ${media.desktop`line-height: 1em;`}
  ${media.tablet`line-height: 1em;`}
  ${media.phone`display: none;`}
  ${props => !props.show ? 'display:none' : ''};
`
const Year = styled.div`
  position: relative;
  ${props => props.borderleft && !props.rightposition ? `box-shadow: 6px 0 0 0 ${white} ` : ''};
  ${props => props.borderright && props.rightposition  ? `box-shadow: -6px 0 0 0 ${white} ` : ''};
  ${media.desktop`width:50px;`};
  ${media.desktop`min-width:50px;`};
  ${media.tablet`width:50px;`};
  ${media.tablet`min-width:50px;`};
  ${media.phone`width:5px;`};
  ${media.phone`min-width:5px;`};
  color: ${white};
  padding: 0 10px 0 10px;
  z-index: 20;
`

const CVEntryMoreButton = (props) => (
  <GhostbuttonWhite {...props}>
    {props.children}
  </GhostbuttonWhite>
)

const GhostbuttonWhite = Ghostbutton.extend`
  color:${white};
  border-color:${white};
`
