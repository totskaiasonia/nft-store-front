import styles from './Store.module.css';
import { useParams } from 'react-router-dom';

import categories from '../../data/categories';
import authors from '../../data/authors';
import collections from '../../data/collections';

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Category from '../../components/Category';
import NftCardContainer from '../../components/NftCardContainer';
import MyCheckbox from '../../components/ui/MyCheckbox';
import MyPagination from '../../components/ui/MyPagination';
import MySlider from '../../components/ui/MySlider';

import FormControlLabel from '@mui/material/FormControlLabel';

const Store = () => {
  const {category} = useParams();
  return (
    <div className="layout">
      <div className={styles.storeWrapper}>
        <div className={styles.storePreferences}>
          <Category key="root" isActive={category === "all"} categoryName='All' href='/store/all'/>
          {
            categories.map((item) => (
              <Category key={item.name} isActive={category === item.name} categoryName={item.name} href={item.href}/>
            ))
          }
          <div className={styles.filters}>
            <div style={{width: '200px'}}>
              <p>Year</p>
              <MySlider 
                valueLabelDisplay="auto"
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
                getAriaLabel={(index) =>
                  index === 0 ? "Minimum price" : "Maximum price"
                }
                defaultValue={[5, 4000]}
                min={0.01}
                max={10000}
              />
              <p>Author</p>
              {
                authors.map(item => (
                  <FormControlLabel
                    control={
                      <MyCheckbox style={{marginRight: '10px'}}/>
                    }
                    label={item.name}
                  />
                ))
              }
              <p>Collection</p>
              {
                collections.map(item => (
                  <FormControlLabel
                    control={
                      <MyCheckbox style={{marginRight: '10px'}}/>
                    }
                    label={item.name}
                  />
                ))
              }
            </div>
          </div>
        </div>
        <div className={styles.storeContent}>
          <Breadcrumbs aria-label="breadcrumb" style={{marginTop: '100px'}}>
            <Link underline="hover" color="inherit" href="/store/all">
              store
            </Link>
            <Typography color="text.primary">{category}</Typography>
          </Breadcrumbs>
          <h1 style={{textTransform: 'capitalize'}}>{category}</h1>
          <NftCardContainer category={category as string}/>
          <MyPagination count={10} style={{marginTop: '50px'}}/>
        </div>
      </div>
    </div>
  )
}

export default Store