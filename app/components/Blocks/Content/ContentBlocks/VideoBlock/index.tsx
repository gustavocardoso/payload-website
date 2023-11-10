import videoBlockStyles from './styles'

const { videoContainer, videoCaption } = videoBlockStyles()

type VideoBlockProps = {
  videoEmbed: string
  caption: string
}

const VideoBlock: React.FC<VideoBlockProps> = ({ videoEmbed, caption }) => {
  return (
    <>
      <div>
        <div className={videoContainer()} dangerouslySetInnerHTML={{ __html: videoEmbed }}></div>
        {caption && <span className={videoCaption()}>{caption}</span>}
      </div>
    </>
  )
}
export default VideoBlock
