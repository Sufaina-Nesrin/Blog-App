import React from "react";
import Header from "../../components/header/Header";
import Topbar from "../../components/topBar/Topbar";
import "./Home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="containerHome">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
