type VideoBlockProps = {
  videoEmbed: string
  caption: string
}

const VideoBlock: React.FC<VideoBlockProps> = ({ videoEmbed, caption }) => {
  return (
    <div
      className='video-container aspect-video w-full m-auto'
      dangerouslySetInnerHTML={{ __html: videoEmbed }}
    ></div>
  )
}
export default VideoBlock
