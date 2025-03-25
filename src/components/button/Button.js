import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
const Button = ({ label, primary, onClick }) => {
    const className = primary ? 'button-primary' : 'button-secondary';
    return (
        <button className={className} onClick={onClick}>
            {label}
        </button>
    );
};
Button.propTypes = {
    label: PropTypes.string.isRequired,
    primary: PropTypes.bool,
    onClick: PropTypes.func,
};
Button.defaultProps = {
    primary: false,
    onClick: () => alert('Button clicked!'),
};
export default Button;