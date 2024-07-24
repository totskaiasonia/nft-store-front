import { useNavigate } from 'react-router-dom';
import styles from './ShortCategories.module.css';

const ShortCategories = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.btnsWrapper}>
        <button className={styles.active} onClick={() => navigate('/store/all')}>all</button>
        <button onClick={() => navigate('/store/art')}>art</button>
        <button onClick={() => navigate('/store/sport')}>sport</button>
        <button onClick={() => navigate('/store/gaming')}>gaming</button>
        <button onClick={() => navigate('/store/3D')}>3D</button>
    </div>
  )
}

export default ShortCategories