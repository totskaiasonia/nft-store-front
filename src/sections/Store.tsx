import { useNavigate } from 'react-router-dom';
import NftCardContainer from '../components/NftCardContainer';
import ShortCategories from '../components/ShortCategories';
import styles from './Store.module.css';
import { IoFilter } from "react-icons/io5";

import nfts from '../data/nfts';

const Store = () => {
  const navigate = useNavigate();
  const randIndex = Math.floor(Math.random() * 15);
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
          <NftCardContainer category='null' data={nfts.slice(randIndex, randIndex+10)}/>
        </div>
        <button className={styles.exploreBtn} onClick={() => navigate('./store')}>explore more</button>
    </div>
  )
}

export default Store