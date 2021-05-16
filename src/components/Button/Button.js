import React from "react";
import "./Button.css";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

function Button(props) {
    const { variant = "primary", children, ...rest } = props;
    return (
        <button className={`button ${variant}`} {...rest}>
            {children}
        </button>
    );
}

export default Button;
