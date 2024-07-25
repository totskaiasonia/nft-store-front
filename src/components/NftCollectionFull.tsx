import styles from './NftCollectionFull.module.css';

import borderApe1 from '../assets/nft-image-34.png';
import borderApe2 from '../assets/nft-image-35.png';
import borderApe3 from '../assets/nft-image-36.png';
import borderApe4 from '../assets/nft-image-2.png';

import girlAvatar from '../assets/girl-avatar.svg';

const NftCollectionFull = () => {
  return (
    <div className={styles.collectionWrapper}>
        <div className={styles.collectionImgsWrapper}>
            <img src={borderApe1} alt="" />
            <img src={borderApe2} alt="" />
            <img src={borderApe3} alt="" />
            <img src={borderApe4} alt="" />
        </div>
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
  )
}

export default NftCollectionFull