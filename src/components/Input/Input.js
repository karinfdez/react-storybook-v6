import React from "react";

function Input(props) {
    const inputRef = React.createRef();
    const { variant = "text", placeholder = "Enter text here" } = props;
    return (
        <label>
            Sample input:
            <input defaultValue={placeholder} type={variant} ref={inputRef} />
        </label>
    );
}

export default Input;
