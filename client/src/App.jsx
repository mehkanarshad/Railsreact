import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./componenets/AppRoutes";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="video-container" style={{height: "100vh",padding: "0", margin: "0"}}>
        <video autoPlay loop muted className="background-video">
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="app">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
