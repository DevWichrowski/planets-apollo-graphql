import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/react-hooks";
import {GET_PLANET_DETAILS} from "../../../core/graphql/queries/planet-details.query";
import * as S from "./PlanetDetails.style";
import Header from "../../shared/Header/Header";


const PlanetDetails = (props) => {
    let {id} = useParams();
    const {data, loading, error, fetchMore} = useQuery(GET_PLANET_DETAILS, {
        variables: {
            id: id,
        },
        notifyOnNetworkStatusChange: true
    });

    return (
        <>
            {data != null && <S.Wrapper>
                {console.log(data)}
                <S.Container>
                    <Header textHeader="Basic info"/>
                    <S.InfoContainer>
                        <S.InfoElement>
                            <S.InfoHeader>
                                Name:
                            </S.InfoHeader>
                            <S.InfoData>
                                {data.planet.name}
                            </S.InfoData>
                        </S.InfoElement>
                        <S.InfoElement>
                            <S.InfoHeader>
                                Diameter:
                            </S.InfoHeader>
                            <S.InfoData>
                                {data.planet.diameter}
                            </S.InfoData>
                        </S.InfoElement>
                        <S.InfoElement>
                            <S.InfoHeader>
                                Rotation period:
                            </S.InfoHeader>
                            <S.InfoData>
                                {data.planet.rotationPeriod}
                            </S.InfoData>
                        </S.InfoElement>
                        <S.InfoElement>
                            <S.InfoHeader>
                                Gravity:
                            </S.InfoHeader>
                            <S.InfoData>
                                {data.planet.gravity}
                            </S.InfoData>
                        </S.InfoElement>
                        <S.InfoElement>
                            <S.InfoHeader>
                                Population:
                            </S.InfoHeader>
                            <S.InfoData>
                                {data.planet.population}
                            </S.InfoData>
                        </S.InfoElement>
                        <S.InfoElement>
                            <S.InfoHeader>
                                Terrains:
                            </S.InfoHeader>
                            <S.InfoData>
                                {data.planet.terrains.map(terrain => <React.Fragment key={terrain}>{terrain}</React.Fragment>)}
                            </S.InfoData>
                        </S.InfoElement>
                        <S.InfoElement>
                            <S.InfoHeader>
                                Surface water:
                            </S.InfoHeader>
                            <S.InfoData>
                                {data.planet.surfaceWater}
                            </S.InfoData>
                        </S.InfoElement>
                    </S.InfoContainer>
                </S.Container>
                <S.Container>
                    <Header textHeader="Movies"/>
                    <S.MovieContainer>
                        {data.planet.filmConnection.films.map(film => {
                            return (
                                <React.Fragment key={film.id}>
                                    <S.InfoElement>
                                        <S.MovieHeader>
                                            {film.title}
                                        </S.MovieHeader>
                                        <S.MovieDirector>
                                            Director: {film.director}
                                        </S.MovieDirector>
                                        <S.MovieOpening>
                                            {film.openingCrawl}
                                        </S.MovieOpening>
                                        <S.MovieHeader>
                                            Characters:
                                        </S.MovieHeader>
                                        <S.CharactersContainer>
                                            {film.characterConnection.characters.map(character => {
                                                return (
                                                    <S.MovieCharacter key={character.name}>
                                                        {`${character.name},`}
                                                    </S.MovieCharacter>
                                                )

                                            })}
                                        </S.CharactersContainer>
                                    </S.InfoElement>
                                    <S.Divider/>
                                </React.Fragment>

                            )
                        })}
                    </S.MovieContainer>
                </S.Container>
            </S.Wrapper>}
        </>
    );
};

export default PlanetDetails;
