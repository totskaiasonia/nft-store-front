import NftCollectionMin from './NftCollectionMin';
import styles from './NftCollectionMinContainer.module.css';

const NftCollectionMinContainer = () => {
  return (
    <div className={styles.nftCollectionsWrapper}>
      <div className={styles.nftCollectionMinWrapper}>
        <NftCollectionMin/>
      </div>
      <div className={styles.nftCollectionMinWrapper}>
        <NftCollectionMin/>
      </div>
      <div className={styles.nftCollectionMinWrapper}>
        <NftCollectionMin/>
      </div>
      <div className={styles.nftCollectionMinWrapper}>
        <NftCollectionMin/>
      </div>
    </div>
  )
}

export default NftCollectionMinContainer