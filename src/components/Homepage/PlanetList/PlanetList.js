import React, {useState} from 'react';
import {useQuery} from "@apollo/react-hooks";
import {GET_ALL_PLANETS} from "../../../core/graphql/queries/planets.query";
import Planet from "./Planet/Planet";
import Pagination from "../../shared/Pagination/Pagination";
import {useHistory} from 'react-router-dom';

const PlanetList = () => {
    const history = useHistory();

    const [page, setPage] = useState(1);

    const {data, loading, error, fetchMore} = useQuery(GET_ALL_PLANETS, {
        variables: {
            first: 10,
        },
        notifyOnNetworkStatusChange: true
    });

    const navigateToPlanet = id => {
        history.push(`/planet/${id}`)
    };

    const nextPage = () => {
        fetchMore({
            variables: {
                after: data.allPlanets.pageInfo.endCursor,
                first: 10,
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
            {/*{console.log('data', data)}*/}
            <h1>Planet Lists</h1>
            <Pagination data={data} page={page} nextPage={nextPage} prevPage={prevPage}/>
            {data?.allPlanets.edges.map(edge => {
                return (
                    <Planet key={edge.planet.id} data={edge.planet}
                            navigateTo={() => navigateToPlanet(edge.planet.id)}/>
                )
            })}
        </div>
    );
};

export default PlanetList;