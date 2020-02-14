import React, {useEffect, useState} from 'react';
import {useQuery} from "@apollo/react-hooks";
import {GET_ALL_PLANETS} from "../../../core/graphql/queries/planets.query";
import Planet from "./Planet/Planet";
import Pagination from "../../shared/Pagination/Pagination";
import {useHistory} from 'react-router-dom';
import * as Style from "./PlanetList.style";

const PlanetList = () => {
    const history = useHistory();

    const [page, setPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(false);

    const {data, loading, fetchMore} = useQuery(GET_ALL_PLANETS, {
        variables: {
            first: 10,
        },
        notifyOnNetworkStatusChange: true
    });

    useEffect(() => {
        if (data) {
            setHasNextPage(data?.allPlanets?.pageInfo.hasNextPage)
        }

    }, [data]);

    const navigateToPlanet = id => {
        history.push(`/planet/${id}`)
    };

    const handleNextPage = () => setPage(page + 1);

    const handlePreviousPage = () => {
        setPage(page - 1);
        setHasNextPage(true);
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
        <div style={{position: 'relative', height: '100%'}}>
            <Style.Wrapper>
                {data?.allPlanets.edges.map(edge => {
                    return (
                        <Planet key={edge.planet.id} data={edge.planet}
                                navigateTo={() => navigateToPlanet(edge.planet.id)}/>
                    )
                })}
            </Style.Wrapper>
            <Pagination loading={loading} hasNextPage={hasNextPage} page={page} nextPage={nextPage}
                        prevPage={prevPage}/>
        </div>
    );
};

export default PlanetList;