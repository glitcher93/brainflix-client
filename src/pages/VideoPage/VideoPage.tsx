import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import VideoMain from "../../components/VideoMain";
import { CommentObject, ReducedVideoDetails, VideoObject } from "../../utils/interfaces";
import { compareTime } from "../../utils/utils";

const VideoPage = () => {

    const [videoDetails, setVideoDetails] = useState<ReducedVideoDetails[] | undefined>();
    const [currentVideo, setCurrentVideo] = useState<VideoObject | undefined>();
    const [comments, setComments] = useState<CommentObject[]>();

    const { id } = useParams();

    const getAllVideosAndCurrent = () => {
        axios
            .get(`http://localhost:8085/videos`)
            .then(({data: videoDetails}) => {
                setVideoDetails(videoDetails);
                let videoId = id || videoDetails[0].id;
                getVideoById(videoId)
            })
            .catch(err => console.log(err));
    }

    const getVideoById = (id: string) => {
        axios
            .get(`http://localhost:8085/videos/${id}`)
            .then(({data: currentVideo}) => {
                setCurrentVideo(currentVideo)
                currentVideo.comments.sort(compareTime)
                setComments(currentVideo.comments)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllVideosAndCurrent()
    }, [id])

    let stateCheck = videoDetails && currentVideo && comments

    return (
        <>
            {
            stateCheck && <VideoMain 
                          videoDetails={videoDetails}
                          currentVideo={currentVideo}
                          comments={comments}
                          getVideoById={getVideoById}
                          />
            }
        </>
    )

}

export default VideoPage;