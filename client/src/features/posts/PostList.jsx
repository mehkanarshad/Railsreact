import { API_URL } from "../../Constants";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../componenets/Navbar";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(2);

  async function loadPosts() {
    try {
      const response = await fetch(
        `${API_URL}?page=${currentPage}&limit=${limit}`
      );
      if (response.ok) {
        const json = await response.json();
        setPosts(json.posts);
        setTotalPages(json.meta.total_pages);
      } else {
        throw response;
      }
    } catch (e) {
      setError("An error occurred.");
      console.log("Error", e);
    }
  }

  useEffect(() => {
    loadPosts();
  }, [currentPage]);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
      <Navbar/>
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
        <div>
          <button onClick={handlePrevious} className="primary">Previous</button>
          <button onClick={() => handleNext()} className="primary">Next</button>

        </div>
      </div>
    </>
  );
}

export default PostList;
