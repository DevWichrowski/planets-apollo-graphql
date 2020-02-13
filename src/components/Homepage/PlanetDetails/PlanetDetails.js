import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/react-hooks";
import {GET_PLANET_DETAILS} from "../../../core/graphql/queries/planet-details.query";

const PlanetDetails = (props) => {
    let {id} = useParams();
    const {data, loading, error, fetchMore} = useQuery(GET_PLANET_DETAILS, {
        variables: {
            id: id,
        },
        notifyOnNetworkStatusChange: true
    });

    return (
        <div>
            <h1>Planet Details</h1>
        </div>
    );
};

export default PlanetDetails;