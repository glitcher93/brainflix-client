import logo from "../../assets/logo/BrainFlix-logo.svg";
import { Link } from "react-router-dom";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/icons/upload.svg";
import Btn from "../Btn";
import './PageHeader.scss';

function PageHeader() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__container-left">
                    <h1 className="header__title">
                        <Link to='/'>
                            <img 
                            className="header__title--logo"
                            src={logo} 
                            alt="BrainFlix logo"
                            />
                        </Link>
                    </h1>
                </div>
                <div className="header__container-right">
                    <form className="header-form">
                        <input
                        className="header-form__input"
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search"
                        />
                        <img
                        className="header__image header__image--mobile"
                        src={avatar}
                        alt="User" />
                    </form>
                    <Link
                    className="header__link"
                    to="/upload"
                    >
                        <Btn text="Upload"
                        image={upload}
                        alt="Upload"
                        />
                    </Link>
                    <img
                    className="header__image header__image--tablet"
                    src={avatar}
                    alt="User"
                    />
                </div>
            </div>
    </header>
  );
}

export default PageHeader;
