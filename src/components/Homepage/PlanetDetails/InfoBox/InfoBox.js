import React from 'react';
import * as S from "./InfoBox.styled";
import Skeleton from "react-loading-skeleton/lib";
import PropTypes from 'prop-types';


const InfoBox = ({headerText, value}) => {
    return (
        <S.InfoElement>
            <S.InfoHeader>
                {headerText}
            </S.InfoHeader>
            <S.InfoData>
                {value ?? <Skeleton/>}
            </S.InfoData>
        </S.InfoElement>
    );
};

InfoBox.propTypes = {
    headerText: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
};

export default InfoBox;