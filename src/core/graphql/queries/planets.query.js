import {gql} from "apollo-boost";

export const GET_ALL_PLANETS = gql`
query allPlanets($after: String, $before: String) {
   allPlanets(first: 10, after: $after, before: $before){
   pageInfo{
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges{
      cursor
      planet : node{
      id
        name
        climates
        population
        gravity
      }
    }
  }
}
`;
