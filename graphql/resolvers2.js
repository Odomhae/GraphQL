const people = require('./db');


module.exports= {

   /*people :[
        {
            name : "odom",
            age : 2123,
            gender : "female",
        },
        {
            name : "odom1",
            age : 22,
            gender : "male",
        },
        {
            name : "odom2",
            age : 11,
            gender : "female",
        },
        {
            name : "odom3", 
            age : 18,
            gender : "male",
        },
    ],*/
    
    resolvers : {
        Query: {
            people: () => people 
        }
    } 
} 

/*
let  people = [
    {
        name : "odom",
        age : 2123,
        gender : "female",
    },
    {
        name : "odom1",
        age : 22,
        gender : "male",
    },
    {
        name : "odom2",
        age : 11,
        gender : "female",
    },
    {
        name : "odom3", 
        age : 18,
        gender : "male",
    },
];

const resolvers = {
    Query: {
        people: () => people 
    }
};

module.exports = resolvers; */
