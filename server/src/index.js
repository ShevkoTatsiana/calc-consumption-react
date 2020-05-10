const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Subscription = require('./resolvers/Subscription')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')
const ConsumptionItem = require('./resolvers/ConsumptionItem')
const Result = require('./resolvers/Result')

const resolvers = {
    Query,
    Mutation,
    Subscription,
    User,
    Link,
    ConsumptionItem,
    Result
}
// function info(parent, args, context, info) {
//     console.log(Query1);
//     return 'Test'
// }
//
// function feed(parent, args, context, info) {
//     return context.prisma.links()
// }
// function materials(parent, args, context, info) {
//     return context.prisma.materials()
// }

// const resolvers = {
//     Query: {
//         info: () => info(),
//         // 2
//         feed,
//         materials
//     },
//     // 3
//     Link: {
//         id: (parent) => parent.id,
//         description: (parent) => parent.description,
//         url: (parent) => parent.url,
//     }
// }

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
        return {
            ...request,
            prisma,
        }
    },
})
server.start(() => console.log(`Server is running on http://localhost:4000`))