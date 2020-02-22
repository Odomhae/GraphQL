// 영화 Api 활용  
const {GraphQLServer} = require('graphql-yoga');
const fetch = require('node-fetch');
const API_URL = "https://yts.am/api/v2/list_movies.json"


const getMovies = (limit, rating) => fetch(`${API_URL}`)
    .then(res => res.json())
    .then(json => json.data.movies);

const resolvers = {
    Query: {
        movies : () => getMovies(),
       // movie : (_, {id}) =>getById(id)
    }
   
};


// 스키마를 정의하고 
// 사용자가 구현한 리졸버대로 데이터를 가져온다 
// 어디서든 가져올 수 있다, 파일이나 db나 

const server = new GraphQLServer({ 
    typeDefs : "graphql/schema5.graphql"
    , resolvers })
server.start(function () { console.log('Server is running on localhost:4000')})