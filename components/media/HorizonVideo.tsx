"use client";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Icon } from "../Icons";
type Props = {
  src: string;
  poster: string;
  title: string;
  caption: string;
  transcript: string;
  ambient?: boolean;
  loop?: boolean;
};
const time = (s: number) =>
  `${Math.floor((s || 0) / 60)}:${String(Math.floor((s || 0) % 60)).padStart(2, "0")}`;
export function HorizonVideo({
  src,
  poster,
  title,
  caption,
  transcript,
  ambient = false,
  loop = false,
}: Props) {
  const video = useRef<HTMLVideoElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const el = video.current;
    if (!el) return;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const canAutoplay =
      ambient && !preference.matches && window.innerWidth > 768;
    if (canAutoplay) void el.play().catch(() => {});
    const change = () => {
      if (preference.matches) el.pause();
    };
    preference.addEventListener("change", change);
    return () => {
      preference.removeEventListener("change", change);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [ambient]);
  async function toggle() {
    const el = video.current;
    if (!el) return;
    setError("");
    if (el.paused) {
      try {
        await el.play();
      } catch {
        setError("Playback could not start. Please try again.");
      }
    } else el.pause();
  }
  function sound() {
    if (video.current) {
      video.current.muted = !muted;
      setMuted(!muted);
    }
  }
  async function fullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (frame.current?.requestFullscreen)
        await frame.current.requestFullscreen();
      else {
        const el = video.current as HTMLVideoElement & {
          webkitEnterFullscreen?: () => void;
        };
        el?.webkitEnterFullscreen?.();
      }
    } catch {
      setError("Fullscreen is unavailable in this browser.");
    }
  }
  function show() {
    setVisible(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setVisible(false), 2800);
  }
  function keyboard(e: KeyboardEvent<HTMLDivElement>) {
    if (
      (e.target as HTMLElement).tagName === "INPUT" ||
      (e.target as HTMLElement).tagName === "BUTTON"
    )
      return;
    if (e.code === "Space") {
      e.preventDefault();
      void toggle();
    }
    if (e.key.toLowerCase() === "m") sound();
    if (e.key.toLowerCase() === "f") void fullscreen();
    show();
  }
  return (
    <figure className="video-figure">
      <div
        ref={frame}
        className={`horizon-video ${playing ? "is-playing" : ""} ${visible ? "controls-visible" : ""}`}
        onMouseMove={show}
        onTouchStart={show}
        onFocusCapture={show}
        onKeyDown={keyboard}
        tabIndex={0}
        role="group"
        aria-label={`${title} video player. Space to play, M to mute, F for fullscreen.`}
      >
        <video
          ref={video}
          src={src}
          poster={poster}
          preload="none"
          muted
          playsInline
          loop={loop}
          aria-label={title}
          onPlay={() => {
            setPlaying(true);
            show();
          }}
          onPause={() => {
            setPlaying(false);
            setVisible(true);
          }}
          onEnded={() => setPlaying(false)}
          onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onError={() =>
            setError(
              "This film is unavailable. The concept image and description are shown below.",
            )
          }
        />
        {!playing && (
          <button
            className="video-play"
            aria-label={`Play ${title}`}
            onClick={() => void toggle()}
          >
            <Icon name="play" />
            <span>View the study</span>
          </button>
        )}
        <span className="video-label">H1 / Architectural concept</span>
        <div className="video-controls">
          <button
            className="icon-button"
            onClick={() => void toggle()}
            aria-label={playing ? "Pause video" : "Play video"}
          >
            <Icon name={playing ? "pause" : "play"} />
          </button>
          <span className="video-time">
            {time(current)} / {time(duration)}
          </span>
          <input
            type="range"
            min="0"
            max={duration || 1}
            step="0.1"
            value={current}
            aria-label="Video progress"
            aria-valuetext={`${time(current)} of ${time(duration)}`}
            onChange={(e) => {
              if (video.current)
                video.current.currentTime = Number(e.target.value);
              setCurrent(Number(e.target.value));
            }}
          />
          <button
            className="icon-button"
            onClick={sound}
            aria-label={muted ? "Unmute video" : "Mute video"}
          >
            <Icon name={muted ? "muted" : "volume"} />
          </button>
          <button
            className="icon-button"
            onClick={() => void fullscreen()}
            aria-label="Toggle fullscreen"
          >
            <Icon name="expand" />
          </button>
        </div>
        {error && (
          <p className="video-error" role="status">
            {error}
          </p>
        )}
      </div>
      <figcaption>
        <span>{caption}</span>
        <details>
          <summary>Visual description</summary>
          <p>{transcript}</p>
        </details>
      </figcaption>
    </figure>
  );
}
