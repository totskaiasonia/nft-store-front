import styles from './TopNftCard.module.css';

interface PropsType {
    isActive: boolean;
    image: string;
    author: string;
    price: number;
  }

const TopNftCard = (props: PropsType) => {
  return (
    <div className={styles.cardOutWrapper}>
      <div
        style={{
          background: props.isActive ? `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${props.image}) center / cover no-repeat` : `url(${props.image}) center / cover no-repeat`,
          height: props.isActive ? 490 : 402,
          width: props.isActive ? 332 : 273,
          borderRadius: 20,
          margin: 'auto',
        }} >
            <div className={styles.cardInfo} style={{display: props.isActive ? 'flex' : 'none'}}>
              <div>
                <div className={styles.cardInfoItem}>
                  <p>author:</p>
                  <p>{props.author}</p>
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
                  <p>{props.price} eth</p>
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default TopNftCard