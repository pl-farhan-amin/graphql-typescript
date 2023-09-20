import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { readFileSync } from 'fs';
import dotenv from 'dotenv';
import  resolvers  from './resolvers';
dotenv.config();

const app = express();

const typeDefs = gql(readFileSync('./schema.graphql', 'utf8'));

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startServer().then(() => {
  app.listen({ port: process.env.PORT }, () =>
    console.log(`Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
  );
});