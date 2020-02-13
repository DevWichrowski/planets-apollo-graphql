import React from 'react';
import * as Style from "./Pagination.styles";
import {getPages} from "../../../utils/helpers/get-pages";

const Pagination = ({data, loading, page, nextPage, prevPage}) => {
    return (
        <Style.Wrapper>
            {page > 1 && <Style.Button onClick={prevPage}>Previous page</Style.Button>}
            <Style.PageNumber>{page}</Style.PageNumber>
            {page < getPages(data?.allPlanets.totalCount) &&
            <Style.Button next onClick={nextPage}>Next page</Style.Button>}
        </Style.Wrapper>
    );
};

export default Pagination;