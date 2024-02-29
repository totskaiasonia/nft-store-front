import styles from './Intro.module.css';
import Slider from "react-slick";

const Intro = () => {

  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <></>,
    prevArrow: <></>
  };
  return (
    <>
        <div className={styles.introWrapper}>
          <p className={styles.introTitle}>QUICK <span>NFT AUCTIONS</span> ON YOUR DEVICE</p>
          <div className={styles.inputGroup}>
            <label className={styles.inputGroup__label}>search</label>
            <input className={styles.inputGroup__input} placeholder='Bored Ape'/>
          </div>
          <button className={styles.introBtn}>learn more</button>
          <Slider {...settings} className={styles.categoriesCorousel}>
            <button className={styles.categoryBtn}><div className={styles.glows}></div>3D</button>
            <button className={styles.categoryBtn}><div className={styles.glows}></div>Modern</button>
            <button className={styles.categoryBtn}><div className={styles.glows}></div>West</button>
            <button className={styles.categoryBtn}><div className={styles.glows}></div>Apes</button>
            <button className={styles.categoryBtn}><div className={styles.glows}></div>Cars</button>
            <button className={styles.categoryBtn}><div className={styles.glows}></div>Nature</button>
            <button className={styles.categoryBtn}><div className={styles.glows}></div>True Pixel</button>
            <button className={styles.categoryBtn}><div className={styles.glows}></div>Art</button>
            <button className={styles.categoryBtn}><div className={styles.glows}></div>Disco</button>
            <button className={styles.categoryBtn}><div className={styles.glows}></div>Glitch</button>
            <button className={styles.categoryBtn}><div className={styles.glows}></div>City</button>
            <button className={styles.categoryBtn}><div className={styles.glows}></div>Code</button>
            <button className={styles.categoryBtn}><div className={styles.glows}></div>Game</button>
            <button className={styles.categoryBtn}><div className={styles.glows}></div>Micro</button>
          </Slider>
        </div>
    </>
  )
}

export default Intro  