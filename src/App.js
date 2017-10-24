import React, { Component } from 'react';
import CurriculumVitae from './components/curriculum-vitae'
import { Helmet } from "react-helmet";
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>This is my Title</title>
        </Helmet>
        <Header>
          Header Content
        </Header>
        <Section>
          <CurriculumVitae />
        </Section>
        <Footer>
          Footer content
        </Footer>
      </div>
    );
  }
}

const Footer = styled.footer`
  flex:1;
  background-color: #eeeeee;
`

const Header = styled.header`
  flex:1;
  background-color: #eeeeee;
`

const Section = styled.section`
  flex:1;
  background-color: #eeeeee;
`

export default App;
