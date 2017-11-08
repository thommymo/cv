import React, { Component } from 'react';
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { white, black, primary } from '../utils/colors'
import { media } from '../utils/breakpoints'
import { H4 } from '../components/atoms/typography'
import { githubIcon, backIcon } from '../utils/icons'
import { Footer } from '../components/organisms/footer'
import { Header } from '../components/organisms/header'

// TODO: This should be a HOC

class PageShell extends Component {
  shouldComponentUpdate(nextProps, nextState){
    return !(nextProps === this.props);
  }
  render(){
    const color = this.props.color ? this.props.color : primary
    return(
      <MainContent color={color}>
        <Header props={this.props}/>
        <Helmet>
          <title>{this.props.title}</title>
        </Helmet>
        <Content>
          {this.props.children}
        </Content>
        <Footer />
      </MainContent>
    )
  }
}

export default PageShell

const MainContent = styled.div`
  background-color:${props => props.color};
  width:100%;
  min-height:100%;
  position:absolute;
  top:0px;
  & a {
    color: ${white};
  }
  & a:hover {
    opacity: 0.5;
  }
`
const Content = styled.div`
  max-width:1024px;
  min-height:1000px;
  margin-left:auto;
  margin-right:auto;
  ${media.desktop`padding-left:61px;`}
  ${media.tablet`padding-left:61px;`}
  ${media.phone`padding-left:16px;`}
  ${media.desktop`padding-right:61px;`}
  ${media.tablet`padding-right:61px;`}
  ${media.phone`padding-right:16px;`}
  color:${white}
`
