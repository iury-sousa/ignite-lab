import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o5r6ra0s8301z2379s25si/master",
  cache: new InMemoryCache(),
});
