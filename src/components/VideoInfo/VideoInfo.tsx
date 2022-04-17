import views from '../../assets/icons/views.svg';
import likes from '../../assets/icons/likes.svg';
import './VideoInfo.scss';
import { timeSince } from '../../utils/utils';
import { VideoInfoProps } from '../../utils/interfaces';
import axios from 'axios';

function VideoInfo({ currentVideo, getVideoById }: VideoInfoProps) {

    const putLike = (id: string) => {
        axios
            .put(`http://localhost:8085/videos/${id}/likes`)
            .then(() => {
                getVideoById(id)
            })
            .catch(err => console.log(err));
    }

    const handleClick = () => {
        putLike(currentVideo!.id)
    }

    return (
        <section className="video-info">
            <div className="video-info__wrapper">
                <h2 className="video-info__title">
                    {currentVideo!.title}
                </h2>
                <div className="video-info__container">
                    <div className="video-info__container--left">
                        <h3 className="video-info__by">
                            By {currentVideo!.channel}
                        </h3>
                        <p className="video-info__date">
                            {timeSince(currentVideo!.timestamp)}
                        </p>
                    </div>
                    <div className="video-info__container--right">
                        <div className="video-info__container--image-flex video-info__container--top">
                            <img className="video-info__image"
                            src={views}
                            alt="Views"
                            />
                            <p className="video-info__paragraph">
                                {currentVideo!.views}
                            </p>
                        </div>
                        <div className="video-info__container--image-flex">
                            <img 
                            className="video-info__image video-info__image--likes"
                            src={likes}
                            alt="Likes"
                            onClick={handleClick}
                            />
                            <p className="video-info__paragraph">
                                {currentVideo!.likes.toLocaleString()}
                            </p>
                        </div>
                    </div>
                </div>
                <p className="video-info__description">
                    {currentVideo!.description}
                </p>
            </div>
        </section>
    )
}

export default VideoInfo;