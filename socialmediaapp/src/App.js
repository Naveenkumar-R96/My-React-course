import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Missing from "./Missing";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Nav from "./Nav";
import Home from "./Home";
import { Routes,Route } from "react-router";
import { Link } from "react-router-dom";
import Post from "./Post";
import Postlayout from "./Postlayout";
import { useState } from "react";
function App() {

  const [posts,setPosts]=useState([
    {
      id:1,
      title:"first",
      datetime:'july 2, 2024',
      body:"made a video about tesla Q1 results"
    },
    {
      id:2,
      title:"second",
      datetime:'july 2, 2024',
      body:"made a video about tesla Q1 results"
    },
    {
      id:3,
      title:"third",
      datetime:'july 2, 2024',
      body:"made a video about tesla Q1 results"
    },
    {
      id:4,
      title:"four",
      datetime:'july 2, 2024',
      body:"made a video about tesla Q1 results"
    },
  ])

  const [search,setSearch]=useState('')

  const[searchResults,setSearchResults]=useState([])

  return (
   <div>
    
    <Header title="Naveen Social Media"/>
    <Nav 
    search={search}
    setSearch={setSearch}
    />
    <Home 
    posts={posts}/>
    <NewPost/>
    <PostPage/>
    <About/>
    <Missing/>
    <Footer/>
   </div>
  );
}

export default App;
