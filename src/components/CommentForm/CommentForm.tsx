import axios from 'axios';
import { ChangeEvent, FormEvent, useState } from 'react';
import { CommentBody, CommentFormProps } from '../../utils/interfaces';
import Btn from '../Btn';
import './CommentForm.scss'

function CommentForm({ avatarImg, addImg, currentVideo, getVideoById }: CommentFormProps) {

    const [comment, setComment] = useState("");
    const [commentRequired, setCommentRequired] = useState(false);

    const postComment = (commentObj: CommentBody) => {
        axios
            .post(`http://localhost:8085/videos/${currentVideo!.id}/comments`, commentObj)
            .then(() => {
                getVideoById(currentVideo!.id)
            })
            .catch(err => console.log(err));
    }

    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        switch (name) {
            case "comment":
                setComment(value);
                setCommentRequired(false);
                break;
            default:
                return;
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!comment) {
            setCommentRequired(true);
            return;
        }

        const commentObject = {
            name: "Nigel D'Souza",
            comment
        }

        postComment(commentObject);
    }

    return (
        <form
        onSubmit={handleSubmit}
        className="comment-form">
            <div className="comment-form__container-left">
                <img className="comment-form__avatar"
                src={avatarImg}
                alt="Avatar"
                />
            </div>
            <div className="comment-form__container-right">
                <div className="comment-form__group comment-form__group--left">
                    <label className="comment-form__label" 
                    htmlFor="comment">
                        Join the Conversation
                    </label>
                    <textarea 
                    className={`comment-form__textarea ${commentRequired ? "comment-form__textarea--invalid" : ""}`}
                    name="comment" 
                    id="comment" 
                    placeholder="Add a new comment"
                    onChange={handleOnChange}
                    ></textarea>
                </div>
                <div className="comment-form__group">
                    <Btn text="Comment"
                    image={addImg}
                    alt="Comment"
                    />
                </div>
            </div>
        </form>
    )
}

export default CommentForm;