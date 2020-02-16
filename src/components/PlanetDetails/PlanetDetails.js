import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/react-hooks";
import {GET_PLANET_DETAILS} from "../../core/graphql/queries/planet-details.query";
import * as S from "./PlanetDetails.styled";
import Header from "../shared/Header/Header";
import InfoBox from "../shared/InfoBox/InfoBox";
import {useDocumentTitle} from "../../utils/helpers/hooks";
import SkeletonLoading from "../shared/SkeletonLoading/SkeletonLoading";


const PlanetDetails = () => {
    useDocumentTitle('Planets Details');

    let {id} = useParams();
    const {data} = useQuery(GET_PLANET_DETAILS, {
        variables: {
            id: id,
        },
    });

    return (
        <>
            <Header textHeader={'Planet details'} homeButton={true}/>
            <S.Wrapper>
                <S.Container>
                    <Header textHeader="Basic info"/>
                    <S.InfoContainer>
                        <InfoBox headerText={"Name:"} value={data?.planet.name}/>
                        <InfoBox headerText={"Diameter:"} value={data?.planet.diameter}/>
                        <InfoBox headerText={"Rotation period:"} value={data?.planet.rotationPeriod}/>
                        <InfoBox headerText={"Gravity:"} value={data?.planet.gravity}/>
                        <InfoBox headerText={"Population:"} value={data?.planet.population}/>
                        <InfoBox headerText={"Terrains:"} value={data?.planet.terrains.map(terrain => <React.Fragment
                            key={terrain}>{`${terrain}, `}</React.Fragment>)}/>
                        <InfoBox headerText={"Surface water:"} value={data?.planet.surfaceWater}/>
                        <InfoBox headerText={"Gravity:"} value={data?.planet.gravity}/>
                    </S.InfoContainer>
                </S.Container>
                <S.Container>
                    <Header textHeader="Movies"/>
                    <S.MovieContainer>
                        {data ? data.planet.filmConnection.films.length === 0 ?
                            <S.NoMovies>No movies connected to
                                planet.</S.NoMovies> : data.planet.filmConnection.films.map(film => {
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
                            }) : <SkeletonLoading count={10}/>}
                    </S.MovieContainer>
                </S.Container>
            </S.Wrapper>}
        </>
    );
};

export default PlanetDetails;
