import path from 'path';

import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { ApolloServer, gql } from 'apollo-server-express';
import axios from 'axios';
import express from 'express';

const typesArray = loadFilesSync(path.resolve(__dirname, './graphql/types'));
const resolversArray = loadFilesSync(
  path.resolve(__dirname, './graphql/resolvers')
);

const typeDefs = mergeTypeDefs(typesArray);
const resolvers = mergeResolvers(resolversArray);

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: process.env.PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`
  )
);
