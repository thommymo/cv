import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import { ApolloProvider} from 'react-apollo'
import { client } from './utils/apollo-config'

import styled, { ThemeProvider }  from 'styled-components'
import { theme } from './utils/theme'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <Router>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ApolloProvider>
    </Router>,
  document.getElementById('root'))
registerServiceWorker()
