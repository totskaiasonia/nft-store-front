import TopNftCard from '../components/TopNftCard';
import { useSpring, animated } from 'react-spring';
import styles from './TopNft.module.css';
import { useState } from 'react';

const TopNft = () => {
  const [isHovered, setIsHovered] = useState(false);

  const circleStyle1 = useSpring({
    transform: isHovered ? 'scale(1.4)' : 'scale(1)',
    config: {  mass: 4, tension: 280, friction: 20 },
  });
  const circleStyle2 = useSpring({
    transform: isHovered ? 'scale(1.25)' : 'scale(1)',
    config: { mass: 6, tension: 280, friction: 20 },
  });
  const circleStyle3 = useSpring({
    transform: isHovered ? 'scale(1.22)' : 'scale(1)',
    config: {  mass: 5, tension: 280, friction: 20 },
  });

  return (
    <div className={styles.topNftSectionWrapper} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <h3 className={styles.title}>top nft of <span>month</span></h3>
        <div className={styles.nftCardsWrapper}>
          <TopNftCard isActive={false}/>
          <TopNftCard isActive={true}/>
          <TopNftCard isActive={false}/>
        </div>

        <div className={styles.paginationBtnsWrapper}>
          <button className={`${styles.paginationBtn} ${styles.active}`}></button>
          <button className={styles.paginationBtn}></button>
          <button className={styles.paginationBtn}></button>
        </div>

        <animated.div
          style={{
            ...circleStyle1,
            width: '480px',
            height: '480px',
            borderRadius: '50%',
            position: 'absolute',
            top: '-400px',
            left: '-400px',
            backgroundColor: '#ECF6F6',
            zIndex: '-2'
          }}
        />
        <animated.div
          style={{
            ...circleStyle2,
            width: '850px',
            height: '850px',
            borderRadius: '50%',
            position: 'absolute',
            top: '-100px',
            right: '-250px',
            backgroundColor: '#FAF1FD',
            zIndex: '-2'
          }}
        />
        <animated.div
          style={{
            ...circleStyle3,
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            position: 'absolute',
            top: '100px',
            left: '-0px',
            backgroundColor: '#ECEEF5',
            zIndex: '-2'
          }}
        />
    </div>
  )
}

export default TopNft