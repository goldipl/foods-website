import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { HiArrowUpRight, HiPlay } from "react-icons/hi2";

const VIDEO_ID = "8TEFTAOyZss";
const VIDEO_TITLE = "Jak wygląda życie z celiakią? – podcast";
const THUMBNAIL_HD = `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`;
const THUMBNAIL_FALLBACK = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`;

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnail, setThumbnail] = useState(THUMBNAIL_HD);
  const thumbnailRef = useRef<HTMLImageElement>(null);

  // YouTube serves a 120px placeholder when the HD thumbnail does not exist
  const checkThumbnail = () => {
    const img = thumbnailRef.current;
    if (img && img.complete && img.naturalWidth > 0 && img.naturalWidth <= 120) {
      setThumbnail(THUMBNAIL_FALLBACK);
    }
  };

  // The image can finish loading before hydration, so check it once on mount
  useEffect(checkThumbnail, []);

  return (
    <section id="video" className="home-video" aria-labelledby="video-title">
      <div className="home-video__inner">
        <div className="home-video__content">
          <span className="home-video__eyebrow">Posłuchaj i poznaj</span>
          <h2 id="video-title">
            Jak wygląda
            <span>życie z celiakią?</span>
          </h2>
          <p>
            Zapraszam do wysłuchania podcastu o codzienności z celiakią i życiu
            na diecie bezglutenowej.
          </p>
          <div className="home-video__features" aria-label="O nagraniu">
            <span>🎙️ Podcast</span>
            <span>🌾 Życie bez glutenu</span>
            <span>💚 Dla osób z celiakią</span>
          </div>
          <div className="home-video__actions">
            <button
              className="home-video__cta"
              type="button"
              onClick={() => setIsPlaying(true)}
              disabled={isPlaying}
            >
              <HiPlay aria-hidden="true" /> Odtwórz podcast
            </button>
            <Link
              className="home-video__cta home-video__cta--secondary"
              href="https://www.youtube.com/@bezglutenowakarola"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kanał YouTube <HiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="home-video__player">
          <div className="home-video__frame">
            {isPlaying ? (
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                title={VIDEO_TITLE}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            ) : (
              <button
                className="home-video__poster"
                type="button"
                onClick={() => setIsPlaying(true)}
                aria-label={`Odtwórz wideo: ${VIDEO_TITLE}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  ref={thumbnailRef}
                  src={thumbnail}
                  alt=""
                  loading="lazy"
                  onLoad={checkThumbnail}
                  onError={() => setThumbnail(THUMBNAIL_FALLBACK)}
                />
                <span className="home-video__play" aria-hidden="true">
                  <HiPlay />
                </span>
                <span className="home-video__badge" aria-hidden="true">
                  <span className="home-video__badge-dot" /> YouTube · Podcast
                </span>
              </button>
            )}
          </div>
          <div
            className="home-video__chip home-video__chip--top"
            aria-hidden="true"
          >
            <span>🎧</span> Włącz i posłuchaj
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
