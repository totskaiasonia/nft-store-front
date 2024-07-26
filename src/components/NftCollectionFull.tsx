import styles from './NftCollectionFull.module.css';


import girlAvatar from '../assets/girl-avatar.svg';
import { useEffect, useState } from 'react';
import nfts from '../data/nfts';

interface NftCollectionFullProps {
  collectionName: string;
}

const NftCollectionFull = (props: NftCollectionFullProps) => {
  const [filteredNfts, setFilteredNfts] = useState<any>([]);
  useEffect(() => {
    setFilteredNfts(nfts.filter(item => item.collection === props.collectionName))
  }, []);
  return (
    <div className={styles.collectionWrapper}>
        <div className={styles.collectionImgsWrapper}>
            {
            filteredNfts.map((item: any) => (
              <img src={item.image} alt='top collection nft'/>
            ))
          }
        </div>
        <div>
        <h4>bored ape</h4>

        <div className={styles.usersWrapper}>
            <div className={styles.usersImgs}>
                <img src={girlAvatar} alt="" />
                <img src={girlAvatar} alt="" />
                <img src={girlAvatar} alt="" />
                <img src={girlAvatar} alt="" />
            </div>
            <p>+10</p>
        </div>
        </div>
    </div>
  )
}

export default NftCollectionFull