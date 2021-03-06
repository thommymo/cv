import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { toIdValue } from "apollo-utilities";

// create a network interface with data from my graphcms account

const networkInterface = new HttpLink({
  headers: { Authorization: `Bearer ${process.env.REACT_APP_GRAPHQL_KEY}` },
  uri: `${process.env.REACT_APP_GRAPHQL_URI}`
});

/*

  Query Splitting:

  *** For more information on how to do query splitting see this apollo
  documentation: http://dev.apollodata.com/react/query-splitting.html ***

  dataIdFromObject declares the cacheResolvers how to connect the entries from
  my allCVEntrieses-queries with my CVEntries-queries.

*/
const dataIdFromObject = o => o.id;

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
      CVEntries: (_, { id }) => {
        toIdValue(dataIdFromObject({ __typename: "allCVEntrieses", id }));
      }
      //CVEntries: (_, args) => args.ids.map(id => toIdValue(dataIdFromObject({ __typename: 'allCVEntrieses', id: id }))),
    }
  }
});

export const client = new ApolloClient({
  link: networkInterface,
  cache: cache.restore(window.__APOLLO_STATE__ || {})
});
