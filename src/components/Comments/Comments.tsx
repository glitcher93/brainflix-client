import { CommentObject, CommentsProp } from '../../utils/interfaces';
import Comment from '../Comment';

function Comments({ comments, getVideoById, currentVideo }: CommentsProp) {
    return (
        <div className="comment-section__container">
            {comments!.map((comment: CommentObject) => {
                return <Comment 
                        key={comment.id}
                        id={comment.id} 
                        name={comment.name}
                        timestamp={comment.timestamp}
                        comment={comment.comment}
                        getVideoById={getVideoById}
                        currentVideo={currentVideo}
                        />
            })}
        </div>
    )
}

export default Comments;