import React, { useContext, useEffect, useState } from "react";
import "./SinglePost.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Context } from "../../context/Context";

function SinglePost(props) {
  const {user} = useContext(Context)

  const PF = 'http://localhost:5000/images/'

  const location = useLocation()
 const postId = location.pathname.split("/")[2]
  const [post, setPost] = useState({})
  const [title, setTitle] = useState("");
  const [desc, setDesc] =useState("")
  const [updateMode, setUpdateMode] = useState(false)
  const [username, setUsername] = useState('')

   const handleDelete = async()=>{
    await axios.delete('/posts/'+post._id,
    {data:
      {username:user.username}}).then((res)=>{
      console.log(res)
      window.location.replace('/')
      
    }).catch((err)=>{
      console.log(err)

    })

   }

 useEffect(()=>{
  const getPost = async ()=>{
    const res =await axios.get("/posts/"+postId)
  setPost(res.data)
  setTitle(res.data.title);
  setDesc(res.data.desc)
    
  }

  const getUser = async ()=>{
   await axios.get("/users/"+post.userId).then((user)=>{

   setUsername(user.data.username);
    }).catch((err)=>{
      console.log(err);
    })
  }
  

  getPost()
  getUser()

 },[postId,post.userId])


 const handleUpdate = async()=>{
  await axios.put('/posts/'+post._id,
 
    {username:user.username,title,desc
    }).then((res)=>{
  
    // window.location.reload()
    setUpdateMode(false)
    
  }).catch((err)=>{
    console.log(err)

  })
 }
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo?<img src={PF+post.photo} className="singlePostImg"/>:<img src="../../assets/post5.jpg" alt="" className="singlePostImg" />}


        {updateMode?<input type='text' value={title} autoFocus={true} 
       onChange={(e)=>setTitle(e.target.value)} className='singlePostTitleInput'/>:(
         <h1 className="singlePostTitle">
         {post.title}
         {post.userId===user?._id &&(
           <div className="singlePostEditContainer">
           <i className="singlePostIcon edit fa-regular fa-pen-to-square" onClick={()=>setUpdateMode(true)}></i>
           <i className="singlePostIcon delete fa-solid fa-trash "onClick={handleDelete}></i>
         </div>
         )}
         
       </h1>
        )}
        

        <div className="singlePostInfo">
          <span className="authorName">
            Author: 
            <Link to ={`/?user=${post.userId}`} className="link"><b>{username}</b></Link>
            
          </span>
          <span className="singlePostTime">{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode?<input type='text' value={desc} onChange={(e)=>setDesc(e.target.value)} className="singlePostDescInput"/>:<p className="singlePostDecription">
         {post.desc}
        </p>}
        {updateMode && <button className="singlePostButton" onClick={handleUpdate}>UPDATE</button>}
        
        
      </div>
    </div>
  );
}

export default SinglePost;
