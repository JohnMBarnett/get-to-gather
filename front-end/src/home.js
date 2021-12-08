import React from "react";
import "./styling/home.scss";

function Home() {

  return (
    <div>
      <div className="first_style">
        <p className="pic_text">
          Get To Gather aims to bring friends and families back into arms reach!
          For the past few years, we have all sacrificed to ensure that we stop
          the spread of Sars Covid-19. However, we believe that the time is now
          to re-enter the world one get together at a time!
        </p>
        <div className="first_image"></div>
      </div>
      <div className="second_style">
        <p className="pic_text">
          Our platform is designed to ease users back into the real-world, and
          encourage friendly get togethers with all those that you've missed.
        </p>
        <div className="second_image"></div>
      </div>
    </div>
  );
}

export default Home;
