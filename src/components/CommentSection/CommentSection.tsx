import avatar from "../../assets/images/Mohan-muruge.jpg";
import add from "../../assets/icons/add_comment.svg";
import Comments from '../Comments';
import './CommentSection.scss';
import CommentForm from "../CommentForm";
import { CommentSectionProps } from "../../utils/interfaces";


function CommentSection({ currentVideo, comments, getVideoById }: CommentSectionProps) {
    return (
        <section className="comment-section">
            <div className="comment-section__wrapper">
                <h3 className="comment-section__title">
                    {comments!.length} Comments
                </h3>
                <CommentForm
                avatarImg={avatar}
                addImg={add}
                currentVideo={currentVideo}
                getVideoById={getVideoById}
                />
                <Comments
                comments={comments}
                getVideoById={getVideoById}
                currentVideo={currentVideo}
                />
            </div>
        </section>
    )
}

export default CommentSection;