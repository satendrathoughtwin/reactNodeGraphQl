import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { quotes, users } from "./src/service/fakeDb.js";

// create new schema

// Note -->
//     1. query --> on get request
//     2. mutation --> on post/delete/update request
//     3. resolver --> it will manage both query and mutation, will perform logical operations
const typeDefs = gql`
  type Query {
    users : [User]
    user(id : ID!) : User
    quotes : [Quote]
    userQuote(by :ID!) : [Quote]
  }
  type User {
      id : ID
      firstName : String
      lastName : String
      email : String
      password : String
      quotes :  [Quote]
  }
  type Quote {
      name : String
      by : ID
  }
`;

const resolvers = {
  Query: {
   users : ()=>users,
   user : (_,args)=>users.find(userdata=>userdata.id == args.id),
   quotes : ()=>quotes,
   userQuote : (_,args)=>quotes.filter(userQote=> userQote.by == args.by)
  },
  User :{
    quotes : (usr)=> quotes.filter(quote =>quote.by == usr.id)
  }
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