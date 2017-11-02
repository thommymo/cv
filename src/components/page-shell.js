import React, { Component } from 'react';
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { white, secondaryDark, black, primary } from '../utils/colors'
import { media } from '../utils/breakpoints'
import { H4 } from '../components/styled-atoms'
import { githubIcon, backIcon } from '../utils/icons'

// TODO: This should be a HOC

class PageShell extends Component {
  shouldComponentUpdate(nextProps, nextState){
    return !(nextProps === this.props);
  }

  render(){
    const color = this.props.color ? this.props.color : primary
    return(
      <MainContent color={color}>
        <Header>
          <Backlink>
            {
              //Define when there should be a back link
            }
            <Link to="/"><img src={backIcon} alt="Github icon" width="40" height="40"/></Link>

          </Backlink>
          <Navigation>
            {
              //Define activ Link
            }
            <NavLink to="/home" activeStyle={{ borderBottom: '3px solid #000' }}><H4Black>Application</H4Black></NavLink>
            <NavLink to="/aboutme/"  activeStyle={{ borderBottom: '3px solid #000' }}><H4Black>About me</H4Black></NavLink>
            <NavLink to="/cv/"  activeStyle={{ borderBottom: '3px solid #000' }}><H4Black>CV</H4Black></NavLink>
          </Navigation>
          <NextLink>
            {
              //Define when there should be a next Link
            }
            go on
          </NextLink>
        </Header>
        <Helmet>
          <title>{this.props.title}</title>
        </Helmet>
        <Content>
          {this.props.children}
        </Content>
        <Footer>
          <Left>
            <H4>
              <a href="https://github.com/thommymo/">
                <img src={githubIcon} alt="Github icon" width="40" height="40"/>
              </a>
            </H4>
          </Left>
          <Right>
            <H4>
              <BlackLink href="mailto:mail@thomasmoser.ch">mail@thomasmoser.ch</BlackLink>
            </H4>
          </Right>
        </Footer>
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
const Backlink = styled.div`

`
const NextLink = styled.div`

`
const Navigation = styled.div`
  display:flex;
`
const Header = styled.header`
  color: ${black};
  background-color: ${white};
  width:100%;
  display:flex;
  align-items: center;
  justify-content: space-between;
  min-height:60px;
  a {
    text-decoration: none;
  }
`
const Footer = styled.footer`
  color: ${black};
  background-color: ${white};
  width:100%;
  display:flex;
  align-items: center;
  position:relative;
  min-height:60px;
  bottom:0px;
`
const Right = styled.div`
  padding: 0 20px;
  flex:1;
  text-align:right;
`
const Left = styled.div`
  padding: 0 20px;
  flex:1;
  text-align:left;
`
const BlackLink = styled.a`
  color:${black};
`
const H4Black = H4.extend`
  color:${black};
  text-decoration: none;
  padding: 0px 20px;
`
