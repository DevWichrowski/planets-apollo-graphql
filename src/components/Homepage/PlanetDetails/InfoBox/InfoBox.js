import React from 'react';
import * as S from "./InfoBox.styled";
import PropTypes from 'prop-types';
import {guardSkeleton} from "../../../../utils/helpers/guard-skeletion";


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
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
};

export default InfoBox;