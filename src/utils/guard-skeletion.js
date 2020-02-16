import React from 'react';
import SkeletonLoading from "../components/shared/SkeletonLoading/SkeletonLoading";


export const guardSkeleton = value => {
    if (value === null) {
        return 'unknown'
    }

    if (value === undefined) {
        return (
            <SkeletonLoading/>
        )
    }

    return value;
};
