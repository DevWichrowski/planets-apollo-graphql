import React from 'react';
import {useQuery} from "@apollo/react-hooks";
import {GET_ALL_PLANETS} from "../../../../core/graphql/queries/planets.query";

const Pagination = ({data, nextPage, prevPage}) => {
    useQuery(GET_ALL_PLANETS, {
        variables: {
            after: data.allPlanets.pageInfo.endCursor
        },
        onCompleted: (resp) => data = resp
    });

    return (
        <div>
            <button onClick={prevPage}>{'<='}</button>
            <h2>2</h2>
            <button onClick={nextPage}>{'=>'}</button>
        </div>
    );
};

export default Pagination;