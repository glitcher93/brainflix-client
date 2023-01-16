import placeholder from '../../assets/images/avatar-placeholder.png';
import deleteIcon from '../../assets/icons/icon-delete.svg';
import {apiURL, timeSince} from '../../utils/utils';
import './Comment.scss'
import { CommentProps } from '../../utils/interfaces';
import axios from 'axios';

function Comment({ id, name, timestamp, comment, getVideoById, currentVideo }: CommentProps) {
    
    const handleDelete = (id: string) => {
        axios
            .delete(`${apiURL}/videos/${currentVideo!.id}/comments/${id}`)
            .then(() => {
                getVideoById(currentVideo!.id)
            })
            .catch(err => console.log(err));
    }

    return (
        <article className="comment-section__comment">
            <div className="comment-section__img-button-container">
                <img className="comment-section__image"
                src={placeholder}
                alt="Avatar"
                />
                <button
                className="comment-section__button"
                onClick={() => {
                    handleDelete(id)
                }}
                >
                    <img 
                    src={deleteIcon}
                    alt="Delete"
                    className="comment-section__button--image" 
                    />
                </button>
            </div>
            <div className="comment-section__comment-text">
                <div className="comment-section__comment-headings">
                    <h3 className="comment-section__commenter">
                        {name}
                    </h3>
                    <h3 className="comment-section__date">
                        {timeSince(timestamp)}
                    </h3>
                </div>
                <p className="comment-section__paragraph">
                    {comment}
                </p>
            </div>
        </article>
    )
}

export default Comment;