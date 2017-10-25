import React, { Component } from 'react'
import styled from 'styled-components'
import { primaryDark, secondaryDark, white } from '../utils/colors'
import { media } from '../utils/breakpoints'
import { StyledH4, StyledP, StyledH3} from '../components/styled-atoms'

class Timeline extends Component {

  render() {
    const Container = styled.div`
      display: flex;
      background-color: ${primaryDark};
    `
    const Content = styled.div`
      padding: 0 10px 0 20px;
      color: ${white};
      min-height: 50px;
    `
    const DivSchool = styled.div`
      padding: 1em;
      color: ${white};
      min-height: 50px;
    `
    const Year = styled.div`
      position: relative;
      border-right: solid;
      border-right-width: 6px;
      border-right-color: ${white};
      ${media.desktop`width:50px;`};
      ${media.desktop`min-width:50px;`};
      ${media.tablet`width:50px;`};
      ${media.tablet`min-width:50px;`};
      ${media.phone`width:50px;`};
      ${media.phone`min-width:50px;`};
      color: ${white};
      padding: 0 10px 0 10px;
    `
    const DivSchoolBorder = styled.div`
      background-color: ${secondaryDark};
      border-left: solid;
      border-left-width: 6px;
      border-left-color: ${white};
      width: 4%;
    `
    const Object = styled.object`
      position: absolute;
      left:61px;
      top:35px;
    `
    const P = styled.p`
      font-size:1.1em;
      font-weight:600;
    `
    const Work = styled.div`
      display:flex;
      background-color: ${primaryDark};
      width: ${this.props.width}%;
    `
    const School = styled.div`
      background-color: ${secondaryDark};
      width: ${100-this.props.width}%;
    `
    const StyledH4Year = StyledH4.extend`
      text-align: center;
      ${media.desktop`line-height: 1em;`}
      ${media.tablet`line-height: 1em;`}
      ${media.phone`line-height: 1em;`}
    `
    const StyledH3FixTopMargin = StyledH3.extend`
      ${media.desktop`margin-top: 28px;`}
      ${media.tablet`margin-top: 31px;`}
      ${media.phone`margin-top: 34px;`}
    `
    return (
      <Container>
        <Work>
          <Year>
            <StyledH4Year>2017<br/>&#8599;<br/>2015</StyledH4Year>
            <Object data="/assets/icons/ic_brightness_1_white_24px.svg" type="image/svg+xml"/>
          </Year>
          <Content>
            <StyledH3FixTopMargin>Product Owner bei SRF</StyledH3FixTopMargin>
            <StyledP>Rolle: Product Owner für srf.ch</StyledP>
            <StyledP>Awards: Master «Best of Swiss web»</StyledP>
            <StyledP>More &#8599;</StyledP>
          </Content>
        </Work>
        <School>
          <DivSchool><p>test</p></DivSchool>
          <DivSchoolBorder></DivSchoolBorder>
        </School>
      </Container>
    )
  }
}



export default Timeline
