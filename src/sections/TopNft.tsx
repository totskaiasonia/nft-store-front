import TopNftCard from '../components/TopNftCard';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from   './TopNft.module.css';

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

import nfts from '../data/nfts';

import { config } from '../setup';

const randIndex = Math.floor(Math.random() * 20);
const cards = nfts.slice(randIndex, randIndex+5)

const TopNft = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [centerSlideIndex, setCenterSlideIndex] = useState(0);

  let settings = {
    className: styles.nftCardsWrapper,
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <FaAngleRight color='black'/>,
    prevArrow: <FaAngleLeft color='black'/>
  };

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

  const handleAfterChange = (index: number) => {
    setCenterSlideIndex(index);
  };

  return (
    <div className={styles.topNftSectionWrapper} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <h3 className={styles.title}>{config.section_1_title_before_outline} <span>{config.section_1_title_outline}</span> {config.section_1_title_after_outline}</h3>
        {/* <div className={styles.nftCardsWrapper}> */}
          <Slider {...settings} afterChange={handleAfterChange}>
            {
              cards.map((item, index) => (
                    <TopNftCard isActive={index == centerSlideIndex}
                      key={item.id}
                      author={item.author}
                      image={item.image}
                      price={item.price}
                    />
              ))
            }
          </Slider>
        {/* </div>   */}

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