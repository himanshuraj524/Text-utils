import React, { useState } from 'react'

export default function TextForm(props) {

    const[text, setText] = useState("");

    // text change handler -> add the text as user type into the textArea.
    const onChangeHandler = (event)=>{
        setText(event.target.value);
    }

    // click handler on button to change entered text into uppercase.
    const upperCaseHandler = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        props.alert("converted to uppercase", "success");
    }

    // click handler on button to change entered text into uppercase.
    const lowerCaseHandler = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.alert("converted to lowercase", "success");
    }

     // click handler on button to change entered text into uppercase.
     const clearTextHandler = ()=> {
        let newText = '';
        setText(newText);
        props.alert("text cleared", "success");
    }

    //copy text to clipboard handler.
    const copyTextHandler = ()=>{
        navigator.clipboard.writeText(text).then(function() {
            props.alert('Copying to clipboard was successful!', 'success');
          }, function(err) {
            props.alert('Could not copy text: ', 'danger');
          });
    };

    // palindrome handler.
    const checkPalindromeHandler = () => {
        if(text===text.split("").reverse().join("")){
            props.alert("Its a palindrome.", "success");
        }
        else{
            props.alert("Not a palindrome!", "warning")
        }
    };

    // Handler to remove extra spaces.
    const removeExtraSpaceHandler = () => {
        let newText = text.split(/[ ]+/).join(" ");;
        setText(newText);
        props.alert("extra space removed", "success");
    };

    return (
        <>
            <div className="mb-3" style={{color:props.mode==='light'?'#212529':'white'}}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'#212529', color:props.mode==='light'?'#212529':'white'}} value={text} onChange={onChangeHandler} id="myBox" rows="8"></textarea>
                <button className="btn btn-primary mt-3 mx-1" onClick={upperCaseHandler}>Convert to upper case</button>
                <button className="btn btn-primary mt-3 mx-1" onClick={lowerCaseHandler}>Convert to lower case</button>
                <button className="btn btn-primary mt-3 mx-1" onClick={clearTextHandler}>Clear Text</button>
                <button className="btn btn-primary mt-3 mx-1" onClick={copyTextHandler}>Copy Text</button>
                <button className="btn btn-primary mt-3 mx-1" onClick={checkPalindromeHandler}>Check Palindrome</button>
                <button className="btn btn-primary mt-3 mx-1" onClick={removeExtraSpaceHandler}>Remove Extra Space</button>
            </div>
            <div className="container my-2" style={{color:props.mode==='light'?'#212529':'white'}}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter(elem => elem.length !== 0).length} Words, {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter(elem => elem.length !== 0).length} Minutes to read.</p>
            </div>

            <div className="container my-2" style={{color:props.mode==='light'?'#212529':'white'}}>
                <h2>Preview</h2>
                <p>{text.length === 0 ? "Nothing to Preview it here..." : text}</p>
            </div>
        </>
    )
}
