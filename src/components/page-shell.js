import React, { PureComponent } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { white, secondaryDark } from '../utils/colors'
import { media } from '../utils/breakpoints'

class PageShell extends PureComponent {
  // Using PureCompenent prevents this Child to rerender four times (because of TransitionGroup)

  render(){
    return(
      <MainContent color={this.props.color}>
        <Helmet>
          <title>{this.props.title}</title>
        </Helmet>
        <Content>
          {this.props.children}
        </Content>
        <Footer>
          <p>Thomas Moser, Bireggstrasse 33, 6003 Luzern</p>
          <div className="TopBar">
            <Link to="/" testprop="testprop">Home</Link>
            <Link to="/404">Subpage</Link>
            <Link to="/chapter">Chapter</Link>
          </div>
        </Footer>
      </MainContent>
    )
  }
}

export default PageShell

const MainContent = styled.div`
  background-color:${props => props.color};
  width:100%;
  height:100%;
  position:absolute;
`
const Content = styled.div`
  max-width:1024px;
  margin-left:auto;
  margin-right:auto;
  ${media.desktop`padding-left:61px;`}
  ${media.tablet`padding-left:61px;`}
  ${media.phone`padding-left:16px;`}
  color:${white}
`
const Footer = styled.footer`
  color: ${white};
  background-color: ${secondaryDark};
  width:100%;
  display: flex;
`
