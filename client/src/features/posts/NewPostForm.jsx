import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../Constants";
import '../../App.css'
import Navbar from "../../componenets/Navbar";

export default function NewPostForm() {
  const [title, setTilte] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = { title, body };
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (response.ok) {
      const { id } = await response.json();
      navigate(`/posts/${id}`);
    } else {
      console.log("An error occured");
    }
  };

  return (
    <div style={{ height: "100vh" }}>
    <Navbar/>
      <div className="modal">
        <p className="h1"> Create New Post</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="titleInput">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTilte(e.target.value);
              }}
              id="titleInput"
              required
            />
          </div>
          <div>
            <label htmlFor="bodyInput">Body:</label>
            <textarea
              type="text"
              id="bodyInput"
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
              }}
            />
          </div>
          <div>
            <button type="submit">Create Post</button>
          </div>
        </form>
      </div>
    </div>
  );
}
