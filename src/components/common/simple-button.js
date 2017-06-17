import React     from 'react';
import PropTypes from 'prop-types';

const SimpleButton = ({children, whenClicked, classNames, inputType, ...rest }) =>
    (
        <button
            onClick   = {whenClicked}
            className = {`${classNames}`}
            type      = {inputType ? inputType : "button"}
            {...rest}
        >
            {children}
        </button>
    );


SimpleButton.propTypes = {
    whenClicked : PropTypes.func,
    classNames  : PropTypes.string.isRequired
};

export default SimpleButton;

