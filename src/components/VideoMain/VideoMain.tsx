import VideoSection from "../VideoSection";
import CommentSection from "../CommentSection";
import NextVideos from "../NextVideos";
import VideoInfo from "../VideoInfo";
import './VideoMain.scss';
import { MainProps } from "../../utils/interfaces";


function VideoMain({ videoDetails, currentVideo, comments, getVideoById }: MainProps) {
    return (
        <main className="main">
            <VideoSection 
            currentVideo={currentVideo} 
            />
            <div className="main-container">
                <div className="main-container__left">
                    <VideoInfo
                    currentVideo={currentVideo}
                    />
                    <CommentSection 
                    comments={comments}
                    currentVideo={currentVideo}
                    getVideoById={getVideoById}
                    />
                </div>
                <div className="main-container__right">
                    <NextVideos 
                    videoDetails={videoDetails}
                    currentVideo={currentVideo}
                    />
                </div>
            </div>
        </main>
    );
}

export default VideoMain;