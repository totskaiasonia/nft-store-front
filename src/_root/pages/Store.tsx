
import Category from '../../components/Category';
import NftCardContainer from '../../components/NftCardContainer';
import MySlider from '../../components/ui/MySlider';
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
          <div className={styles.filters}>
            <div style={{width: '200px'}}>
              <p>Year</p>
              <MySlider 
                valueLabelDisplay="auto"
                aria-label="year"
                getAriaLabel={(index) =>
                  index === 0 ? "Minimum year" : "Maximum year"
                }
                defaultValue={[2000, 2024]}
                min={2000}
                max={2024}
              />
            </div>
            <div style={{width: '200px'}}>
              <p>Price</p>
              <MySlider 
                valueLabelDisplay="auto"
                aria-label="price"
                getAriaLabel={(index) =>
                  index === 0 ? "Minimum price" : "Maximum price"
                }
                defaultValue={[5, 4000]}
                min={0.01}
                max={10000}
              />
            </div>
          </div>
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