import {gql} from "apollo-boost";

export const GET_ALL_PLANETS = gql`
query allPlanets {
   allPlanets{
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
