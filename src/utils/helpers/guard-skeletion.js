import React from 'react';
import Skeleton from 'react-loading-skeleton';
import SkeletonTheme from "react-loading-skeleton/lib/skeleton-theme";


export const guardSkeleton = value => {
    if (value === null) {
        return 'Unknown'
    }

    if (value === undefined) {
        return (
            <SkeletonTheme color="#202020" highlightColor="#444">
                <p>
                    <Skeleton height={15}/>
                </p>
            </SkeletonTheme>
        )
    }

    return value;
};
