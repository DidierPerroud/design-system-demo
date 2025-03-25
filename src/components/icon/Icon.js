import React from "react";
import * as LucideIcons from "lucide-react";
import PropTypes from "prop-types";
import "./Icon.css";

const Icon = ({ name, primary }) => {
    const IconComponent = LucideIcons[name] || LucideIcons.Home;
    const size = primary ? 40 : 32;
    const color = primary ? "midnightblue" : "darkred";
    const className = primary ? "icon-primary" : "icon-secondary";

    return (
        <div className={"icon " + className}>
            <IconComponent size={size} color={color} />
        </div>
    );
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    primary: PropTypes.bool
}

Icon.defaultProps = {
    primary: true
}

export default Icon;