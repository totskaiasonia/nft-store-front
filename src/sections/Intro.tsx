import styles from './Intro.module.css';
import Slider from "react-slick";

import { config } from '../setup';

import categories from '../data/categories';

const Intro = () => {
  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    cssEase: "linear",
    nextArrow: <></>,
    prevArrow: <></>
  };
  return (
    <>
        <div className={styles.introWrapper}>
          
          <p className={styles.introTitle}>{config.title_before_outline} <span>{config.title_outline}</span> {config.title_after_outline}</p>
          <div className={styles.inputGroup}>
            <label className={styles.inputGroup__label}>search</label>
            <input className={styles.inputGroup__input} placeholder='Bored Ape'/>
          </div>
          <button className={styles.introBtn}>learn more</button>
          <Slider {...settings} className={styles.categoriesCorousel}>
            {
              categories.map(item => (
                <button key={item.name} className={styles.categoryBtn}><div className={styles.glows}></div>{item.name}</button>
              ))
            }
          </Slider>
        </div>
    </>
  )
}

export default Intro  