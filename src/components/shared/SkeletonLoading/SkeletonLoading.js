import React from 'react';
import Skeleton, {SkeletonTheme} from "react-loading-skeleton/lib";
import PropTypes from "prop-types";


const SkeletonLoading = ({height, count}) => {
    return (
        <SkeletonTheme color="#202020" highlightColor="#444">
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
