import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import NotFound from "./components/NotFound";
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <main>
          <Routes>
            <Route exact path ="/" element={<BlogList/>}/>
            <Route exact path = "/blog/:slug" element={<BlogPost/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
