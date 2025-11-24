"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 p-4 md:flex-row">
      <div>
        <h1 className="text-4xl font-bold">Hello!</h1>
      </div>

      {/* The video embed needs a constraint width to render clearly */}
      <div className="w-full max-w-md shadow-lg">
        <LiteYouTubeEmbed id="iZoyhS0V6LI" title="LATINO392FINALVIDEO" />
      </div>
    </div>
  );
}
