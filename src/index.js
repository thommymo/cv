import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Apollo config
const client = new ApolloClient({
  link: new HttpLink({
    headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MDkwMzM3MTMsImNsaWVudElkIjoiY2l2Z29zNmNqMDE5MjAxODRucDAxZGRkMiIsInByb2plY3RJZCI6ImNqOGQzNnp3ejA3dmYwMTY1OXdob2Q2b2MiLCJwZXJtYW5lbnRBdXRoVG9rZW5JZCI6ImNqOThucGxnYTVwcDIwMTM2dHlkdWFpZmcifQ.uamhbiJruoE8Y9mqF742Pq-iWEIKYGPsDuu8D_qhjjQ`},
    uri: 'https://api.graphcms.com/simple/v1/cj8d36zwz07vf01659whod6oc' }),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'));
registerServiceWorker();
