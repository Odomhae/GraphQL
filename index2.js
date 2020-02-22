//import { GraphQLServer } from 'graphql-yoga'
const {GraphQLServer} = require('graphql-yoga');


const people = [
    {
        id :0,
        name : "odom",
        age : 2123,
        gender : "female",
    },
    {
        id :1,
        name : "odom1",
        age : 22,
        gender : "male",
    },
    {
        id : 2,
        name : "odom2",
        age : 11,
        gender : "female",
    },
    {
        id :3,
        name : "odom3", 
        age : 18,
        gender : "male",
    },
];


const getById = id =>{
    // id에 해당하는 1번째 사람 리턴 
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
}

const resolvers = {
    Query: {
        people: () => people,
        person: (_, { id }) => getById(id)
    }
}


// 스키마를 정의하고 
// 사용자가 구현한 리졸버대로 데이터를 가져온다 
// 어디서든 가져올 수 있다, 파일이나 db나 

const server = new GraphQLServer({ 
    typeDefs : "graphql/schema2.graphql"
    , resolvers })
server.start(function () { console.log('Server is running on localhost:4000')})