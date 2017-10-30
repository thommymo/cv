import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider} from 'react-apollo';
import { toIdValue } from 'apollo-utilities';

// create a network interface with data from my graphcms account

const networkInterface =
  new HttpLink({
    headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MDkwMzM3MTMsImNsaWVudElkIjoiY2l2Z29zNmNqMDE5MjAxODRucDAxZGRkMiIsInByb2plY3RJZCI6ImNqOGQzNnp3ejA3dmYwMTY1OXdob2Q2b2MiLCJwZXJtYW5lbnRBdXRoVG9rZW5JZCI6ImNqOThucGxnYTVwcDIwMTM2dHlkdWFpZmcifQ.uamhbiJruoE8Y9mqF742Pq-iWEIKYGPsDuu8D_qhjjQ`},
    uri: 'https://api.graphcms.com/simple/v1/cj8d36zwz07vf01659whod6oc'
  })

/*

  Query Splitting:

  *** For more information on how to do query splitting see this apollo
  documentation: http://dev.apollodata.com/react/query-splitting.html ***

  dataIdFromObject says the cacheResolvers how to connect the entries from
  my allCVEntrieses-queries with my CVEntries-queries.

*/
const dataIdFromObject = o => o.id

const cache = new InMemoryCache({

  dataIdFromObject, // custom function,
  /*
    addTypename stores the Typename in the apollo stores, this makes the store
    more human readable.
  */
  addTypename: true,
  /*
   By adding cacheResolvers for the CVEntries field (and having dataIdFromObject
   function which normalizes the cache), the data can be resolved instantly from
   the store without a server round trip. This is the case, if the main view has
   already been queried. The probability for that in my use case is quite high
  */
  cacheResolvers: {
    Query: {
      CVEntries: (_, { id }) => toIdValue(dataIdFromObject({ __typename: 'allCVEntrieses', id })),
    },
  },
})

export const client = new ApolloClient({
  link: networkInterface,
  cache: cache.restore(window.__APOLLO_STATE__ || {}),
})
