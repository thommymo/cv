import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { white, primary, secondaryDark } from '../../utils/colors'
import { timeout } from '../../utils/constants'
import { H1, P} from '../../components/styled-atoms'
import { media } from '../../utils/breakpoints'

function PageShell(WrappedComponent, pathname ) {
  return class extends Component {
    componentDidMount(){
      //TODO: Find a better solution for this.
      //This could maybe be be a solution: https://reactcommunity.org/react-transition-group/#Transition-prop-addEndListener
      setTimeout(()=>window.scrollTo(0, 0), `${timeout}`)
    }
    render() {
      return(
        <MainContent>
          <Helmet>
            <title>{this.props.title}</title>
          </Helmet>
          <Content>
            { /* TODO: Check if this is a good solution for getting the id */ }
            { /* TODO: There should be a better solution (i.e. if we have more paths and deeper paths) */}
            <WrappedComponent id={pathname ? pathname.replace(/[/]/g, "") : false} />
          </Content>
          <Footer>
            <P>Thomas Moser, Bireggstrasse 33, 6003 Luzern</P>
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
