import React, { Component } from 'react';
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { white, primary } from '../../utils/colors'
import { media } from '../../utils/breakpoints'
import { Footer } from '../../components/organisms/footer'
import { Header } from '../../components/organisms/header'

class PageShell extends Component {
  shouldComponentUpdate(nextProps, nextState){
    return !(nextProps === this.props);
  }
  render(){
    const color = this.props.color ? this.props.color : primary
    const fontColor = this.props.fontColor ? this.props.fontColor : white
    return(
      <MainContent color={color} >
        <Header props={this.props}/>
        <Helmet>
          <title>{this.props.title}</title>
        </Helmet>
        <ContentWrapper color={color} >
          <Content fontColor={fontColor} color={color} gradient={this.props.gradient} >
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
  background-color:${props => props.color};
  width:100%;
  min-height:100%;
  position:absolute;
  top:0px;
  & a:hover {
    opacity: 0.5;
  }
`
const ContentWrapper = styled.div`
  ${media.desktop`border-left:solid 61px ${props => props.color};`}
  ${media.tablet`border-left:solid 61px ${props => props.color};`}
  ${media.phone`border-left:solid 16px ${props => props.color};`}
  ${media.desktop`border-right:solid 61px ${props => props.color};`}
  ${media.tablet`border-right:solid 61px ${props => props.color};`}
  ${media.phone`border-right:solid 16px ${props => props.color};`}
`
const Content = styled.main`
  display: block;
  margin-top: -40px;
  ${props => props.gradient ? "margin-bottom: -40px;":"margin-bottom: 0px;"};
  box-shadow: 1000px 0px ${props => props.color}, -1000px 0px ${props => props.color};
  max-width: 1024px;
  min-height: 1000px;
  margin-left: auto;
  margin-right: auto;
  color:${props => props.fontColor};
`
