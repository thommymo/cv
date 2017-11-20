import React, { Component } from 'react';
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { media } from '../../utils/breakpoints'
import { Footer } from '../../components/organisms/footer'
import { Header } from '../../components/organisms/header'

class PageShell extends Component {
  shouldComponentUpdate(nextProps, nextState){
    return !(nextProps === this.props);
  }
  render(){
    return(
      <MainContent>
        <Header props={this.props}/>
        <Helmet>
          <title>{this.props.title}</title>
        </Helmet>
        <ContentWrapper>
          <Content gradient={this.props.gradient} >
            {this.props.children}
          </Content>
        </ContentWrapper>
        <Footer props={this.props}/>
      </MainContent>
    )
  }
}

export default PageShell

const MainContent = styled.div`
  display:block;
  background-color:${props => props.theme.colors.primary};
  width:100%;
  min-height:100%;
  position:absolute;
  top:0px;
  & a:hover {
    opacity: 0.5;
  }
`
const ContentWrapper = styled.div`
  ${media.desktop`border-left:solid 61px ${props => props.theme.colors.primary};`}
  ${media.tablet`border-left:solid 61px ${props => props.theme.colors.primary};`}
  ${media.phone`border-left:solid 16px ${props => props.theme.colors.primary};`}
  ${media.desktop`border-right:solid 61px ${props => props.theme.colors.primary};`}
  ${media.tablet`border-right:solid 61px ${props => props.theme.colors.primary};`}
  ${media.phone`border-right:solid 16px ${props => props.theme.colors.primary};`}
`
const Content = styled.main`
  display: block;
  margin-top: -40px;
  ${props => props.gradient ? "margin-bottom: -40px;":"margin-bottom: 0px;"};
  box-shadow: 1000px 0px ${props => props.theme.colors.primary}, -1000px 0px ${props => props.theme.colors.primary};
  max-width: 1024px;
  min-height: 1000px;
  margin-left: auto;
  margin-right: auto;
  color:${props => props.theme.colors.fontColor};
`
