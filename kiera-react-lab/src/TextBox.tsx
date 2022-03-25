import React from 'react';

interface TextBoxProps {
    label: string;
    change: (value: string) => void;
}

function TextBox(props: TextBoxProps) {
    return (
        <div className="TextBox">
            <input type={'text'} onChange={(event) => {
                props.change(event.target.value)
            }}/>
            <label>{props.label}</label>
        </div>
    );
}

export default TextBox;