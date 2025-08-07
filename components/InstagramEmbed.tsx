"use client";

import React, { useEffect } from "react";

export const InstagramEmbed: React.FC = () => {
  useEffect(() => {
    const scriptId = "instagram-embed-script";

    // Prevent duplicate script injection
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.setAttribute("src", "https://www.instagram.com/embed.js");
      script.setAttribute("async", "");
      script.setAttribute("id", scriptId);
      document.body.appendChild(script);
    } else {
      // Re-initialize embeds if script is already loaded
      if ((window as any).instgrm?.Embeds?.process) {
        (window as any).instgrm.Embeds.process();
      }
    }
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/reel/DLKFMUzRglN/?utm_source=ig_embed&amp;utm_campaign=loading"
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: 0,
        borderRadius: "20px",
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: "1px",
        padding: 0,
      }}
    >
      <a
        href="https://www.instagram.com/reel/DLKFMUzRglN/?utm_source=ig_embed&amp;utm_campaign=loading"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "#FFF",
          lineHeight: 0,
          padding: 0,
          textAlign: "center",
          textDecoration: "none",
          width: "100%",
        }}
      >
        View this post on Instagram
      </a>
    </blockquote>
  );
};
