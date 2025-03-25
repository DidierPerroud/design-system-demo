import React from "react";
import PropTypes from "prop-types";
import "./Title.css";

const Title = ({ children, large }) => {
    const className = large ? "title-large" : "title-medium";

    return (
        <h1 className={className}>{children}</h1>
    );
}

Title.propTypes = {
    children: PropTypes.string.isRequired,
    large: PropTypes.bool
}

Title.defaultProps = {
    large: true
}

export default Title;