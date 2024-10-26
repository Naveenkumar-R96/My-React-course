import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Missing from "./Missing";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Nav from "./Nav";
import Home from "./Home";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import Post from "./Post";
import Postlayout from "./Postlayout";
import { useEffect, useState } from "react";
import { format } from "date-fns"

function App() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "first",
      datetime: 'july 2, 2024',
      body: "made a video about tesla Q1 results"
    },
    {
      id: 2,
      title: "second",
      datetime: 'july 2, 2024',
      body: "dade a video about tesla Q1 results"
    },
    {
      id: 3,
      title: "third",
      datetime: 'july 2, 2024',
      body: "cade a video about tesla Q1 results"
    },
    {
      id: 4,
      title: "four",
      datetime: 'july 2, 2024',
      body: "made a video about tesla Q1 results"
    },
  ])

  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  useEffect(() => {
    const filterdResults = posts.filter((post) => ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));

    setSearchResults(filterdResults.reverse());
  }, [posts, search])

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts)
    setPostTitle('')
    setPostBody('')

  }

  return (
    <div>

      <Header title="Naveen Social Media" />
      <Nav
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route path="/" element ={<Home posts = {searchResults}/>}/>
        <Route path="post" element= {<NewPost
          handleSubmit={handleSubmit}
          setPostBody={setPostBody}
          setPostTitle={setPostTitle}
          postBody={postBody}
          postTitle={postTitle}
        />}/>
        <Route path = "about" element ={<About/>}/>
        <Route path ="*" element={<Missing/>}/>
      
        
       
      </Routes>
      <Footer />
    </div>
  );

}

export default App;
