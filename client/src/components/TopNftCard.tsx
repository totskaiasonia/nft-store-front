import styles from './TopNftCard.module.css';

interface PropsType {
    isActive: boolean;
  }

const TopNftCard = (props: PropsType) => {
  return (
    <div className={styles.cardOutWrapper}>
      <div className={`${styles.card} ${props.isActive ? styles.active : ''}`}>
            <div className={styles.cardInfo} style={{display: props.isActive ? 'flex' : 'none'}}>
              <div>
                <div className={styles.cardInfoItem}>
                  <p>author:</p>
                  <p>Kim Authtackler</p>
                </div>
                <div className={styles.cardInfoItem}>
                  <p>inst:</p>
                  <p>monkeykingdom_</p>
                </div>
              </div>
              <div>
                <div className={styles.cardInfoItem}>
                  <p>Starting price:</p>
                  <p>1 eth</p>
                </div>
                <div className={styles.cardInfoItem}>
                  <p>Final price:</p>
                  <p>300 eth</p>
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default TopNftCard