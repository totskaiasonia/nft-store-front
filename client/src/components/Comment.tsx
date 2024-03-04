import styles from './Comment.module.css';
import { FaStar } from "react-icons/fa6";

interface PropsType {
    text: string;
}

const Comment = (props: PropsType) => {
  return (
    <div className={styles.comment}>
        <p>T. Smith</p>
        <div className={styles.starsWrapper}>
            <FaStar color="#FFE600"/>
            <FaStar color="#FFE600"/>
            <FaStar color="#FFE600"/>
            <FaStar color="#FFE600"/>
            <FaStar color="#FFE600"/>
        </div>
        <p className={styles.commentText}>{props.text}</p>
    </div>
  )
}

export default Comment