import { API_URL } from "../../Constants";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const json = await response.json();
          setPosts(json);
        } else {
          throw response;
        }
      } catch (e) {
        setError("An error occurred.");
        console.log("Error", e);
      }
    }
    loadPosts();
  }, []);

  const deletePost = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // const json = await response.json();
        // console.log(json);
        setPosts(posts.filter((post) => post.id !== id));
      } else {
        throw response;
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="modal">
        {posts.map((post) => (
          <div key={post.id} className="post-container">
            <Link to={`posts/${post.id}`} className="h2">
              <h2>{post.title}</h2>
            </Link>
            <button className="primary" onClick={() => deletePost(post.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default PostList;
