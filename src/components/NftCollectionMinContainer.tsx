import NftCollectionMin from './NftCollectionMin';
import styles from './NftCollectionMinContainer.module.css';

interface NftCollectionMinContainerProps {
  collectionNames: string[];
}

const NftCollectionMinContainer = (props: NftCollectionMinContainerProps) => {
  return (
    <div className={styles.nftCollectionsWrapper}>
      {
        props.collectionNames.map(item => (
          <div className={styles.nftCollectionMinWrapper}>
            <NftCollectionMin collectionName={item}/>
          </div>
        ))
      }
      {/* <div className={styles.nftCollectionMinWrapper}>
        <NftCollectionMin/>
      </div>
      <div className={styles.nftCollectionMinWrapper}>
        <NftCollectionMin/>
      </div>
      <div className={styles.nftCollectionMinWrapper}>
        <NftCollectionMin/>
      </div> */}
    </div>
  )
}

export default NftCollectionMinContainer