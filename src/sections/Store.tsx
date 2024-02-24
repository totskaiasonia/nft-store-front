import NftCardContainer from '../components/NftCardContainer';
import ShortCategories from '../components/ShortCategories';
import styles from './Store.module.css';

const Store = () => {
  return (
    <div className='layout'>
        <h3 className={styles.title}>store</h3>
        <div className={styles.storeSettingsWrapper}>
            <ShortCategories/>
            <button className={styles.storeFilterBtn}>
                Filters
            </button>
        </div>
        <div style={{marginTop: '50px'}}>
          <NftCardContainer placeIsSpaceBetween={true}/>
        </div>
        <button className={styles.exploreBtn}>explore more</button>
    </div>
  )
}

export default Store