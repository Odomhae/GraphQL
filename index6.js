// 영화 Api 활용  
// 영화 json에서 검색 조건 적용 
const {GraphQLServer} = require('graphql-yoga');
const fetch = require('node-fetch');
const API_URL = "https://yts.am/api/v2/list_movies.json?"


const getMovies = (limit, rating) => {
    let REQUEST_URL = API_URL;
    // limit와 rating 조건에 맞는 결과 반환 
    console.log('limit ' + limit + ' ' + 'rating ' + rating);

    if (limit > 0) {
        REQUEST_URL += `limit=${limit}`;
    }
    if (rating > 0) {
        REQUEST_URL += `&minimum_rating=${rating}`;
    }

    console.log(REQUEST_URL);

    return fetch(REQUEST_URL)
        .then(res => res.json())
        .then(json => json.data.movies);
}


const resolvers = {
    Query: {
        movies: (_, {limit, rating }) =>
            getMovies(limit, rating)
    }
};


// 스키마를 정의하고 
// 사용자가 구현한 리졸버대로 데이터를 가져온다 
// 어디서든 가져올 수 있다, 파일이나 db나 

const server = new GraphQLServer({
    typeDefs: "graphql/schema6.graphql",
    resolvers
})
server.start(function () {
    console.log('Server is running on localhost:4000')
})