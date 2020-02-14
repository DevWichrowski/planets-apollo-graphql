import React from 'react';
import * as Style from "./Pagination.styles";


const Pagination = ({hasNextPage, loading, page, nextPage, prevPage}) => {
    return (
        <Style.Wrapper>
            {page === 1 && <Style.Placeholder/>}
            {page > 1 && <Style.Button onClick={prevPage}>Previous page</Style.Button>}
            <Style.PageNumber>{page}</Style.PageNumber>
            {(hasNextPage || loading) ?
                <Style.Button next onClick={nextPage}>Next page</Style.Button> : <Style.Placeholder/>}
        </Style.Wrapper>
    );
};

export default Pagination;