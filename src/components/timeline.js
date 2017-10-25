import React, { Component } from 'react'
import styled from 'styled-components'
import { primaryDark, secondaryDark, white } from '../utils/colors'
import { media } from '../utils/breakpoints'
import { StyledH4, StyledP, StyledH3} from '../components/styled-atoms'

class Timeline extends Component {
  render() {
    return (
      <Container>
        <Work>
          <Year left={this.props.bothleft}>
            <StyledH4Year show={this.props.left}>2017<br/>&#8599;<br/>2015</StyledH4Year>
            <Bullet show={this.props.left} left data="/assets/icons/ic_brightness_1_white_24px.svg" type="image/svg+xml"/>
          </Year>
          <Content
            left={this.props.left}
            right={this.props.right}
            top={this.props.top}
            bottom={this.props.bottom}
            borderTopLeftRadius={this.props.borderTopLeftRadius}
            borderTopRightRadius={this.props.borderTopRightRadius}
            borderBottomLeftRadius={this.props.borderBottomLeftRadius}
            borderBottomRightRadius={this.props.borderBottomRightRadius}
          >
            <StyledH3FixTopMargin>Product Owner bei SRF</StyledH3FixTopMargin>
            <StyledP>Rolle: Product Owner für srf.ch</StyledP>
            <StyledP>Awards: Master «Best of Swiss web»</StyledP>
            <StyledP>More &#8599;</StyledP>
          </Content>
        </Work>
        <Year right={this.props.bothright}>
          <StyledH4Year show={this.props.right}>2017<br/>&#8599;<br/>2015</StyledH4Year>
          <Bullet show={this.props.right} right data="/assets/icons/ic_brightness_1_white_24px.svg" type="image/svg+xml"/>
        </Year>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  background-color: ${primaryDark};
  width: 100%;
`
const Content = styled.div`
  padding: 0 20px 0 20px;
  color: ${white};
  min-height: 50px;
  ${props => props.left ? 'border-left: solid; border-left-width: 6px; border-left-color: ${white}; margin-right:30px;' : ''};
  ${props => props.right ? 'border-right: solid; border-right-width: 6px; border-right-color: ${white}; margin-left:30px; text-align:right;' : ''};
  ${props => props.top ? 'border-top: solid; border-top-width: 6px; border-top-color: ${white}; margin-top:-6px;' : ''};
  ${props => props.bottom ? 'border-bottom: solid; border-bottom-width: 6px; border-bottom-color: ${white}; margin-top:-6px;' : ''};
  ${props => props.borderTopLeftRadius ? 'border-top-left-radius: 30px;':''};
  ${props => props.borderTopRightRadius ? 'border-top-right-radius: 30px;':''};
  ${props => props.borderBottomLeftRadius ? 'border-bottom-left-radius: 30px;':''};
  ${props => props.borderBottomRightRadius ? 'border-bottom-right-radius: 30px;':''};
  flex:1;
`
const DivSchool = styled.div`
  padding: 1em;
  color: ${white};
  min-height: 50px;
`
const Year = styled.div`
  position: relative;
  ${props => props.left ? 'box-shadow: 6px 0 0 0 #FFF; ' : ''};
  ${props => props.right ? 'box-shadow: -6px 0 0 0 #FFF; ' : ''};
  ${media.desktop`width:50px;`};
  ${media.desktop`min-width:50px;`};
  ${media.tablet`width:50px;`};
  ${media.tablet`min-width:50px;`};
  ${media.phone`width:50px;`};
  ${media.phone`min-width:50px;`};
  color: ${white};
  padding: 0 10px 0 10px;
  z-index: 20;
`
const Button = styled.button`
	/* Adapt the colours based on primary prop */
	background: ${props => props.primary ? 'palevioletred' : 'white'};
	color: ${props => props.primary ? 'white' : 'palevioletred'};

	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;

const Bullet = styled.object`
  ${props => props.left ? 'left:61px;':'right:61px'};
  position: absolute;
  top:35px;
  ${props => !props.show ? 'display:none' : ''};
`
const P = styled.p`
  font-size:1.1em;
  font-weight:600;
`
const Work = styled.div`
  display:flex;
  background-color: ${primaryDark};
  flex:1;
`
const StyledH4Year = StyledH4.extend`
  text-align: center;
  ${media.desktop`line-height: 1em;`}
  ${media.tablet`line-height: 1em;`}
  ${media.phone`line-height: 1em;`}
  ${props => !props.show ? 'display:none' : ''};
`
const StyledH3FixTopMargin = StyledH3.extend`
  ${media.desktop`margin-top: 28px;`}
  ${media.tablet`margin-top: 31px;`}
  ${media.phone`margin-top: 34px;`}
`

export default Timeline
