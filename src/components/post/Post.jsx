import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="post">
      <img src="../../assets/post5.jpg" alt="" className="posting" />
      <div className="div postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipusum dolor sit amet</span>
        <hr></hr>
        <span className="postDate">1 hour ago</span>
        <span className="postDesc">
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
          varius diam augue, at venenatis metus venenatis in.
        </span>
      </div>
    </div>
  );
}

export default Post;
