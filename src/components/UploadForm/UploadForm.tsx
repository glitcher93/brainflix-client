import { Link, useNavigate } from "react-router-dom";
import Btn from '../Btn';
import publish from '../../assets/icons/publish.svg';
import preview from '../../assets/images/Upload-video-preview.jpg';
import './UploadForm.scss';
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { VideoBody } from "../../utils/interfaces";

function UploadForm() {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [titleRequired, setTitleRequired] = useState(false);
    const [descriptionRequired, setDescriptionRequired] = useState(false);

    const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        switch (name) {
            case "title":
                setTitle(value);
                setTitleRequired(false);
                break;
            case "description":
                setDescription(value);
                setDescriptionRequired(false);
                break;
            default:
                return;
        }
    }

    const postNewVideo = (videoObject: VideoBody) => {
        axios
            .post(`http://localhost:8085/videos`, videoObject)
            .then(() => {
                alert("Video Uploaded Successfully");
                navigate("/");
            })
            .catch(err => console.log(err))
    }

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!title) {
            setTitleRequired(true);
        }

        if (!description) {
            setDescriptionRequired(true);
        }

        if (!title || !description) {
            return;
        }

        const videoObject = {
            title,
            description
        }

        postNewVideo(videoObject);
    }

    return (
        <form
        className="upload-form" 
        onSubmit={handleOnSubmit}
        >
            <div className="upload-form__container">
                <div className="upload-form__img-container">
                    <label className="upload-form__label">
                        Video Thumbnail
                    </label>
                    <img 
                    className="upload-form__image" 
                    src={preview} 
                    alt="Thumbnail"
                    />
                </div>
                <div className="upload-form__container-right">
                    <div className="upload-form__group">
                        <label 
                        className="upload-form__label" 
                        htmlFor="title"
                        >
                            Title Your Video
                        </label>
                        <input 
                        className={`upload-form__input ${titleRequired ? "upload-form__input--invalid" : ""}`}
                        type="text" 
                        id="title"
                        name="title" 
                        placeholder="Add a title to your video"
                        value={title}
                        onChange={handleOnChange}
                        />
                    </div>
                    <div className="upload-form__group">
                        <label 
                        className="upload-form__label"
                        htmlFor="description"
                        >
                            Add A Video Description
                        </label>
                        <textarea 
                        className={`upload-form__textarea ${descriptionRequired ? "upload-form__textarea--invalid" : ""}`}
                        id="description"
                        name="description" 
                        placeholder="Add a description to your video"
                        value={description}
                        onChange={handleOnChange}
                        ></textarea>
                    </div>
                </div>
            </div>
            <div className="upload-form__buttons">
                    <Link 
                    className="upload-form__cancel upload-form__cancel--tablet upload-form__cancel--link" 
                    to="/"
                    >
                        Cancel
                    </Link>
                    <Btn
                    text="Publish" 
                    image={publish} 
                    alt="Publish" 
                    />
                    <Link 
                    className="upload-form__cancel upload-form__cancel--mobile upload-form__cancel--link" 
                    to="/"
                    >
                        Cancel
                    </Link>
            </div>
        </form>
    )
}

export default UploadForm;