import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handelUpClick = () => {
    setText(text.toUpperCase());
  };
  const handelOnchange = (event) => {
    setText(event.target.value);
    console.log(text.length);
  };
  const handelCopyToClipboardClick = (event) => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Copied to clipboard"))
      .catch(() => alert("Some Issue Occurred!"));

    document.title = "Copy To Clopboard";

    setInterval(() => {
      document.title = "Copy To Clopboard";
    }, 2000);
    setInterval(() => {
      document.title = "Clopboard";
    }, 1500);
  };
  return (
    <div className="pl-14">
      <div className="mb-5 container">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Enter Text Here
        </label>
        <textarea
          value={text}
          id="mybox"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Type Here ....."
          onChange={handelOnchange}
          required
        />
        <button
          type="button"
          className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-2"
          onClick={handelUpClick}
        >
          Convert To Uppercase
        </button>
        <button
          type="button"
          className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-2"
          onClick={handelCopyToClipboardClick}
        >
          Copy to Clipboard
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} Words and {text.length} characters
        </p>
        <p>{0.008 * text.length} mins to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
