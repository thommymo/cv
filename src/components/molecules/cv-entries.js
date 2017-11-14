import React from 'react'
import styled from 'styled-components'
import { primary, blue, green, violet, primaryFontColor } from '../../utils/colors'
import { media } from '../../utils/breakpoints'
import { P, H1, H3, H4, H4Capitals } from '../atoms/typography'
import { TextLink } from '../atoms/buttons'
import { CSSTransition } from 'react-transition-group'
import { timeoutTransition } from '../../utils/constants'

//TODO: Add PropTypes
//TODO: Check Frontend Performance: I think this is a bit slow...

const Content = styled.div`
  padding: 44px 20px 44px 20px;
  margin-left:3px;
  margin-right:3px;
  border-top: solid; border-top-width: 10px; border-top-color: ${primary};
  border-bottom: solid; border-bottom-width: 10px; border-bottom-color: ${primary};
  ${props => props.left ? `border-left: solid; border-left-width: 10px; border-left-color: ${blue}; margin-right:0px;` : ''};
  ${props => props.right ? `border-right: solid; border-right-width: 10px; border-right-color: ${blue}; margin-left:0px; text-align:right; ` : ''};
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
            <RotateHeaderLeft>
              <H3>{titleleft}</H3>
            </RotateHeaderLeft>
          </HeaderLeft>
          <HeaderRight>
            <RotateHeaderRight>
              <H3>{titleright}</H3>
            </RotateHeaderRight>
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

  & > div > h3 {
    text-transform: uppercase;
    border-bottom: 3px solid ${blue};
    color:${blue};
    display: inline;
    font-size:1.1em;
    font-weight:400;
  }
`
const HeaderLeft = Header.extend`
  text-align: left;
  & > div > h3 {
    border-left: 5px solid transparent;
  }
`
const HeaderRight = Header.extend`
  text-align: right;

  & > div > h3 {
    border-right: 5px solid transparent;
  }
`
const RotateHeaderRight = styled.div`
  display:flex;
  align-items:flex-start;
  justify-content: flex-end;
  width: 150px;
  height: 50px;
  margin-top: -108px;
  transform: rotate(45deg);
  margin-right: -55px;
  vertical-align: bottom;
`
const RotateHeaderLeft = styled.div`
  display:flex;
  align-items:flex-start;
  justify-content: flex-start;
  width: 150px;
  height: 50px;
  margin-top: -108px;
  transform: rotate(-45deg);
  margin-left: -55px;
  vertical-align: bottom;
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
            {
              showmore &&
              <CVEntryMoreButton to={`/id/${id}/`}>
                <Title left={left} right={right}>{title}</Title>
              </CVEntryMoreButton>
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
  margin-bottom: -0.4em;
  display: inline;
  ${props => props.left ? `border-bottom: solid 3px ${blue}; border-left: solid 4px transparent;` : ''};
  ${props => props.right ? `border-bottom: solid 3px ${blue}; border-right: solid 4px transparent;` : ''};
  border-left
`
const Organization = styled.div`
  display: flex;
  ${props => props.right ? 'justify-content: flex-end;': ''};
  padding-left: 5px;
  padding-right: 5px;
  font-size: 0.8em;
  ${media.desktop`margin-top: -20px; margin-bottom: -1.3em`}
  ${media.tablet`margin-top: -17px; margin-bottom: -1.2em`}
  ${media.phone`margin-top: -14px; margin-bottom: -1.1em`}
`
const Excerpt = styled.div`
  display: flex;
  ${props => props.right ? 'justify-content: flex-end;': ''};
  padding-left: 1px;
  padding-right: 1px;
  & > p > a {
    color:${blue};
  }
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
  background=blue
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
  color:${primary};
`

const StyledTimeLine = styled.div`
  position: relative;
  ${props => (props.left || props.bothleft) && !props.rightposition ? `background: linear-gradient(90deg, ${green} -50%,${blue} 100%);`: ''};
  ${props => (props.right || props.bothright) && props.rightposition  ? `background: linear-gradient(270deg, ${violet} -50%,${blue} 100%);` : ''};
  ${props => !props.rightposition ? `box-shadow: 3px 0 0 0 ${blue}` : ''};
  ${props => props.rightposition ? `box-shadow: -3px 0 0 0 ${blue}` : ''};
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



const GhostbuttonWhite = TextLink.extend`
  & > h3 {
    color:${primaryFontColor};
  }
`
