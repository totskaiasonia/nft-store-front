import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Category from '../../components/Category';
import NftCardContainer from '../../components/NftCardContainer';
import MyCheckbox from '../../components/ui/MyCheckbox';
import MyPagination from '../../components/ui/MyPagination';
import MySlider from '../../components/ui/MySlider';
import styles from './Store.module.css';

import FormControlLabel from '@mui/material/FormControlLabel';

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
              <p>Author</p>
              <FormControlLabel
                control={
                  <MyCheckbox defaultChecked style={{marginRight: '10px'}}/>
                }
                label="Gilad Gray"
              />
              <FormControlLabel
                control={
                  <MyCheckbox style={{marginRight: '10px'}}/>
                }
                label="Tom Smith"
              />
              <FormControlLabel
                control={
                  <MyCheckbox style={{marginRight: '10px'}}/>
                }
                label="Sam Whiten"
              />
              <p>Collection</p>
              <FormControlLabel
                control={
                  <MyCheckbox defaultChecked style={{marginRight: '10px'}}/>
                }
                label="Bloody miracle"
              />
              <FormControlLabel
                control={
                  <MyCheckbox style={{marginRight: '10px'}}/>
                }
                label="Mirrorrr"
              />
              <FormControlLabel
                control={
                  <MyCheckbox style={{marginRight: '10px'}}/>
                }
                label="Judjment"
              />
              <FormControlLabel
                control={
                  <MyCheckbox style={{marginRight: '10px', alignSelf: 'start'}}/>
                }
                label="Collective unconscious"
              />
            </div>
          </div>
        </div>
        <div className={styles.storeContent}>
        <Breadcrumbs aria-label="breadcrumb" style={{marginTop: '100px'}}>
        <Link underline="hover" color="inherit" href="/store">
          store
        </Link>
        <Typography color="text.primary">3D</Typography>
    </Breadcrumbs>
          <h1>3D</h1>
          <NftCardContainer placeIsSpaceBetween={false}/>
          <MyPagination count={10} style={{marginTop: '50px'}}/>
        </div>
      </div>
    </div>
  )
}

export default Store