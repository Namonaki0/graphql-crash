import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";

//? server setup
const server = new ApolloServer({
  //? typeDefs - definitions of types of data
  typeDefs,
  //? resolvers - handle the queries based on our schema and type
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server ready at port", 4000);
