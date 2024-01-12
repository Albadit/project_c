type YouTubeEmbedProps = {
  embedId: string
}

export const Video = ({ embedId }: YouTubeEmbedProps) => {
  return (
    <div className="aspect-w-16 aspect-h-9 shadow-2xl">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  )
}
