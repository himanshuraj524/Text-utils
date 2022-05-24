import React, { useState } from 'react'

export default function TextForm(props) {

    const[text, setText] = useState("Enter text here...");

    // text change handler -> add the text as user type into the textArea.
    const onChangeHandler = (event)=>{
        setText(event.target.value);
    }

    // click handler on button to change entered text into uppercase.
    const upperCaseHandler = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
    }

    // click handler on button to change entered text into uppercase.
    const lowerCaseHandler = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
    }
    return (
        <>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={onChangeHandler} id="myBox" rows="8"></textarea>
                <button className="btn btn-primary mt-3 mx-1" onClick={upperCaseHandler}>Convert to upper case</button>
                <button className="btn btn-primary mt-3 mx-1" onClick={lowerCaseHandler}>Convert to lower case</button>
            </div>
            <div className="container my-2">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read.</p>
            </div>

            <div className="container my-2">
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
