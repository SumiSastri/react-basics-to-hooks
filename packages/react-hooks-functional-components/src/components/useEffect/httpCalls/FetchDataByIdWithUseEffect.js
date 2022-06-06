import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingWithUseEffect() {
  const [post, setPost] = useState({});
  const [postId, setPostId] = useState(0);
  const [idFromButtonClick, setIdFromButtonClick] = useState(0);

  useEffect(() => {
    axios
      //   .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((error) => {
        console.log("error", { error });
      });
    //   }, [postId]);
  }, [idFromButtonClick]);

  const handleButtonClick = () => {
    setIdFromButtonClick(postId);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type an id from 1-100 here to see a post"
        value={postId}
        onChange={(event) => setPostId(event.target.value)}
      />
      <button type="submit" className="btn" onClick={handleButtonClick}>
        Pick a post from 1-100 - click to submit request
      </button>
      <div className="text-success">{post.title}</div>
    </div>
  );
}

export default DataFetchingWithUseEffect;
