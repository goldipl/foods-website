import React from "react";

const VideoSection = () => {
  return (
    <section id="video" className="video-section">
      <div className="video-section-wrapper">
        <div className="section-title">
          <h2>Jak wygląda życie z celiakią?</h2>
          <h4>Zapraszam do wysłuchania podcastu.</h4>
        </div>
        <iframe
          width="560"
          height="315"
          loading="lazy"
          src="https://www.youtube.com/embed/8TEFTAOyZss?si=6VzOeIG6oR7IYGcw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
