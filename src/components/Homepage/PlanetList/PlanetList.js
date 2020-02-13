import React, {useState} from 'react';
import {useQuery} from "@apollo/react-hooks";
import {GET_ALL_PLANETS} from "../../../core/graphql/queries/planets.query";
import Planet from "./Planet/Planet";
import Pagination from "./Pagination/Pagination";

const PlanetList = () => {
    const [page, setPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(false);

    const {data, loading, error, fetchMore} = useQuery(GET_ALL_PLANETS, {
        variables: {
            first: 10,
        },
        notifyOnNetworkStatusChange: true
    });

    const nextPage = () => {
        fetchMore({
            variables: {
                after: data.allPlanets.pageInfo.endCursor,
                first: 10,
                last: null
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
        }).then(() => setPage(page + 1))
    };

    const prevPage = () => {
        fetchMore({
            variables: {
                last: 10,
                before: data.allPlanets.pageInfo.startCursor,
            },
            updateQuery: (previousResult, {fetchMoreResult}) => {
                console.log('fetchMoreResult', fetchMoreResult);
                console.log('previousResult', previousResult);
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
            }
        }).then(() => setPage(page - 1)
        )
    };

    return (
        <div>
            <h1>Planet Lists</h1>
            <Pagination data={data} page={page} nextPage={nextPage} prevPage={prevPage} hasNextPage={hasNextPage}
                        loading={loading}/>
            {data &&
            data.allPlanets &&
            data.allPlanets.edges &&
            data.allPlanets.edges.map(edge => {
                return (
                    <Planet key={edge.planet.id} data={edge.planet}/>
                )
            })}
        </div>
    );
};

export default PlanetList;