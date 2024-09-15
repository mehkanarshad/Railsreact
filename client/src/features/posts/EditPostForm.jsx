import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { API_URL } from "../../Constants";
import Loader from "../../componenets/Loader";

export default function EditPostForm() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          title: post.title,
          body: post.body,
        }),
      });

      if (response.ok) {
        navigate(`/posts/${id}`);
      } else {
        console.error("An error occured");
      }
    } catch (e) {}
  };

  useEffect(() => {
    const fetchCurrentPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/${id}`);
        if (response.ok) {
          const json = await response.json();
          setPost(json);
        } else {
          throw response;
        }
      } catch (e) {
        console.error("An error ocurred ", e);
      } finally {
        setLoading(false);
      }
    };
    fetchCurrentPost();
  }, [id]);
  return (
    <>
      <div style={{height: "100vh"}}>
        <div className="modal">
          <p className="h1">Edit post</p>
          {loading && <Loader />}
          {post && (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="postTitle">Title: </label>
                <input
                  type="text"
                  id="postTitle"
                  value={post.title}
                  onChange={(e) => setPost({ ...post, title: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="postBody">Body: </label>
                <input
                  type="text"
                  id="postBody"
                  value={post.body}
                  onChange={(e) => setPost({ ...post, body: e.target.value })}
                />
              </div>
              <div>
                <button className="primary">Edit</button>
                <Link className="primary" to={`/posts/${id}`}>
                  Back
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
