import React from 'react';
import * as Style from "./Pagination.styled";
import Button from "../Button/Button";
import PropTypes from 'prop-types';

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

Pagination.propTypes = {
    hasNextPage: PropTypes.bool.isRequired,
    page: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    nextPage: PropTypes.func.isRequired,
    prevPage: PropTypes.func.isRequired
};

export default Pagination;
