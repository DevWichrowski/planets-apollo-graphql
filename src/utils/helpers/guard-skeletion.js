import React from 'react';
import Skeleton from 'react-loading-skeleton';
import SkeletonTheme from "react-loading-skeleton/lib/skeleton-theme";
import SkeletonLoading from "../../components/shared/SkeletonLoading/SkeletonLoading";


export const guardSkeleton = value => {
    if (value === null) {
        return 'unknown'
    }

    if (value === undefined) {
        return (
         <SkeletonLoading />
        )
    }

    return value;
};
