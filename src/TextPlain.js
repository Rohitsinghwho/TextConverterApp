import React from "react";
import { useState } from "react";
export default function TextPlain() {
  const [text, settext] = useState("Hey This is a Dummy Text!");
  //fucntion to convert to uppercase
  const ConvertUpper = () => {
    settext(text.toUpperCase());
  };
  //fucntion to convert in lowercase
  const ConvertLower = () => {
    settext(text.toLowerCase());
  };
  // Adding additonal values in the textarea
  const HandleOnchangeText = (e) => {
    settext(e.target.value);
  };
  return (
    <>
      <div className="container my-5">
        <div className="form-floating">
          <textarea
            className="form-control"
            value={text}
            onChange={HandleOnchangeText}
            id="floatingTextarea"
          ></textarea>
        </div>

        <div className="container my-5 text-center">
          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={ConvertUpper}
          >
            UpperCase
          </button>
          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={ConvertLower}
          >
            LowerCase
          </button>
        </div>
        <p>
          Total letters with spaces are {text.length} and total words are
          {text.split(" ").length}
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
