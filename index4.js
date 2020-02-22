//Mutatin 추가 
// deleteMovie 수정 要
const {GraphQLServer} = require('graphql-yoga');


const movies = [
    {
        id :0,
        title : "aa",
        rating : 8.8
        
    },
    {
        id :111,
        title : "bbb",
        rating : 4.8,
        language : "English"
        
    },
    {
        id :3245,
        title : "aesf",
        rating : 8.1,
        language :"Korean"
        
    },
    {
        id :5468,
        title : "fucks",
        rating : 3.6
        
    }
];


const getById = id =>{
    // id에 해당하는 1번째 사람 리턴 
    const filteredMovie = movies.filter(Movie => Movie.id === id);
    return filteredMovie[0];
};

const deleteMovie = id =>{
    const cleanedMovies = movies.filter(Movie => Movie.id !== id);
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    }else{
        return false;
    }
};

const addMovie = (title, rating) =>{
    const newMovie = {
        id:  parseInt((Math.random()*100)/10),
        title,
        rating
    };
    movies.push(newMovie);
    return newMovie;
};


const getMovies = () =>movies;

const resolvers = {
    Query: {
        movies : () => getMovies(),
        movie : (_, {id}) =>getById(id)
    },
    Mutation :{
        addMovie : (_, {title, rating }) => addMovie(title, rating),
        deleteMovie : (_, {id}) => deleteMovie(id)
    }
};


// 스키마를 정의하고 
// 사용자가 구현한 리졸버대로 데이터를 가져온다 
// 어디서든 가져올 수 있다, 파일이나 db나 

const server = new GraphQLServer({ 
    typeDefs : "graphql/schema4.graphql"
    , resolvers })
server.start(function () { console.log('Server is running on localhost:4000')})