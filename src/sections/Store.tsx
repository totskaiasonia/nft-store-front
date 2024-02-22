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
        <NftCardContainer/>
        <button className={styles.exploreBtn}>explore more</button>
    </div>
  )
}

export default Store