import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { API_URL } from "../../Constants";
import Loader from "../../componenets/Loader";

export default function PostDetail() {
  const [post, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/${id}`);
        setLoading(false);
        if (response.ok) {
          const Json = await response.json();
          setPosts(Json);
        } else {
          throw response;
        }
      } catch (e) {
        console.log("Error occured", e);
      }
    };
    fetchCurrentPost();
  }, [id]);

  const deletePost = async () => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        navigate("/");
      } else {
        throw response;
      }
    } catch (e) {
      console.error("An error ocurred", e);
    }
  };

  if (!post) return <Loader />;
  return (
    <div style={{ height: "100vh" }}>
      <div className="modal">
        <h2 className="h1">{post.title}</h2>
        <p className="paragraph">{post.body}</p>
        <Link className= "primary" to="/">Back to Posts</Link> 
        <Link className="primary" to={`/posts/${id}/edit`}>Edit</Link>
        <button className="primary" onClick={deletePost}>Delete</button>
      </div>
    </div>
  );
}
