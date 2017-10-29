import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { white, primary, secondaryDark } from '../utils/colors'
import { timeout } from '../utils/constants'
import { StyledH1, StyledP} from '../components/styled-atoms'
import { media } from '../utils/breakpoints'

function PageShell(WrappedComponent) {
  return class extends Component {
    componentDidMount(){
      //TODO: Find a better solution for this.
      //This could maybe be a solution: https://reactcommunity.org/react-transition-group/#Transition-prop-addEndListener
      setTimeout(()=>window.scrollTo(0, 0), `${timeout}`)
    }
    render() {
      return(
        <MainContent>
          <Helmet>
            <title>{this.props.title}</title>
          </Helmet>
          <Content>
            <PageTitle>
              <StyledH1>Title</StyledH1>
            </PageTitle>
            <WrappedComponent />
          </Content>
          <Footer>
            <StyledP>Thomas Moser, Bireggstrasse 33, 6003 Luzern</StyledP>
            <div className="TopBar">
              <Link to="/">Home</Link>
              <Link to="/404">Subpage</Link>
              <Link to="/chapter">Chapter</Link>
            </div>
          </Footer>
        </MainContent>
      )
    }
  }
}

export default PageShell

const MainContent = styled.div`
  position:absolute;
  background-color: ${primary};
  width:100%;
  min-height:100%;
`

const PageTitle = styled.div`

`

const Content = styled.div`
  max-width:1024px;
  border:1px dashed;
  margin-left:auto;
  margin-right:auto;
  ${media.desktop`padding-left:61px;`}
  ${media.tablet`padding-left:61px;`}
  ${media.phone`padding-left:16px;`}
  color:${white}
`
const Footer = styled.footer`
  position:absolute;
  bottom: 0px;

  color: ${white};
  background-color: ${secondaryDark};
  width:100%;
  display: flex;
`
