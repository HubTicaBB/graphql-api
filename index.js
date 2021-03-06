const { ApolloServer } = require("apollo-server");

const server = new ApolloServer();

server
  .listen({port: process.env.PORT || 4000})
  .then(({url}) => {
    console.log(`graphQL running at ${url}`);
  });
