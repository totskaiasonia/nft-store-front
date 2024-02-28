import styles from './Intro.module.css';

const Intro = () => {
  return (
    <>
        <div className={styles.introWrapper}>
              <p className={styles.introTitle}>QUICK <span>NFT AUCTIONS</span> ON YOUR DEVICE</p>
              <input className={styles.searchInput} placeholder='search'/>
              <button className={styles.introBtn}>learn more</button>
        </div>
    </>
  )
}

export default Intro  