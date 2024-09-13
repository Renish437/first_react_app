import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const bodyStyle = {
    backgroundColor: props.mode === "dark" ? "rgb(150, 170, 250)" : "white",
    textboxColor: props.mode === "dark" ? "rgb(119, 127, 157)" : "white",
    color: props.mode === "dark" ? "white" : "black",
  };

  useEffect(() => {
    // Apply body styles based on mode
    document.body.style.backgroundColor = bodyStyle.backgroundColor;
    document.body.style.color = bodyStyle.color;
  }, [props.mode]);

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };

  const handleCopyClick = () => {
    const textArea = document.getElementById("exampleFormControlTextarea1");
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    props.showAlert("Copied to Clipboard", "success");
  };

  const handleExtraSpaces = () => {
    setText(text.split(/[ ]+/).join(" "));
    props.showAlert("Extra Spaces removed", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCapitalize = () => {
    const newText = text
      .split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("First Word Converted to UpperCase", "success");
  };

  return (
    <>
      <div className="container" style={bodyStyle}>
        <h1 className="text-center my-4" style={{ color: bodyStyle.color }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="13"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: bodyStyle.textboxColor,
              color: bodyStyle.color,
            }}
          ></textarea>
        </div>
        <div
          className={`btn btn-${
            props.mode === "dark" ? "warning bg-gradient" : "dark"
          }  `}
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </div>
        <div
          className={`btn btn-${
            props.mode === "dark" ? "warning bg-gradient" : "dark"
          } m-3`}
          onClick={handleLowClick}
        >
          Convert to LowerCase
        </div>
        <div
          className={`btn btn-${
            props.mode === "dark" ? "warning bg-gradient" : "dark"
          } m-3`}
          onClick={handleClearClick}
        >
          Clear
        </div>
        <div
          className={`btn btn-${
            props.mode === "dark" ? "warning bg-gradient" : "dark"
          } m-3`}
          onClick={handleCopyClick}
        >
          Copy
        </div>
        <div
          className={`btn btn-${
            props.mode === "dark" ? "warning bg-gradient" : "dark"
          } m-3`}
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </div>
        <div
          className={`btn btn-${
            props.mode === "dark" ? "warning bg-gradient" : "dark"
          } m-3`}
          onClick={handleCapitalize}
        >
          Capitalize First Word
        </div>
      </div>

      <div className="container " style={bodyStyle}>
        <div className=" my-3">
          <h1 style={{ color: bodyStyle.color }}>Your Text Summary</h1>
          <h5 className="my-4" style={{ color: bodyStyle.color }}>
            {text.split(" ").filter(Boolean).length} Words & {text.length}{" "}
            Characters
          </h5>
          <h5 style={{ color: bodyStyle.color }}>
            {0.008 * text.split(" ").filter(Boolean).length} Minutes to read
          </h5>

          {/* <div className="m-4 space-x-3">
            <h5 style={{ color: bodyStyle.color }}>
              {text.split(".").filter(Boolean).length} Full stop ending
              sentences
            </h5>
            <h5 style={{ color: bodyStyle.color }}>
              {text.split("?").filter(Boolean).length} Question Mark ending
              sentences
            </h5>
            <h5 style={{ color: bodyStyle.color }}>
              {text.split("!").filter(Boolean).length} Exclamatory ending
              sentences
            </h5>
          </div> */}
        </div>
        <div className="container-fluid my-4 ">
          <h2 className="  " style={{ color: bodyStyle.color }}>
            Preview
          </h2>
          <p className="" style={{ color: bodyStyle.color }}>
            {text.length > 0
              ? text
              : "Enter something in textbox to preview here "}
          </p>
        </div>
      </div>
    </>
  );
}
