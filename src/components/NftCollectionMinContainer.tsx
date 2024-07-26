import { useEffect } from 'react';
import NftCollectionMin from './NftCollectionMin';
import styles from './NftCollectionMinContainer.module.css';

interface NftCollectionMinContainerProps {
  collectionNames: string[];
}

const NftCollectionMinContainer = (props: NftCollectionMinContainerProps) => {
  useEffect(() => {
    console.log(props.collectionNames);
  }, [])
  return (
    <div className={styles.nftCollectionsWrapper}>
      {
        props.collectionNames.map(item => (
          <div key={item} className={styles.nftCollectionMinWrapper}>
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