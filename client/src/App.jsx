import PostList from "./features/posts/PostList";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./componenets/AppRoutes";
import "./App.css";
import Navbar from "./componenets/Navbar";

function App() {
  return (
    <Router>
      <div className="app">
        <h1>React on Rails Blog</h1>
        <Navbar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
