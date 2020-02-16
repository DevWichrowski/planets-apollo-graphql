import React from 'react';
import * as S from "./Pagination.styled";
import Button from "../Button/Button";
import PropTypes from 'prop-types';

const Pagination = ({hasNextPage, hasPreviousPage, loading, page, nextPage, prevPage}) => {
    return (
        <S.Wrapper>
            {page === 1 && <S.Placeholder/>}
            {hasPreviousPage && <Button onClick={prevPage}>Previous page</Button>}
            <S.PageNumber>{page}</S.PageNumber>
            {(hasNextPage || loading) ?
                <Button next onClick={nextPage}>Next page</Button> : <S.Placeholder/>}
        </S.Wrapper>
    );
};

Pagination.propTypes = {
    hasNextPage: PropTypes.bool,
    hasPreviousPage: PropTypes.bool,
    page: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    nextPage: PropTypes.func.isRequired,
    prevPage: PropTypes.func.isRequired
};

export default Pagination;
