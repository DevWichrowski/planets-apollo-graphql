import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.com/.netlify/functions/index',
});
