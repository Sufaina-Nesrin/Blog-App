import React from "react";
import "./Write.css";

function Write() {
  return (
    <div className="write">
      <img src="../../assets/post5.jpg" alt="" className="writeImg" />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            className="writeInput"
            style={{ display: "none" }}
            id="fileInput"
          />
          <input
            type="text"
            className="writeInput"
            placeholder="Title"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."></textarea>
        </div>
        <div className="writeSubmitContainer">
          <button className="writeSubmit">Publish</button>
        </div>
      </form>
    </div>
  );
}

export default Write;
