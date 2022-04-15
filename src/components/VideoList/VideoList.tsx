import { NextVideosProps } from '../../utils/interfaces';
import Videos from '../Videos';

function VideoList({currentVideo, videoDetails}: NextVideosProps) {
    return (
        <ul className="next-videos__videos">
            {videoDetails!
                .filter(video => video.id !== currentVideo!.id)
                .map(video => {
                    return <Videos key={video.id}
                            id={video.id}
                            image={video.image}
                            title={video.title}
                            channel={video.channel}
                            />
            })}
        </ul>
    )
}

export default VideoList;