import React, {useContext, useEffect, useState} from 'react';
import {useQuery} from "@apollo/react-hooks";
import {GET_ALL_PLANETS} from "../../../core/graphql/queries/planets.query";
import Planet from "./Planet/Planet";
import Pagination from "../../shared/Pagination/Pagination";
import {useHistory} from 'react-router-dom';
import * as S from "./PlanetList.styled";
import {PageInfoContext} from "../../../core/context/pageInfo-contetx";

const PlanetList = () => {
    const history = useHistory();
    const pageInfoContext = useContext(PageInfoContext);

    const [page, setPage] = useState(1);

    const {data, loading, fetchMore} = useQuery(GET_ALL_PLANETS, {
        variables: {
            first: 10,
        },
        notifyOnNetworkStatusChange: true
    });

    useEffect(() => {
        setPage(pageInfoContext.pageInfo.page)
    }, []);

    const navigateToPlanet = id => {
        history.push(`/planet/${id}`);
        pageInfoContext.setContext({
            page,
            cursor: data?.allPlanets.pageInfo.endCursor
        });
    };

    const handleNextPage = () => setPage(page + 1);

    const handlePreviousPage = () => setPage(page - 1);

    const nextPage = () => {
        fetchMore({
            variables: {
                after: data?.allPlanets.pageInfo.endCursor,
                first: 10,
                last: null,
            },
            updateQuery: (previousResult, {fetchMoreResult}) => {
                const newEdges = fetchMoreResult.allPlanets.edges;
                const pageInfo = fetchMoreResult.allPlanets.pageInfo;
                return newEdges.length
                    ? {
                        allPlanets: {
                            __typename: previousResult.allPlanets.__typename,
                            edges: [...newEdges],
                            pageInfo: {...pageInfo, hasPreviousPage: true}
                        }
                    }
                    : previousResult;
            },
        }).then(() => handleNextPage())
    };

    const prevPage = () => {
        fetchMore({
            variables: {
                last: 10,
                before: data?.allPlanets.pageInfo.startCursor,
                first: null,
            },
            updateQuery: (previousResult, {fetchMoreResult}) => {
                const newEdges = fetchMoreResult.allPlanets.edges;
                const pageInfo = fetchMoreResult.allPlanets.pageInfo;

                return newEdges.length
                    ? {
                        allPlanets: {
                            __typename: previousResult.allPlanets.__typename,
                            edges: [...newEdges],
                            pageInfo: {...pageInfo, hasNextPage: true}
                        }
                    }
                    : previousResult;
            },
        }).then(() => handlePreviousPage())
    };

    return (
        <S.Wrapper>
            <S.ListWrapper>
                {data?.allPlanets.edges.map(edge => {
                    return (
                        <Planet key={edge.planet.id} data={edge.planet}
                                navigateTo={() => navigateToPlanet(edge.planet.id)}/>
                    )
                })}
            </S.ListWrapper>
            <Pagination loading={loading} hasNextPage={data?.allPlanets.pageInfo.hasNextPage} hasPreviousPage={data?.allPlanets.pageInfo.hasPreviousPage} page={page} nextPage={nextPage}
                        prevPage={prevPage}/>
        </S.Wrapper>
    );
};

export default PlanetList;
