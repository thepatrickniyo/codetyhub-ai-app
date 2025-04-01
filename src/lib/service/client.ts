import { GraphQLClient } from "graphql-request";

const requestHeaders = {
    'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET!,
    'hasura-access-key': process.env.NEXT_PUBLIC_HASURA_ACCESS_KEY!,
    'content-type': 'application/json'
}

export const gqlClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL!,{
    headers: requestHeaders
  },
//   { fetch }
);