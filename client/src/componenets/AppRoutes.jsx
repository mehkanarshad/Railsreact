import React from "react";
import PostList from "../features/posts/PostList";
import { Route, Routes } from "react-router-dom";
import PostDetail from "../features/posts/PostDetail";

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PostList />}></Route>
        <Route path="/new" element={<h1>New Posts here</h1>}></Route>
        <Route path="posts/:id" element={<PostDetail/>}></Route>

      </Routes>
    </div>
  );
}
