import React from "react";
import PropTypes from "prop-types";
import "./Link.css";

const Link = ({ href, children, dark }) => {
    const className = dark ? "link-dark" : "link-default";

    return (
        <a href={href} className={"link " + className}>{children}</a>
    );
}

Link.propTypes = {
    href: PropTypes.string,
    children: PropTypes.string.isRequired,
    dark: PropTypes.bool
}

Link.defaultProps = {
    href: "#",
    dark: false
}

export default Link;