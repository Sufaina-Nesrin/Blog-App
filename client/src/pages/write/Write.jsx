import React, { useContext, useState } from "react";
import "./Write.css";
import axios from "axios";
import { Context } from "../../context/Context";

function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState(" ");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);

      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    await axios
      .post("/posts", newPost)
      .then((res) => {
        console.log(res);
        window.location.replace("/post/" + res.data._id); //to display the newly created post
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="write">
      {file && (
        <img src={URL.createObjectURL(file)} alt="" className="writeImg" />
      )}

      <form action="" onSubmit={handleSubmit} className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            className="writeInput"
            style={{ display: "none" }}
            id="fileInput"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="writeInput"
            placeholder="Title"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            className="writeInput writeText"
            placeholder="Tell your story..."></textarea>
        </div>
        <div className="writeSubmitContainer">
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}

export default Write;
