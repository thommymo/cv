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
      padding: 0 10px 0 10px;
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
      left:41px;
      top:23px;
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
    return (
      <div>
        <Container>
          <Work>
            <Year><StyledH3>2017</StyledH3><Object data="/assets/icons/ic_brightness_1_white_24px.svg" type="image/svg+xml"/></Year>
            <Content>
              <StyledH3>Product Onwer bei SRF</StyledH3>
              <StyledP>What did I do here?</StyledP>
              <StyledP>Awards</StyledP>
              <StyledP>More</StyledP>
            </Content>
          </Work>
          <School>
            <DivSchool><p>test</p></DivSchool>
            <DivSchoolBorder></DivSchoolBorder>
          </School>
        </Container>
      </div>
    )
  }
}



export default Timeline
