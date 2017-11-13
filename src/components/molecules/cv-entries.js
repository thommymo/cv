import React from 'react'
import styled from 'styled-components'
import { white, primary } from '../../utils/colors'
import { media } from '../../utils/breakpoints'
import { P, H1, H3, H4, H4Capitals } from '../atoms/typography'
import { Ghostbutton } from '../atoms/buttons'
import { CSSTransition } from 'react-transition-group'
import { timeoutTransition } from '../../utils/constants'

//TODO: Add PropTypes
//TODO: Check Frontend Performance: I think this is a bit slow...

const Content = styled.div`
  padding: 44px 20px 44px 20px;
  margin-left:3px;
  margin-right:3px;
  color: ${white};
  border-top: solid; border-top-width: 10px; border-top-color: ${primary};
  border-bottom: solid; border-bottom-width: 10px; border-bottom-color: ${primary};
  ${props => props.left ? `border-left: solid; border-left-width: 10px; border-left-color: ${white}; margin-right:0px;` : ''};
  ${props => props.right ? `border-right: solid; border-right-width: 10px; border-right-color: ${white}; margin-left:0px; text-align:right; ` : ''};
  flex:1;
`
export const CVEntriesHeader = ({
  titleleft = "",
  titleright = "",
}) => (
  <div>
    <HeaderTitle>
      <H1>Lebenslauf</H1>
    </HeaderTitle>
    <EntryItem>
      <TimeLine/>
      <HeaderContent>
        <SectionFlex>
          <HeaderLeft>
            <H3>{titleleft}</H3>
          </HeaderLeft>
          <HeaderRight>
            <H3>{titleright}</H3>
          </HeaderRight>
        </SectionFlex>
      </HeaderContent>
      <TimeLine rightposition/>
    </EntryItem>
  </div>
)

const HeaderTitle = styled.div`
  text-align: center;
  margin-top: 7em;
  margin-bottom: 12em;
`
const SectionFlex = styled.div`
  display: flex;
  justify-content: space-between;
`
const Header = styled.div`
  color:${white};
  & > h3 {
    margin-top: -34px;
    text-transform: uppercase;
    margin-left: -23px;
    margin-right: -23px;
    padding-left: 5px;
    padding-right: 5px;
    border: 3px solid ${white};
  }
`
const HeaderLeft = Header.extend`
  text-align: left;
`
const HeaderRight = Header.extend`
  text-align: right;
`
const HeaderContent = Content.extend`
  padding-top:0px;
  padding-bottom:0px;
  text-align: center;
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
  let colorRGBA = "rgba(175, 9, 131, 0.61)"
  if(moreinfocventry){
    const color = JSON.parse(moreinfocventry.background)
    colorRGBA = `rgba(${color.r},${color.g},${color.b},${color.a})`
  }

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
          background={colorRGBA}
        />
        <Content
          left={left}
          right={right}
        >
          <article>
            <Organization right={right}>
              <H4Capitals>{organization}</H4Capitals>
            </Organization>
            <Title>{title}</Title>
            <Excerpt right={right}>
              <P>{excerpt}</P>
            </Excerpt>
            {
                showmore &&
                //TODO: Here the slug should be used. For now I only use the id, to implement the detail view.
              <CVEntryMoreButton to={`/id/${id}/`}>Mehr &#8594;</CVEntryMoreButton>
            }
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
          background={colorRGBA}
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
  ${media.desktop`margin-top: -0.5em; margin-bottom: -0.4em;`}
  ${media.tablet`margin-top: -0.5em; margin-bottom: -0.2em;`}
  ${media.phone`margin-top: -0.5em; padding-bottom: 0em;`}
`
const Organization = styled.div`
  display: flex;
  ${props => props.right ? 'justify-content: flex-end;': ''};
  padding-left:1px;
  padding-right:1px;
  font-size: 0.8em;
  ${media.desktop`margin-top: -20px;`}
  ${media.tablet`margin-top: -17px;`}
  ${media.phone`margin-top: -14px;`}
`
const Excerpt = styled.div`
  display: flex;
  ${props => props.right ? 'justify-content: flex-end;': ''};
  padding-left:1px;
  padding-right:1px;
`



/*
Containers
*/

const EntryItem = styled.div`
  display: flex;
  ${media.desktop`margin-left:-51px;margin-right:-51px;`}
  ${media.tablet`margin-left:-51px;margin-right:-51px;`}
  ${media.phone`margin-left:-6px;margin-right:-6px;`}
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
  background=white
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
    background={background}
  >
    <StyledTimeSpan show={show} rightposition={rightposition}>
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
  </StyledTimeLine>
);

// Styling for Timespan

const StyledTimeSpan = H4.extend`
  display:flex;
  justify-content: center;
  flex-direction: column;
  ${media.desktop`line-height: 1em;`}
  ${media.tablet`line-height: 1em;`}
  ${media.phone`display: none;`}
  ${props => !props.show ? 'display:none' : ''};
  ${props => props.rightposition ? 'text-align: left;margin-left:0px' : 'text-align: right;'};
  padding-top: 9px;
  height:123px;
  color: ${white};
`

const StyledTimeLine = styled.div`
  position: relative;
  ${props => (props.left || props.bothleft) && !props.rightposition ? `background:${props.background};`: ''};
  ${props => (props.right || props.bothright) && props.rightposition  ? `background:${props.background};` : ''};
  ${props => !props.rightposition ? `box-shadow: 3px 0 0 0 ${white}` : ''};
  ${props => props.rightposition ? `box-shadow: -3px 0 0 0 ${white}` : ''};
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
      border-top: 55px solid ${primary};
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
      border-bottom: 55px solid ${primary};
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
      border-top: 55px solid ${primary};
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
      border-bottom: 55px solid ${primary};
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: 10000;
      }` : ''};
`

const CVEntryMoreButton = (props) => (
  <GhostbuttonWhite {...props}>
    {props.children}
  </GhostbuttonWhite>
)

const GhostbuttonWhite = Ghostbutton.extend`
  color:${white};
  border-color:${white};
  text-transform: uppercase;
  font-size:0.8em;
  font-weight:400;
`
