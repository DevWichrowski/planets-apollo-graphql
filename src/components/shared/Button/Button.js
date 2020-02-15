import React from 'react';
import * as Style from "../Button/Button.styled";
import PropTypes from 'prop-types';


const Button = ({onClick, children, next}) => {
    return (
        <Style.Button next={next ?? null} onClick={onClick ?? null}>{children}</Style.Button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
    next: PropTypes.string
};

export default Button;
