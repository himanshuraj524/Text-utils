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

     // click handler on button to change entered text into uppercase.
     const clearTextHandler = ()=> {
        let newText = '';
        setText(newText);
    }

    //copy text to clipboard handler.
    const copyTextHandler = ()=>{
        navigator.clipboard.writeText(text).then(function() {
            alert('Copying to clipboard was successful!');
          }, function(err) {
            alert('Could not copy text: ', err);
          });
    };

    // palindrome handler.
    const checkPalindromeHandler = () => {
        if(text===text.split("").reverse().join("")){
            alert("Its a palindrome.");
        }
        else{
            alert("Not a palindrome!")
        }
    };

    // Handler to remove extra spaces.
    const removeExtraSpaceHandler = () => {
        let newText = text.split(/[ ]+/).join(" ");;
        setText(newText);
    };

    return (
        <>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={onChangeHandler} id="myBox" rows="8"></textarea>
                <button className="btn btn-primary mt-3 mx-1" onClick={upperCaseHandler}>Convert to upper case</button>
                <button className="btn btn-primary mt-3 mx-1" onClick={lowerCaseHandler}>Convert to lower case</button>
                <button className="btn btn-primary mt-3 mx-1" onClick={clearTextHandler}>Clear Text</button>
                <button className="btn btn-primary mt-3 mx-1" onClick={copyTextHandler}>Copy Text</button>
                <button className="btn btn-primary mt-3 mx-1" onClick={checkPalindromeHandler}>Check Palindrome</button>
                <button className="btn btn-primary mt-3 mx-1" onClick={removeExtraSpaceHandler}>Remove Extra Space</button>
            </div>
            <div className="container my-2">
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter(elem => elem.length !== 0).length} Words, {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter(elem => elem.length !== 0).length} Minutes to read.</p>
            </div>

            <div className="container my-2">
                <h2>Preview</h2>
                <p>{text.length === 0 ? "Nothing to Preview it here..." : text}</p>
            </div>
        </>
    )
}
