import {gql} from "apollo-boost";

export const GET_ALL_PLANETS = gql`
query allPlanets($first: Int = null, $last: Int = null, $after: String, $before: String) {
   allPlanets(first: $first, last: $last, after: $after, before: $before){
   pageInfo{
      hasNextPage
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
