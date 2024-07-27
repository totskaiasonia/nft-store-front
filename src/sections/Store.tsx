import NftCardContainer from '../components/NftCardContainer';
import ShortCategories from '../components/ShortCategories';
import styles from './Store.module.css';
import { IoFilter } from "react-icons/io5";

import nfts from '../data/nfts';

import { config } from '../setup';

const Store = () => {
  const randIndex = Math.floor(Math.random() * 15);
  return (
    <div className='layout'>
        <h3 className={styles.title}>{config.section_3_title_before_outline} <span>{config.section_3_title_outline}</span> {config.section_3_title_after_outline}</h3>
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
        <button className={styles.exploreBtn}><a href='/store/all'>explore more</a></button>
    </div>
  )
}

export default Store