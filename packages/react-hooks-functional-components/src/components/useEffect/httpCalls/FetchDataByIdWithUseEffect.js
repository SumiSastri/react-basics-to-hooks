import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetchingWithUseEffect = () => {
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
      <h3>Demo 8: useEffect and Fetching a resource by Id</h3>
      <p className='text-danger'>
        Enter a number from 1-100 to select a post and click submit request
      </p>
      <input
        type='text'
        placeholder='Type an id from 1-100 here to see a post'
        value={postId}
        onChange={(event) => setPostId(event.target.value)}
      />
      <button type='submit' onClick={handleButtonClick}>
        Submit request
      </button>
      <div className='text-danger'>{post.title}</div>
    </div>
  );
};

export default DataFetchingWithUseEffect;
