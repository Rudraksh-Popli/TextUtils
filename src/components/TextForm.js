import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUppercaseClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };
    const handleLowercaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied To Clipboard", "success");
    }
    const handleExtraSpacesClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h3 className='my-4'>{props.heading}</h3>
                <div className="mb-3">
                    <textarea placeholder='Enter Text Here' className={`form-control ${props.mode === "dark" ? "dark-placeholder" : "light-placeholder"}`} value={text}
                        style={{ backgroundColor: props.mode === "dark" ? "black" : "white", color: props.mode === "dark" ? "white" : "black" }}
                        onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUppercaseClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowercaseClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h4>Your Text Summary</h4>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minute(s) read</p>
                <h5>Preview</h5>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
