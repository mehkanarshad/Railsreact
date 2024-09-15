import React from 'react'
import '../App.css';

const BackgroundVideo = () => {
    return (
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          {/* Add any content you'd like to display over the video here */}
          <h1>Welcome to My Website</h1>
          <p>This is some content over the video background.</p>
        </div>
      </div>
    );
  };
  
  export default BackgroundVideo;