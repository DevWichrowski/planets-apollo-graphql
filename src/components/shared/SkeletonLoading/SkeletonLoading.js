import React from 'react';
import Skeleton, {SkeletonTheme} from "react-loading-skeleton/lib";
import PropTypes from "prop-types";
import {skeletonColor, skeletonHighlightColor} from "../../../styles/colors";


const SkeletonLoading = ({height, count}) => {
    return (
        <SkeletonTheme color={skeletonColor} highlightColor={skeletonHighlightColor}>
            <p>
                <Skeleton height={height ?? 15} count={count ?? 1}/>
            </p>
        </SkeletonTheme>
    );
};

SkeletonLoading.propTypes = {
    height: PropTypes.number,
    count: PropTypes.number
};


export default SkeletonLoading;
