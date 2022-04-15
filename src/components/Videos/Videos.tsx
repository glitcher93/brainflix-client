import { Link } from "react-router-dom";
import { ReducedVideoDetails } from "../../utils/interfaces";
import './Videos.scss';

function Videos({ id, image, title, channel }: ReducedVideoDetails) {
    return (
        <li className="next-videos__video">
            <Link
            to={`/videos/${id}`}
            className="next-videos__link"
            onClick={() => {
                window.scrollTo(0, 0);
            }}
            >
                <div className="next-videos__img-container">
                    <img
                    className="next-videos__image"
                    src={image}
                    alt={title}
                    />
                </div>
                <div className="next-videos__text-container">
                    <h3 className="next-videos__heading">
                        {title}
                    </h3>
                    <p className="next-videos__channel">
                        {channel}
                    </p>
                </div>
            </Link>
        </li>
    )
}

export default Videos;