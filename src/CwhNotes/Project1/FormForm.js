import React, { useState } from "react";
export default function FormForm(props) {
  const bgColor = "#404041";
  let myStyle = {
    backgroundColor: props.mode === "light" ? "white" : bgColor,
    color: props.mode === "light" ? "black" : "white",
  };
  // CHANGE TO UPPER AND LOWER CASE
  // BUTTONS
  const [text, setText] = useState("");
  const convertToUpperCase = () => {
    console.log("upper case function clicked");
    if (text === "") {
      props.displayAlert("please enter some text..", "warning");
    } else {
      let newText = text.toUpperCase();
      setText(newText);
      props.displayAlert("converted to upper case", "success");
    }
  };
  const convertToLowerCase = () => {
    console.log("lower case function clicked");
    if (text === "") {
      props.displayAlert("please enter some text..", "warning");
    } else {
      let newText = text.toLowerCase();
      setText(newText);
      props.displayAlert("converted to lower case", "success");
    }
  };

  const copyToClipboard = () => {
    var text = document.getElementById("query");
    if (text === "") {
      props.displayAlert("please enter some text..", "warning");
    } else {
      text.select();
      text.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(text.value);
      // To deselct text after copying it
      document.getSelection().removeAllRanges();
      props.displayAlert("copied to clipboard!", "success");
    }
  };
  const removeExtraSpaces = () => {
    if (text === "") {
      props.displayAlert("please enter some text..", "warning");
    } else {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.displayAlert("extra spaces removed..", "success");
    }
  };
  const resetText = () => {
    setText("");
    props.displayAlert("text cleared..", "success");
  };
  // AFTER BUTTONS PREVIEW
  const onChangeOfTextArea = (event) => {
    console.log("onChange function clicked");
    setText(event.target.value);
  };
  // CALCULATE WORD COUNT
  // 1st Method
  // const calculateWords = () => {
  //   let words = 0;
  //   if (text.length !== 0) {
  //     words = text.split(" ").length;
  //   } else {
  //     words = 0;
  //   }
  //   return words;
  // };
  // 2nd Method
  const calculateWords = () => {
    let words = 0;
    words = text.split(/\s+/).filter((element) => {
      return element.length !== 0;
    }).length;
    return words;
  };

  return (
    <>
      {/* First Container */}
      <div className="container">
        <p
          style={{
            fontWeight: "bold",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          {props.heading}
        </p>
        <div className="my-3">
          <textarea
            style={myStyle}
            className="form-control my-3"
            value={text}
            id="query"
            rows={5}
            onChange={onChangeOfTextArea}
          ></textarea>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={convertToUpperCase}
          >
            Upper Case
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={convertToLowerCase}
          >
            Lower Case
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={copyToClipboard}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={removeExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={resetText}
          >
            Reset
          </button>
        </div>
      </div>
      {/* Second Container */}
      <div className="container my-3">
        {/* Calculate chars, words and minutes to read */}
        <p
          style={{
            fontWeight: "bold",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          Your Text Summary
        </p>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          {calculateWords()} words and {text.length} characters
        </p>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          Takes around {0.008 * calculateWords()} minutes to read
        </p>
        {/* Preview */}
        <p
          style={{
            fontWeight: "bold",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          Preview
        </p>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          {text.length > 0 ? text : "Nothing to preview!"}
        </p>
      </div>
    </>
  );
}
