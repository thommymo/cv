import React from 'react'
import { configure, addDecorator } from '@storybook/react';
import styled from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/utils/theme'
import '../src/utils/global-css'
/*
function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}
*/

const req = require.context('../src/components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ContentWrapper>
          <Content>{story()}</Content>
        </ContentWrapper>
      </ThemeProvider>
    </BrowserRouter>
))
const ContentWrapper = styled.div`
  padding:50px 0;
  background-color: ${props => props.theme.colors.primary};
  width:100%;
  height:100%;
  min-height:100vh;
`
const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
`

configure(loadStories, module);
