import './UploadMain.scss';
import UploadForm from '../UploadForm';

function UploadMain() {
    return(
        <main className="upload">
            <div className="upload__wrapper">
                <h2 className="upload__title">
                    Upload Video
                </h2>
                <UploadForm />
            </div>
        </main>
    )
}

export default UploadMain;