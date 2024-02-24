import Category from '../../components/Category';
import NftCardContainer from '../../components/NftCardContainer';
import styles from './Store.module.css';

const Store = () => {
  return (
    <div className="layout">
      <div className={styles.storeWrapper}>
        <div className={styles.storePreferences}>
          <Category categoryName='All'/>
          <Category categoryName='Modern'/>
          <Category categoryName='3D'/>
          <Category categoryName='Pixel'/>
          <Category categoryName='Art'/>
          <Category categoryName='Gaming'/>
        </div>
        <div className={styles.storeContent}>
          <h1>3D</h1>
          <NftCardContainer placeIsSpaceBetween={false}/>
        </div>
      </div>
    </div>
  )
}

export default Store