import React     from 'react';
import PropTypes from 'prop-types';

const SpinButton = ({ whenClicked, classNames, inputType, showSpinner, spinText, buttonText, ...rest }) =>
    (
        <button
            onClick   = {whenClicked}
            className = {`${classNames}`}
            type      = {inputType ? inputType : "button"}
            disabled  = {showSpinner}
            {...rest}
        >
            {
                showSpinner
                    ? <i className = "fa fa-spinner fa-pulse"></i>
                    : null
            }
            {
                showSpinner
                    ? ` ${spinText}`
                    : buttonText
            }
        </button>
    );

SpinButton.propTypes = {
    whenClicked : PropTypes.func,
    classNames  : PropTypes.string.isRequired,
    showSpinner : PropTypes.bool.isRequired,
    spinText    : PropTypes.string.isRequired,
    buttonText  : PropTypes.string.isRequired
};

export default SpinButton;

