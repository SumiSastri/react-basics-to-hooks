import React, { useState, useEffect } from "react";
import axios from "axios";

import FetchDataByIdWithUseEffect from "./FetchDataByIdWithUseEffect";

function DataFetchingWithUseEffect() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log("error", { error });
      });
  }, []);

  //   const showPosts = () => {
  //     posts.map((post) => <li key={post.id}>{post.title}</li>);
  //   };

  return (
    <div>
      <FetchDataByIdWithUseEffect />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetchingWithUseEffect;
