import React from "react";
import "./SinglePost.css";

function SinglePost(props) {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="../../assets/post5.jpg" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum sit amen
          <div className="singlePostEditContainer">
            <i className="singlePostIcon edit fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon delete fa-solid fa-trash"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="authorName">
            Author: <b>Ann Joana</b>
          </span>
          <span className="singlePostTime">1 hour ago</span>
        </div>
        <p className="singlePostDecription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae
          justo ut mauris auctor congue. Pellentesque mattis imperdiet diam at
          tincidunt. Pellentesque finibus turpis nisi. Nulla vitae ornare dui.
          Praesent laoreet lobortis justo sed fermentum. Donec sed rutrum lorem.
          Sed varius diam augue, at venenatis metus venenatis in. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Aenean vitae justo ut
          mauris auctor congue. Pellentesque mattis imperdiet diam at tincidunt.
          Pellentesque finibus turpis nisi. Nulla vitae ornare dui. Praesent
          laoreet lobortis justo sed fermentum. Donec sed rutrum lorem. Sed
          varius diam augue, at venenatis metus venenatis in. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Aenean vitae justo ut mauris
          auctor congue. Pellentesque mattis imperdiet diam at tincidunt.
          Pellentesque finibus turpis nisi. Nulla vitae ornare dui. Praesent
          laoreet lobortis justo sed fermentum. Donec sed rutrum lorem. Sed
          varius diam augue,
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
