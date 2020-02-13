import React from 'react';

const Pagination = ({loading, page, nextPage, prevPage, hasNextPage}) => {
    return (
        <div>
            {true ? <button onClick={prevPage}>{'<='}</button> : null}
            <h2>{page}</h2>
            {true ? <button onClick={nextPage}>{'=>'}</button> : null}
        </div>
    );
};

export default Pagination;