import React, {useEffect, useState} from 'react';
import {useQuery} from "@apollo/react-hooks";
import {GET_ALL_PLANETS} from "../../../core/graphql/queries/planets.query";
import Planet from "./Planet/Planet";
import Pagination from "../../shared/Pagination/Pagination";
import {useHistory} from 'react-router-dom';
import * as S from "./PlanetList.styled";
import {getSessionStorageItem} from "../../../utils/helpers/get-session-storage-item";
import {setSessionStorageItem} from "../../../utils/helpers/set-session-storage-item";

const PlanetList = () => {
    const history = useHistory();

    const [page, setPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(false);

    const {data, loading, fetchMore} = useQuery(GET_ALL_PLANETS, {
        variables: {
            first: 10,
            cursor: getSessionStorageItem('cursor') ?? null
        },
        notifyOnNetworkStatusChange: true
    });

    useEffect(() => {
        setPage(getSessionStorageItem('page'))
    }, []);

    useEffect(() => {
        if (data) {
            setHasNextPage(data?.allPlanets?.pageInfo.hasNextPage)
        }
        console.log('hasNextPage', hasNextPage)
    }, [data]);


    const navigateToPlanet = id => {
        history.push(`/planet/${id}`);
        setSessionStorageItem('page', page);
        setSessionStorageItem('cursor', data.allPlanets.pageInfo.endCursor);
    };

    const handleNextPage = () => {
        setPage(page + 1)
        setSessionStorageItem('page', page + 1)
    };

    const handlePreviousPage = () => {
        setPage(page - 1);
        setHasNextPage(true);
        setSessionStorageItem('page', page - 1)
    };

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
                            pageInfo
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
                            pageInfo
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
            <Pagination loading={loading} hasNextPage={hasNextPage} page={page} nextPage={nextPage}
                        prevPage={prevPage}/>
        </S.Wrapper>
    );
};

export default PlanetList;
