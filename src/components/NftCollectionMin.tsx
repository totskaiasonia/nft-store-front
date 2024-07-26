import styles from './NftCollectionMin.module.css';
import { useEffect, useState } from 'react';
import nfts from '../data/nfts';

interface NftCollectionMinProps {
  collectionName: string;
}
const NftCollectionMin = (props: NftCollectionMinProps) => {
  const [filteredNfts, setFilteredNfts] = useState<any>([]);
  useEffect(() => {
    setFilteredNfts(nfts.filter(item => item.collection === props.collectionName).slice(0, 4))
  }, []);
  return (
    <div className={styles.nftCollectionMin}>
      {
        filteredNfts.map((item: any) => (
          <img key={item.id} src={item.image} alt="" />
        ))
      }
    </div>
  )
}

export default NftCollectionMin