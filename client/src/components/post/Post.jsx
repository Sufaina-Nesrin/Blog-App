import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";
function Post({post}) {
  const PF = 'http://localhost:5000/images/'
  return (
    <div className="post">
      {post.photo?<img src={PF+post.photo} className="posting"/>:<img src="../../assets/post5.jpg" alt="" className="posting" />}
      <div className="div postInfo">
        <div className="postCats">
          {post.categories.map((cat)=>(
                <span className="postCat">{cat.name}</span>
          ))}
          
          
        </div>
        <Link to={`/post/${post._id}`}className='link'><span className="postTitle">{post.title}</span></Link>
        
        <hr></hr>
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        <span className="postDesc">
    {post.desc}
        </span>
      </div>
    </div>
  );
}

export default Post;
