import { useRef } from "react";
import { Clapperboard, Ticket } from "lucide-react";

import Dracula from "../assets/videos/Dracula.mp4";
import SelfAware from "../assets/videos/SelfAware.mp4";
import { ButtonPages } from "../components/ButtonPages";
import popcorn from "../assets/images/placeholder-art/popcorn.svg";
import ghopsGhost from "../assets/images/Ghops4.png";

const videos = [
  { title: "Dracula", src: Dracula, accent: "is-red" },
  { title: "Self Aware", src: SelfAware, accent: "is-gold" },
];

export default function Edits() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const pauseOtherVideos = (activeVideo: HTMLVideoElement) => {
    videoRefs.current.forEach((video) => {
      if (video && video !== activeVideo) video.pause();
    });
  };

  return (
    <main className="edits-page">
      <section className="retro-hero edits-hero !min-h-0">
        <div className="retro-shell">
          <div className="retro-card edits-marquee p-5 sm:p-8">
            <span className="retro-label mb-5">
              <Ticket aria-hidden="true" size={15} /> Función especial
            </span>
            <div className="edits-title-layout">
              <h1 className="page-display-title">
                Edits<br /><span className="title-accent">en cartelera.</span>
              </h1>
              <img src={ghopsGhost} alt="" aria-hidden="true" className="edits-ghost-decoration" />
            </div>
            <p className="edits-subtitle">Pase, vea y disfrute la función.</p>
          </div>
        </div>
      </section>

      <section className="retro-shell edits-reel" aria-label="Videos">
        {videos.map((video, index) => (
          <article key={video.title} className={`retro-card edits-film-card ${video.accent}`}>
            <div className="edits-film-heading">
                <span className="edits-film-icon"><Clapperboard aria-hidden="true" size={19} /></span>
                <h2 className="font-champion text-3xl uppercase sm:text-4xl">{video.title}</h2>
                <span className="edits-film-star" aria-hidden="true">✦</span>
                <img
                  src={popcorn}
                  alt=""
                  aria-hidden="true"
                  className="edits-popcorn-sprite"
                />
            </div>
            <div
              className="edits-film-frame"
              onContextMenu={(event) => event.preventDefault()}
              onDragStart={(event) => event.preventDefault()}
            >
              <video
                ref={(element) => { videoRefs.current[index] = element; }}
                className="h-full w-full object-contain"
                src={video.src}
                controls
                controlsList="nodownload noplaybackrate"
                disablePictureInPicture
                disableRemotePlayback
                preload="metadata"
                playsInline
                draggable={false}
                aria-label={`Reproducir ${video.title}`}
                onPlay={(event) => pauseOtherVideos(event.currentTarget)}
              />
            </div>
          </article>
        ))}
      </section>

      <div className="edits-curtain" aria-hidden="true">
        Fin de la función <span>✦</span>
      </div>
      <ButtonPages
        left={{ to: "/projects/", label: "proyectos" }}
        right={{ to: "/about/", label: "sobre mí" }}
      />
    </main>
  );
}
