import React from 'react';
import * as S from "./InfoBox.styled";
import PropTypes from 'prop-types';
import {guardSkeleton} from "../../../utils/guard-skeletion";


const InfoBox = ({headerText, value}) => {
    return (
        <S.InfoElement>
            <S.InfoHeader>
                {headerText}
            </S.InfoHeader>
            <S.InfoData>
                {guardSkeleton(value)}
            </S.InfoData>
        </S.InfoElement>
    );
};

InfoBox.propTypes = {
    headerText: PropTypes.string.isRequired,
    value: PropTypes.any
};

export default InfoBox;