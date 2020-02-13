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
        <div className="asd">
            {console.log('data', data)}
            <h1>Planet Details</h1>
            <p>asdasd</p>
            <p>asdasd</p>
        </div>
    );
};

export default PlanetDetails;