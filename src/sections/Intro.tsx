import intro_bg from '../assets/intro-bg-2.png';
import AuthForm from '../components/AuthForm';
import styles from './Intro.module.css';

const Intro = () => {
  return (
    <>
        <img className={styles.introBg} src={intro_bg} alt="" />
        <div className={styles.introWrapper}>
            <div className={styles.introForm}>
              <AuthForm/>
            </div>
            <div className={styles.introTitleLayout}>
              <p className={styles.introTitle}>QUICK <span>NFT AUCTIONS</span> ON YOUR DEVICE</p>
              <button className={styles.introBtn}>learn more</button>
            </div>
        </div>
    </>
  )
}

export default Intro