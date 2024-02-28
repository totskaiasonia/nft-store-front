import styles from './Intro.module.css';

const Intro = () => {
  return (
    <>
        <div className={styles.introWrapper}>
          <p className={styles.introTitle}>QUICK <span>NFT AUCTIONS</span> ON YOUR DEVICE</p>
          <div className={styles.inputGroup}>
            <label className={styles.inputGroup__label}>search</label>
            <input className={styles.inputGroup__input} placeholder='Bored Ape'/>
          </div>
          <button className={styles.introBtn}>learn more</button>
        </div>
    </>
  )
}

export default Intro  