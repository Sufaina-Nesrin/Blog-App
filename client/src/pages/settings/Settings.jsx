import React, { useContext, useState } from "react";
import "./Settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Context } from "../../context/Context";
import axios from "axios";

function Settings() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.Email);
  const [password, setPassword] = useState(user.password);
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);

      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    await axios
      .put("/users/" + user._id, updatedUser)
      .then((res) => {
        console.log(res);
        dispatch({ type: "UPDATE_SUCCESS", playload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "UPDATE_FAILURE" });
      });
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form action="" className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>

          <div className="settingsImgContainer">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
            />
            <label htmlFor="fileInput">
              <i class="settingsPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
