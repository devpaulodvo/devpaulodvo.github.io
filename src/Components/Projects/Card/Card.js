import {React} from "react";
import styles from './Card.module.css';

const Card = ({src, alt, title, disc}) => {
    return( 
        <div className={`${styles.container}`}>
            <img src={src} alt={alt}/>
            <div>
                <h2>{title}</h2>
                <p>{disc}</p>
                <label>See code</label>
            </div>
        </div>
    )
}

export default Card;