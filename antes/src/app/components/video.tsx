import React from "react";

interface YouTubeEmbedProps {
  embedId: string;
}


const video: React.FC<YouTubeEmbedProps> = ({ embedId }) => {
  return (
    <div className="aspect-w-16 aspect-h-9 shadow-2xl">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default video;
