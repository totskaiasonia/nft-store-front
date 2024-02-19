import styles from './NftCard.module.css';
import eth from '../assets/eth-icon.svg';
import nftSample from '../assets/nft-sample.jpg';

const NftCard = () => {
  return (
    <div className={styles.nftCardWrapper}>
        <img src={nftSample}/>
        <p className={styles.amount}>1 of 10</p>
        <h3><img src={eth} alt="" />1 Eth</h3>
        <p className={styles.timeLeft}>2h 34m 15s left</p>
        <button>Place a bid</button>
    </div>
  )
}

export default NftCard