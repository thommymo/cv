import React from 'react'
import styled from 'styled-components'
import { white } from '../utils/colors'
import { media } from '../utils/breakpoints'
import { P, H2, H3, H4, Ghostbutton } from '../components/styled-atoms'

//TODO: Move Icon into CSS (Now it is loaded x times which doesn't make sense)
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
      <img
        alt="Starting Point"
        src="data:image/svg+xml;charset=utf-8,%3Csvg%20fill%3D%22%23FFFFFF%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0A%20%20%20%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%0D%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0D%0A%3C%2Fsvg%3E"
      />
    </HeaderLeft>
    <HeaderRight>
      <H2>{titleright}</H2>
      <img
        alt="Starting Point"
        src="data:image/svg+xml;charset=utf-8,%3Csvg%20fill%3D%22%23FFFFFF%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0A%20%20%20%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%0D%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0D%0A%3C%2Fsvg%3E"
      />
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
  ${media.desktop`padding-right:61px;top:73px;`}
  ${media.tablet`padding-right:61px;top:85px;`}
  ${media.phone`padding-right:16px;top:105px;`}
  text-align: right;
`

//Timeline is a component which shows an entry in my CV and places the line on the left or right side of it.

export const CVEntries = ({
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
  slug=""
}) => (
  <Lap right={right}>
    <TimeSpan
      show={left}
      right={right}
      left={left}
      bothright={bothright}
      bothleft={bothleft}
      startDate={startDate}
      endDate={endDate}
    />
    <Content
      left={left}
      right={right}
      addTopBorder={addTopBorder}
      addBottomBorder={addBottomBorder}
    >
      <StyledTitle>{title}</StyledTitle>
      <AdditionalInfo
        right={right}
      >
        { company &&
          <AdditionalInfoItem right={right}>
            <Icon alt="company"
              src="data:image/svg+xml;charset=utf-8,%3Csvg%20fill%3D%22%23FFFFFF%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0D%0A%20%20%20%20%3Cpath%20d%3D%22M12%207V3H2v18h20V7H12zM6%2019H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4%2012H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10%2012h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0%204h-2v2h2v-2z%22%2F%3E%0D%0A%3C%2Fsvg%3E"
            />
            <AdditionalInfoP>{company}</AdditionalInfoP>
          </AdditionalInfoItem>
        }
        { school &&
          <AdditionalInfoItem right={right}>
            <Icon alt="school" src="data:image/svg+xml;charset=utf-8,%3Csvg%20fill%3D%22%23FFFFFF%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0D%0A%20%20%20%20%3Cpath%20d%3D%22M4%2010v7h3v-7H4zm6%200v7h3v-7h-3zM2%2022h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2%206v2h19V6l-9.5-5z%22%2F%3E%0D%0A%3C%2Fsvg%3E"/>
            <AdditionalInfoP>{school}</AdditionalInfoP>
          </AdditionalInfoItem>
        }
        { responsability &&
          <SecondaryAdditionalInfoItem right={right}>
            <Icon alt="responsability"
              src="data:image/svg+xml;charset=utf-8,%3Csvg%20fill%3D%22%23FFFFFF%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0D%0A%20%20%20%20%3Cpath%20d%3D%22M20%206h-4V4c0-1.11-.89-2-2-2h-4c-1.11%200-2%20.89-2%202v2H4c-1.11%200-1.99.89-1.99%202L2%2019c0%201.11.89%202%202%202h16c1.11%200%202-.89%202-2V8c0-1.11-.89-2-2-2zm-6%200h-4V4h4v2z%22%2F%3E%0D%0A%3C%2Fsvg%3E"
            />
            <AdditionalInfoP>{responsability}</AdditionalInfoP>
          </SecondaryAdditionalInfoItem>
        }
        { learned &&
          <SecondaryAdditionalInfoItem right={right}>
            <Icon alt="learned"
              src="data:image/svg+xml;charset=utf-8,%3Csvg%20fill%3D%22%23FFFFFF%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0D%0A%20%20%20%20%3Cpath%20d%3D%22M12%2011.55C9.64%209.35%206.48%208%203%208v11c3.48%200%206.64%201.35%209%203.55%202.36-2.19%205.52-3.55%209-3.55V8c-3.48%200-6.64%201.35-9%203.55zM12%208c1.66%200%203-1.34%203-3s-1.34-3-3-3-3%201.34-3%203%201.34%203%203%203z%22%2F%3E%0D%0A%3C%2Fsvg%3E"
            />
            <AdditionalInfoP>{learned}</AdditionalInfoP>
          </SecondaryAdditionalInfoItem>
        }
      </AdditionalInfo>
      { showmore &&
        //TODO: Here the slug should be used. For now I only use the id, to implement the detail view.
        <CVEntryMoreButton to={`/${id}/`}>More &#8594;</CVEntryMoreButton>
      }
    </Content>
    <TimeSpan
      rightposition={true}
      show={right}
      right={right}
      left={left}
      bothright={bothright}
      bothleft={bothleft}
      startDate={startDate}
      endDate={endDate}
    />
  </Lap>
)

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
  ${media.desktop`margin-left:-61px;margin-right:0px;`}
  ${media.tablet`margin-left:-61px;margin-right:0px;`}
  ${media.phone`margin-left:-16px;margin-right:0px;`}
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
      <Bulletleft
        src="data:image/svg+xml;charset=utf-8,%3Csvg%20fill%3D%22%23FFFFFF%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0A%20%20%20%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%0D%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0D%0A%3C%2Fsvg%3E"
      />
    }
    { right && show &&
      <Bulletright
        src="data:image/svg+xml;charset=utf-8,%3Csvg%20fill%3D%22%23FFFFFF%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0A%20%20%20%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%0D%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0D%0A%3C%2Fsvg%3E"
      />
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
