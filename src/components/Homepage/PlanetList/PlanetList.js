import React from 'react';
import {useQuery} from "@apollo/react-hooks";
import {GET_ALL_PLANETS} from "../../../core/graphql/queries/planets.query";
import Planet from "./Planet/Planet";
import Pagination from "./Pagination/Pagination";

const PlanetList = () => {

    const {data, loading, error, fetchMore} = useQuery(GET_ALL_PLANETS);

    if (error) return <p>ERROR</p>;
    if (loading) return <p>Loading...........</p>;

    const nextPage = () => {
        fetchMore({
            variables: {
                after: data.allPlanets.pageInfo.endCursor,
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
            }
        })
    };

    const prevPage = () => {
        fetchMore({
            variables: {
                before: data.allPlanets.pageInfo.startCursor,
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
            }
        })
    };

    return (
        <div>
            <h1>Planet Lists</h1>
            <Pagination data={data} nextPage={nextPage} prevPage={prevPage}/>
            {loading ? <h1>Loading...</h1> : null}
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