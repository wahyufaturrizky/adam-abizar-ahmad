import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="container-mobile">
        <div className="hero-banner">
          <img
            src="https://i.ibb.co/7QQwLRR/photo-2022-07-05-20-34-51.jpg"
            alt=""
            width={368}
            height={730}
          />
          <div className="child-hero-banner">
            <h3 className="title">Adam Abizar Ahmad</h3>
          </div>
        </div>
        <div className="short-intro">Short Intro</div>
        <div className="schedule">schedule</div>
        <div className="location">Location</div>
        <div className="gallery">gallery</div>
        <div className="whises">whises</div>
      </div>
    </div>
  );
}

export default App;
