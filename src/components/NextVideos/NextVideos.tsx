import { NextVideosProps } from "../../utils/interfaces";
import VideoList from "../VideoList";
import './NextVideos.scss'

function NextVideos({currentVideo, videoDetails}: NextVideosProps) {
    return (
        <section className="next-videos">
            <div className="next-videos__wrapper">
                <h3 className="next-videos__title">
                    Next Videos
                </h3>
                <VideoList 
                videoDetails={videoDetails}
                currentVideo={currentVideo}
                />
            </div>
        </section>
    )
}

export default NextVideos;