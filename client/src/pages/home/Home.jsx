import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Topbar from "../../components/topBar/Topbar";
import "./Home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
import axios from 'axios';
import { useLocation } from "react-router-dom";


function Home() {
  const [posts, setPosts] = useState([])
  const {search} = useLocation()

  useEffect(()=>{
    const fetchData = async ()=>{
    await axios.get("/posts"+search).then((res)=>{//
   
     setPosts(res.data)
    }).catch((err)=>{
      console.log(err.message)
    })
    }
    fetchData()
  },[search])
  return (
    <div className="home">
      <Header />
      <div className="containerHome">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
