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
function App() {
  return (
   <div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/newpost">NewPost</Link></li>
        <li><Link to="/postpage">PostPage</Link></li>
        
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/newpost" element={<NewPost/>}/>
      <Route path="/postpage" element={<PostPage/>}/>
      <Route path="/postpage/:id" element={<Post/>}/>
    </Routes>
   {/*  <Header/>
    <Nav/>
    <Home/>
    <NewPost/>
    <PostPage/>
    <About/>
    <Missing/>
    <Footer/> */}
   </div>
  );
}

export default App;
