import React from "react";

function Input(props) {
    const inputRef = React.createRef();
    const { type = "text", size = "medium", ...rest } = props;
    return (
        <label>
            Sample input:
            <input
                className={`input ${size}`}
                type={type}
                size={size}
                ref={inputRef}
            />
        </label>
    );
}

export default Input;
