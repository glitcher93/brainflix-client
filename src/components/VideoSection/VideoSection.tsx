import { VideoSectionProps } from '../../utils/interfaces';
import './VideoSection.scss'

function VideoSection({ currentVideo }: VideoSectionProps) {
    return (
        <div className="main__video-container">
            <video 
            className="main__video" 
            poster={currentVideo!.image} 
            controls
            ></video>
        </div>
    )
}

export default VideoSection;