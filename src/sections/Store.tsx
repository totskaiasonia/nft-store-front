import { useNavigate } from 'react-router-dom';
import NftCardContainer from '../components/NftCardContainer';
import ShortCategories from '../components/ShortCategories';
import styles from './Store.module.css';
import { IoFilter } from "react-icons/io5";

const Store = () => {
  const navigate = useNavigate();
  return (
    <div className='layout'>
        <h3 className={styles.title}>store</h3>
        <div className={styles.storeSettingsWrapper}>
            <ShortCategories/>
            <button className={styles.storeFilterBtn}>
              <IoFilter size={'1.5rem'}/>
              <p>Filters</p>
            </button>
        </div>
        <div style={{marginTop: '50px'}}>
          <NftCardContainer category='null'/>
        </div>
        <button className={styles.exploreBtn} onClick={() => navigate('./store')}>explore more</button>
    </div>
  )
}

export default Store