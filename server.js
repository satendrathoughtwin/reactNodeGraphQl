import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

// create new schema

// Note -->
//     1. query --> on get request
//     2. mutation --> on post/delete/update request
//     3. resolver --> it will manage both query and mutation, will perform logical operations
const typeDefs = gql`
  type Query {
    greet: String
  }
`;

const resolvers = {
  Query: {
    greet: () => "Hello world",
  },
};

// create instance of apollo server

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins : [
      ApolloServerPluginLandingPageGraphQLPlayground()
  ]
});


server.listen().then(({url})=>{
    console.log(`server is running at port ${url}`)
})