import NftCard from "./NftCard";
import styles from './NftCardContainer.module.css';

const NftCardContainer = () => {
  return (
    <div className={styles.nftCardsWrapper}>
      <NftCard/>
      <NftCard/>
      <NftCard/>
      <NftCard/>
      <NftCard/>
      <NftCard/>
      <NftCard/>
      <NftCard/>
      <NftCard/>
      <NftCard/>
    </div>
  )
}

export default NftCardContainer