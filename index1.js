//import { GraphQLServer } from 'graphql-yoga'
const {GraphQLServer} = require('graphql-yoga');

// 스키마 정의 

/*const typeDefs = `

  type odom{
    name : String! 
    age : Int
    gender : String!
  }

  type Query {
     person : odom!
  }
`*/
const Odomm = {
    name : "odom",
    age : 2123,
    gender : "male",
};

const resolvers = {
    Query: {
        person :() => Odomm     
    },
}

// 스키마를 정의하고 
// 사용자가 구현한 리졸버대로 데이터를 가져온다 
// 어디서든 가져올 수 있다, 파일이나 db나 

const server = new GraphQLServer({ 
    typeDefs : "graphql/schema1.graphql"
    , resolvers })
server.start(function () { console.log('Server is running on localhost:4000')})