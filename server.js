import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { resolvers } from "./src/resolvers/resolvers.js";
import { typeDefs } from "./src/SchemaGQL/schemaGQL.js";

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