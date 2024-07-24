import NftCard from "./NftCard";
import styles from './NftCardContainer.module.css';

import nfts from "../data/nfts";

interface NftCardContainerProps {
  category: string;
}

const NftCardContainer = (props: NftCardContainerProps) => {
  return (
    <div className={styles.nftCardsWrapper}>
      {
        nfts.map((item, index) => (
          <NftCard 
            key={index}
            index={index}
            nftImage={item.image} 
            amountLeft={item.amountLeft}
            totalAmount={item.totalAmount}
            price={item.price}
            timeLeft={item.timeLeft}
            category={props.category}/>
        ))
      }
      {/* <NftCard/>
      <NftCard/>
      <NftCard/>
      <NftCard/>
      <NftCard/>
      <NftCard/>
      <NftCard/>
      <NftCard/>
      <NftCard/>
      <NftCard/> */}
    </div>
  )
}

export default NftCardContainer