import React, {Component} from 'react'
import styled from 'styled-components'
import { H4Capitals, InnerHTML } from '../atoms/typography'
import { CSSTransition } from 'react-transition-group'
import { timeoutTransition } from '../../utils/constants'
import { closeIconBlack } from '../../utils/icons'
import { media, print } from '../../utils/breakpoints'

class SmallEntry extends Component {
  constructor(props) {
    super(props)
    this.state = { smallEntryOpen: false }
    this.escFunction = this.escFunction.bind(this);
  }

  escFunction(event){
    if(event.keyCode === 27) {
      this.handleClose()
    }
  }

  handleOpen() {
    this.state.smallEntryOpen ? this.setState({ smallEntryOpen: false }) : this.setState({ smallEntryOpen: true });
  }

  handleClose() {
    this.setState({ smallEntryOpen: false })
  }

  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.escFunction, false);
  }

  render(){
    return(
      <StyledSmallEntry show={this.state.smallEntryOpen}>
        <BorderRight show={this.state.smallEntryOpen}>
          <Title onClick={this.handleOpen.bind(this)}>{this.props.furtherEducationTitle}</Title>
          <CSSTransition
            in={this.state.smallEntryOpen}
            timeout={timeoutTransition}
            classNames="FadeIn"
            unmountOnExit={true}
          >
            <PSmallEntry show={this.state.smallEntryOpen} dangerouslySetInnerHTML={{__html: this.props.furtherEducationContent}} />
          </CSSTransition>
        </BorderRight>
        <BorderLeft show={this.state.smallEntryOpen}/>
        <CSSTransition
          in={this.state.smallEntryOpen}
          timeout={900}
          classNames="FadeInFast"
          unmountOnExit={true}
        >
          <WeiterbildungBackground show={this.state.smallEntryOpen} onClick={this.handleClose.bind(this)}>
            <nav>
              <Img src={closeIconBlack} alt="Close" width="40" height="40"  onClick={this.handleClose.bind(this)}/>
            </nav>
          </WeiterbildungBackground>
        </CSSTransition>
      </StyledSmallEntry>

    )
  }
}

export default SmallEntry

const Img = styled.img`
  cursor: pointer;
  padding: 15px;
`

const Title = H4Capitals.extend`
  background-image: -webkit-linear-gradient(165deg, ${props => props.theme.colors.violet} 20%,${props => props.theme.colors.blue} 120%);
  background-image: linear-gradient(165deg, ${props => props.theme.colors.violet} 20%,${props => props.theme.colors.blue} 120%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  display: inline-block;
  cursor: pointer;
  margin: 3px 10px;
  &:hover {
    opacity:0.5;
  }
  white-space: normal;
  width:140px;
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    color:${props => props.theme.colors.blue};
    background-image:none;
  }
`
const PSmallEntry = InnerHTML.extend`
  ${props => props.show ? `visibility: visible;` : "visibility: hidden;" }
  display: block;
  margin: 15px 10px;
  max-width: 140px;
  text-align: right;
  & p {
    float:right;
  }
`
const BorderRight = styled.div`
  border-right: 10px solid ${props => props.theme.colors.blue};
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  height: 22px;
  ${props => props.show ? `z-index:101;` : "z-index:0;" }
  text-align: right;
  overflow: visible;
  white-space: nowrap;
`
const BorderLeft = styled.div`
  border-left: 16px solid ${props => props.theme.colors.blue};
  border-top: 16px solid transparent;
  border-bottom: 16px solid transparent;
  height:10px;
  ${props => props.show ? `z-index:101;` : "z-index:0;" }
`
const StyledSmallEntry = styled.div`
  display:flex;
  margin-right: -34px;
  margin-top: -12px;
  margin-left: 40px;
  text-align: right;
  flex: 1;
  ${props => props.show ? `z-index:101;` : "z-index:0;" }
  font-size: 0.8em;
  ${media.phone`display:none;`};
  ${media.tablet`display:none;`};
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    margin-right: 42px;
  }
  ${print.paper`visibility:hidden;`}
`
const WeiterbildungBackground = styled.div`
  position:fixed;
  background: ${props => props.theme.colors.white};
  top:0;
  bottom:0;
  left:0;
  right:0;
  text-align:center;
  ${props => props.show ? `visibility: visible; opacity:0.9; z-index:100;` : "visibility: hidden; z-index:0;" }
`
