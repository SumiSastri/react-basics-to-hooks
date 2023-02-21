import React, { useState, useEffect } from "react";
import axios from "axios";

import FetchDataByIdWithUseEffect from "./FetchDataByIdWithUseEffect";
import { POSTS_URL } from "./baseURLVariables";

function DataFetchingWithUseEffect() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      // .get("https://jsonplaceholder.typicode.com/posts")
      .get(POSTS_URL)
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log("error", { error });
      });
    // works like the componentDidMount mounts only once
  }, []);

  // const showPosts = () => {
  //   posts.map((post) => <li key={post.id}>{post.title}</li>);
  // };

  return (
    <div>
      <h3>Demo 7: useEffect and API calls</h3>
      <h4>Fetch all posts</h4>
      <ol>
        <FetchDataByIdWithUseEffect />
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
        {/* {showPosts} */}
      </ol>
    </div>
  );
}

export default DataFetchingWithUseEffect;
