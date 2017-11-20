import React from 'react'
import { configure, addDecorator } from '@storybook/react';
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
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
))

configure(loadStories, module);
