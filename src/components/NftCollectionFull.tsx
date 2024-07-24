import styles from './NftCollectionFull.module.css';

import borderApe1 from '../assets/bored-ape-1.png';
import borderApe2 from '../assets/bored-ape-2.png';
import borderApe3 from '../assets/bored-ape-3.png';
import borderApe4 from '../assets/bored-ape-4.png';

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