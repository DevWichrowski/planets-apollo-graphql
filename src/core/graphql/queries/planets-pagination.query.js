import {gql} from "apollo-boost";

export const GET_ALL_PLANETS_PAGINATION = gql`
query allPlanetsPagination($after: String, $before: String) {
 allPlanets(after: $after, before: $before){
    pageInfo{
      hasNextPage
      hasPreviousPage
    }
  totalCount
  }
 }
`;
