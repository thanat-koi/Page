import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Input from "./component/Input";

function App() {
  const [posts, setPosts] = useState([]);

  function addPost(title) {
    const newPost = { id: title };
    setPosts([newPost, ...posts]);
    id += 1;
  }

  return (
    <div className="App">
      <Navbar />
      <Input addPost={addPost} />
    </div>
  );
}

export default App;
