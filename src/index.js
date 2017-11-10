import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import { ApolloProvider} from 'react-apollo'
import { client } from './utils/apollo-config'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <Router>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Router>,
  document.getElementById('root'))
registerServiceWorker()
