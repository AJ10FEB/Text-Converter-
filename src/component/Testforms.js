import React, { useState } from "react";

export default function Testforms(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showalert(" Converted to uppercase", "success")
  }
  const handleLoClick = () => {
    //console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
     props.showalert(" Converted to lowercase", "success")
  }
  const handleCleartext = () => {
    //console.log("clear text was clicked" + text);
    let newText = '';
    setText(newText)
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value)
  }

  const [text, setText] = useState("");
  //text ="new text";//wrong way to change the state
  //setText =("new text");//correct way to change the state
  return (
    <>
      <div classname="container">
        <h1>{props.heading}</h1>

        <div class="mb-3">
          <textarea
            class="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCleartext}>
          Clear Text
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
        >
          Speak
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
