import React from 'react';
import * as S from "../Button/Button.styled";
import PropTypes from 'prop-types';


const Button = ({onClick, children, next}) => {
    return (
        <S.Button next={next ?? null} onClick={onClick ?? null}>{children}</S.Button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
    next: PropTypes.string
};

export default Button;
