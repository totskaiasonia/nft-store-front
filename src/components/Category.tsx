import { useNavigate } from 'react-router-dom';
import styles from './Category.module.css';

interface PropsType {
    categoryName: string;
    isActive: boolean;
    href: string;
}

const Category = (props: PropsType) => {
  const navigate = useNavigate();
  return (
    <button className={`${styles.categoryBtn} ${props.isActive ? styles.isActive : ''}`} onClick={() => navigate(props.href)}>{props.categoryName}</button>
  )
}

export default Category