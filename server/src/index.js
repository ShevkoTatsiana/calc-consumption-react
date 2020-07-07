const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const ConsumptionItem = require('./resolvers/ConsumptionItem');
const Result = require('./resolvers/Result');

const resolvers = {
    Query,
    Mutation,
    ConsumptionItem,
    Result
};

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
        return {
            ...request,
            prisma,
        }
    },
});
server.start(() => console.log(`Server is running on http://localhost:4000`))