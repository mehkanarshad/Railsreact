import PostList from "./features/posts/PostList";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./componenets/AppRoutes";
import "./App.css";
import Navbar from "./componenets/Navbar";
import BackgroundVideo from "./componenets/background";

function App() {
  return (
    <Router>
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="app">
          <Navbar />
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
