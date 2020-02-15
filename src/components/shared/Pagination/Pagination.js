import React from 'react';
import * as Style from "./Pagination.styles";
import Button from "../Button/Button";


const Pagination = ({hasNextPage, loading, page, nextPage, prevPage}) => {
    return (
        <Style.Wrapper>
            {page === 1 && <Style.Placeholder/>}
            {page > 1 && <Button onClick={prevPage}>Previous page</Button>}
            <Style.PageNumber>{page}</Style.PageNumber>
            {(hasNextPage || loading) ?
                <Button next onClick={nextPage}>Next page</Button> : <Style.Placeholder/>}
        </Style.Wrapper>
    );
};

export default Pagination;