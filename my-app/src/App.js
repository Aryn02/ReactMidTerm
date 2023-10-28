import React from 'react';
import { Route, Routes } from "react-router-dom";
import Top from './components/header/Top';
import Posts from './components/posts/Posts';



function App() {
  return (
    <div className="App">
     <Top/>
     <h2>hi</h2>
     <div >
        <Routes>
        <Route path="/" element = {<App/>} index={true}/>
          <Route path="/posts" element = {<Posts/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
