import React from 'react'
import styled from 'styled-components'
import { media } from '../../utils/breakpoints'
import { P, H1, H3, H4, H4Capitals } from '../atoms/typography'
import { TextLink } from '../atoms/buttons'
import { CSSTransition } from 'react-transition-group'
import { timeoutTransition } from '../../utils/constants'
import { HeaderTitle } from '../../components/atoms/containers'

//TODO: Add PropTypes
//TODO: Check Frontend Performance: I think this is a bit slow...

const Content = styled.div`
  padding: 44px 20px 44px 20px;
  margin-left:3px;
  margin-right:3px;
  border-top: solid; border-top-width: 10px; border-top-color: ${props => props.theme.colors.primary};
  border-bottom: solid; border-bottom-width: 10px; border-bottom-color: ${props => props.theme.colors.primary};
  ${props => props.left ? `border-left: solid; border-left-width: 10px; border-left-color: ${props.theme.colors.blue}; margin-right:0px;` : ''};
  ${props => props.right ? `border-right: solid; border-right-width: 10px; border-right-color: ${props.theme.colors.blue}; margin-left:0px; text-align:right; ` : ''};
  flex:1;
`

//CVEntries is a component which shows an entry in my CV and places the line on the left or right side of it.

export const CVEntries = ({data : {
  id="",
  showmore = false,
  startDate = "",
  endDate = "",
  right=false,
  left=false,
  bothleft=false,
  bothright=false,
  title="",
  slug="",
  organization="",
  excerpt="",
  addTopLeftTriangle=false,
  addBottomLeftTriangle=false,
  addTopRightTriangle=false,
  addBottomRightTriangle=false,
  moreinfocventry={}
}}) => {
  const startDateDate = new Date(startDate)
  const endDateDate = new Date(endDate)
  const options = { year: 'numeric'}
  const formattedStartDate = startDate ? startDateDate.toLocaleDateString('de-DE', options) : ""
  const formattedEndDate = endDate ? endDateDate.toLocaleDateString('de-DE', options) : ""


  return (
    <CSSTransition
      in
      appear={true}
      timeout={timeoutTransition}
      classNames="FadeIn"
      unmountOnExit={true}
    >
      <EntryItem >
        <TimeLine
          show={left}
          right={right}
          left={left}
          bothright={bothright}
          bothleft={bothleft}
          startDate={formattedStartDate}
          endDate={formattedEndDate}
          rightposition={false}
          addTopLeftTriangle={addTopLeftTriangle}
          addTopRightTriangle={addTopRightTriangle}
          addBottomLeftTriangle={addBottomLeftTriangle}
          addBottomRightTriangle={addBottomRightTriangle}
        />
        <Content
          left={left}
          right={right}
        >
          <article>
            <Organization right={right}>
              <H4Capitals>{organization}</H4Capitals>
            </Organization>
            {
              showmore &&
              <Title left={left} right={right}><CVEntryTextLink to={`/id/${id}/`}>{title}  &rarr;</CVEntryTextLink></Title>
            }
            {
              !showmore &&
              <Title left={left} right={right}>{title}</Title>
            }
            <Excerpt right={right}>
              <P>{excerpt}</P>
            </Excerpt>
          </article>
        </Content>
        <TimeLine
          rightposition={true}
          show={right}
          right={right}
          left={left}
          bothright={bothright}
          bothleft={bothleft}
          startDate={formattedStartDate}
          endDate={formattedEndDate}
          addTopLeftTriangle={addTopLeftTriangle}
          addTopRightTriangle={addTopRightTriangle}
          addBottomLeftTriangle={addBottomLeftTriangle}
          addBottomRightTriangle={addBottomRightTriangle}
        />
      </EntryItem>
    </CSSTransition>
    )
}

// Styling for Timespan component elements

/*
Typography
*/

const Title = H3.extend`
  & a {
    display:inline-block;
    ${props => props.right ?
      `background-image: -webkit-linear-gradient(165deg, ${props.theme.colors.violet} 20%,${props.theme.colors.blue} 120%); background-image: linear-gradient(165deg, ${props.theme.colors.violet} 20%,${props.theme.colors.blue} 120%);`:
      `background-image: -webkit-linear-gradient(165deg, ${props.theme.colors.blue} 20%,${props.theme.colors.green} 120%); background-image: linear-gradient(165deg, ${props.theme.colors.blue} 20%,${props.theme.colors.green} 120%);`}; /* For Chrome and Safari */
  }
`
const Organization = styled.div`
  display: flex;
  ${props => props.right ? 'justify-content: flex-end;': ''};
  padding-left: 1px;
  padding-right: 1px;
  font-size: 0.8em;
  ${media.desktop`margin-top: -20px; margin-bottom: -3.3em`}
  ${media.tablet`margin-top: -17px; margin-bottom: -2.7em`}
  ${media.phone`margin-top: -14px; margin-bottom: -2.4em`}
`
const Excerpt = styled.div`
  display: flex;
  ${props => props.right ? 'justify-content: flex-end;': ''};
  padding-left: 1px;
  padding-right: 1px;
  font-size: 0.75em;
  line-height: 0.75em;
  ${media.desktop`margin-top: -3.7em;`}
  ${media.tablet`margin-top: -2.8em;`}
  ${media.phone`margin-top: -2.3em;`}
`

/*
Containers
*/

const EntryItem = styled.div`
  display: flex;
  ${media.desktop`margin-left: -51px; margin-right: -51px;`}
  ${media.tablet`margin-left: -51px; margin-right: -51px;`}
  ${media.phone`margin-left: -6px; margin-right: -6px;`}
`

// Timespan Component for displaying the timespan left or right of the content of a CV element

const TimeLine = ({
  rightposition = false,
  show = false,
  startDate = false,
  endDate = false,
  right=false,
  left=false,
  bothleft=false,
  bothright=false,
  addTopLeftTriangle=false,
  addBottomLeftTriangle=false,
  addBottomRightTriangle=false,
  addTopRightTriangle=false,
}) => (
  <StyledTimeLine
    bothright={bothright}
    bothleft={bothleft}
    rightposition={rightposition}
    left={left}
    right={right}
    addTopLeftTriangle={addTopLeftTriangle}
    addBottomLeftTriangle={addBottomLeftTriangle}
    addBottomRightTriangle={addBottomRightTriangle}
    addTopRightTriangle={addTopRightTriangle}
  >
    <StyledTimeSpan show={show} rightposition={rightposition}>
      { endDate &&
        <span>{endDate}</span>
      }
      { startDate && endDate &&
        <span> – </span>
      }
      { startDate &&
        <span>{startDate}</span>
      }
    </StyledTimeSpan>
  </StyledTimeLine>
);

// Styling for Timespan

const StyledTimeSpan = H4.extend`
  line-height: 1em;
  ${media.desktop`display: flex; justify-content: center; flex-direction: column; height: 123px; padding-top: 9px; `};
  ${media.tablet`display: flex; justify-content: center; flex-direction: column; height: 123px; padding-top: 9px;`};
  ${media.phone`transform: rotate(270deg); display: flex; flex-direction: row-reverse; margin-top: 75px;`};
  ${props => !props.show ? 'display: none !important;' : ''};
  ${props => props.rightposition ? 'text-align: left; margin-left: -12px' : 'text-align: right; margin-right: -12px'};
  text-align: center;
  color:${props => props.theme.colors.primary};
`

const StyledTimeLine = styled.div`
  position: relative;
  ${props => (props.left || props.bothleft) && !props.rightposition ? `background: linear-gradient(90deg, ${props.theme.colors.green} -50%,${props.theme.colors.blue} 100%);`: ''};
  ${props => (props.right || props.bothright) && props.rightposition  ? `background: linear-gradient(270deg, ${props.theme.colors.violet} -50%,${props.theme.colors.blue} 100%);` : ''};
  ${props => !props.rightposition ? `box-shadow: 3px 0 0 0 ${props.theme.colors.blue}` : ''};
  ${props => props.rightposition ? `box-shadow: -3px 0 0 0 ${props.theme.colors.blue}` : ''};
  ${media.desktop`width:35px;`};
  ${media.desktop`min-width:35px;`};
  ${media.tablet`width:35px;`};
  ${media.tablet`min-width:35px;`};
  ${media.phone`width:5px;overflow:hidden;`};
  ${media.phone`min-width:5px;`};

  padding: 0 10px 0 10px;
  z-index: 20;
  ${props => props.addTopRightTriangle && props.rightposition ? `
    &::after {
      content:'';
      width: 0;
      height: 0;
      line-height: 0;
      border-left: 55px solid transparent;
      border-top: 55px solid ${props.theme.colors.primary};
      top: 0;
      right: 0;
      position: absolute;
      z-index: 10000;
      }` : ''};
  ${props => props.addBottomLeftTriangle && !props.rightposition ? `
    &::after {
      content:'';
      width: 0;
      height: 0;
      line-height: 0;
      border-right: 55px solid transparent;
      border-bottom: 55px solid ${props.theme.colors.primary};
      bottom: 0;
      left: 0;
      position: absolute;
      z-index: 10000;
      }` : ''};
  ${props => props.addTopLeftTriangle && !props.rightposition ? `
    &::before {
      content:'';
      width: 0;
      height: 0;
      line-height: 0;
      border-right: 55px solid transparent;
      border-top: 55px solid ${props.theme.colors.primary};
      top: 0;
      left: 0;
      position: absolute;
      z-index: 10000;
      }` : ''};
  ${props => props.addBottomRightTriangle && props.rightposition ? `
    &::before {
      content: '';
      width: 0;
      height: 0;
      line-height: 0;
      border-left: 55px solid transparent;
      border-bottom: 55px solid ${props.theme.colors.primary};
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: 10000;
      }` : ''};
`

const CVEntryTextLink = (props) => (
  <GhostbuttonWhite {...props}>
    {props.children}
  </GhostbuttonWhite>
)


const GhostbuttonWhite = TextLink.extend`

`
