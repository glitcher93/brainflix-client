import { BtnProps } from '../../utils/interfaces';
import './Btn.scss'

function Btn({ image, alt, text }: BtnProps) {
    return (
        <button className="cta">
            <img 
            className="cta__icon"
            src={image} 
            alt={alt}
            /> 
            {text}
        </button>
    )
}

export default Btn;