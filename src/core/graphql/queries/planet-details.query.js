import {gql} from "apollo-boost";

export const GET_PLANET_DETAILS = gql`
query planetDetails($id: String!) {
   planet(id: $id"){
    name
    diameter
    rotationPeriod
    gravity
    population
    terrains
    surfaceWater
    filmConnection{
      films{
        title
        openingCrawl
        director
        characterConnection{
          characters{
            name
            birthYear
            gender
            eyeColor
            height
            mass
          }
        }
      }
    }
  }
}
`;
