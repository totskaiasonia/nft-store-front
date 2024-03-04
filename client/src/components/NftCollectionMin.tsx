import styles from './NftCollectionMin.module.css';
import nft1 from '../assets/nft-collection-1.jpg';
import nft2 from '../assets/nft-collection-2.jpg';
import nft3 from '../assets/nft-collection-3.jpg';
import nft4 from '../assets/nft-collection-4.jpg';

const NftCollectionMin = () => {
  return (
    <div className={styles.nftCollectionMin}>
      <img src={nft1} alt="" />
      <img src={nft2} alt="" />
      <img src={nft3} alt="" />
      <img src={nft4} alt="" />
    </div>
  )
}

export default NftCollectionMin