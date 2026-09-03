"use client";
import { memo, useCallback, useEffect, useRef, useState } from "react";

const BUNNY_CDN = "vz-ab86f0b3-06c.b-cdn.net";

function VslPlayerInner({ libId, videoId, aspect = "aspect-video", rounded = false }) {
  const [unmuted, setUnmuted] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!wrapRef.current) return;
    if (wrapRef.current.querySelector("video")) return;
    const video = document.createElement("video");
    video.src = `https://${BUNNY_CDN}/${videoId}/play_480p.mp4`;
    video.autoplay = true;
    video.muted = true;
    video.loop = false;
    video.playsInline = true;
    video.preload = "auto";
    video.setAttribute("webkit-playsinline", "true");
    video.style.cssText = "position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;background:#000;";
    wrapRef.current.insertBefore(video, wrapRef.current.firstChild);
    video.play().catch(() => {});
  }, [videoId]);

  const handleUnmute = useCallback(() => {
    const v = wrapRef.current?.querySelector("video");
    if (v) {
      v.muted = false;
      v.currentTime = 0;
      v.play().catch(() => {});
    }
    setUnmuted(true);
  }, []);

  return (
    <div ref={wrapRef} className={`relative ${aspect} ${rounded ? "rounded-2xl overflow-hidden" : ""} bg-black`}>
      <div className="absolute inset-0 z-[5]" style={{ pointerEvents: unmuted ? "auto" : "none" }} />
      {!unmuted && (
        <button
          onClick={handleUnmute}
          className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
        >
          <span className="absolute w-24 h-24 rounded-full bg-white/30 animate-ping" />
          <span className="relative flex flex-col items-center gap-2 bg-black/85 text-white px-6 py-4 rounded-xl shadow-lg">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
            <span className="font-bold text-sm">CLIQUE PARA OUVIR</span>
          </span>
        </button>
      )}
    </div>
  );
}

const VslPlayer = memo(VslPlayerInner);
export default VslPlayer;
