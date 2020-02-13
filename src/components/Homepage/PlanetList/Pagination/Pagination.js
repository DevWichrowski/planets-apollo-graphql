import React from 'react';

const Pagination = ({data, loading, page, nextPage, prevPage}) => {
    return (
        <div>
            {page > 1 && <button onClick={prevPage}>{'<='}</button>}
            <h2>{page}</h2>
            {data?.allPlanets.pageInfo.hasNextPage && <button onClick={nextPage}>{'=>'}</button>}
        </div>
    );
};

export default Pagination;