// create new schema

import { gql } from "apollo-server";

// Note -->
//     1. query --> on get request
//     2. mutation --> on post/delete/update request
//     3. resolver --> it will manage both query and mutation, will perform logical operations
const typeDefs = gql`
  type Query {
    users: [User]
    user(id: ID!): User
    quotes: [Quote]
    userQuote(by: ID!): [Quote]
  }
  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    quotes: [Quote]
  }
  type Quote {
    name: String
    by: ID
  }

  type Mutation {
    signupUser(userNew: UserInput!): User
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
`;

export { typeDefs };
