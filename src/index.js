import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider} from 'react-apollo';

import { BrowserRouter as Router } from 'react-router-dom'

// Apollo config
// TODO: this might has to be moved out of index.js

const networkInterface =
  new HttpLink({
    headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MDkwMzM3MTMsImNsaWVudElkIjoiY2l2Z29zNmNqMDE5MjAxODRucDAxZGRkMiIsInByb2plY3RJZCI6ImNqOGQzNnp3ejA3dmYwMTY1OXdob2Q2b2MiLCJwZXJtYW5lbnRBdXRoVG9rZW5JZCI6ImNqOThucGxnYTVwcDIwMTM2dHlkdWFpZmcifQ.uamhbiJruoE8Y9mqF742Pq-iWEIKYGPsDuu8D_qhjjQ`},
    uri: 'https://api.graphcms.com/simple/v1/cj8d36zwz07vf01659whod6oc'
  })
// See http://dev.apollodata.com/react/query-splitting.html why I need CustomResolvers here

const dataIdFromObject = o => o.id
/*
const client = new ApolloClient({
  link: networkInterface,
  cache: new InMemoryCache(),
})*/

const cache = new InMemoryCache({
  dataIdFromObject, // custom function,
  addTypename: false,
  //TODO: This does not work - it's not clear how to use this properly...
  cacheResolvers: {
    Query: {
      allCVEntrieses: ({ id }) => /*toIdValue(*/dataIdFromObject({ __typename: 'CVEntries', id })/*)*/,
    },
  }, // cache resolvers
})

const client = new ApolloClient({
  link: networkInterface,
  cache: cache.restore(window.__APOLLO_STATE__ || {}),
})

ReactDOM.render(
    <Router>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Router>,
  document.getElementById('root'));
registerServiceWorker();
