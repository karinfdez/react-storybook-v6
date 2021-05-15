import React from "react";

function Input(props) {
    const inputRef = React.createRef();
    const {
        type = "text",
        size = "medium",
        placeholder = "Enter text here",
    } = props;
    return (
        <label>
            <input
                className={`input ${size}`}
                type={type}
                size={size}
                ref={inputRef}
                placeholder={placeholder}
            />
        </label>
    );
}

export default Input;
