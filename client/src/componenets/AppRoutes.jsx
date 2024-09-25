import React from "react";
import PostList from "../features/posts/PostList";
import { Route, Routes } from "react-router-dom";
import PostDetail from "../features/posts/PostDetail";
import NewPostForm from "../features/posts/NewPostForm";
import EditPostForm from "../features/posts/EditPostForm";
import LoginPage from "./LoginPage";

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PostList />}></Route>
        <Route path="/new" element={<NewPostForm/>}></Route>
        <Route path="posts/:id" element={<PostDetail/>}></Route>
        <Route path="posts/:id/edit" element={<EditPostForm/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
      </Routes>
    </div>
  );
}
