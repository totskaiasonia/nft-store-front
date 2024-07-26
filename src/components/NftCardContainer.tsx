import NftCard from "./NftCard";
import styles from './NftCardContainer.module.css';

interface NftCardContainerProps {
  category: string;
  data: any[];
}

const NftCardContainer = (props: NftCardContainerProps) => {
  return (
    <div className={styles.nftCardsWrapper}>
      {
        props.data.length > 0
        ?
        props.data.map((item) => (
          <NftCard 
            key={item.id}
            id={item.id}
            nftImage={item.image} 
            amountLeft={item.amountLeft}
            totalAmount={item.totalAmount}
            price={item.price}
            timeLeft={item.timeLeft}
            category={props.category}/>
        ))
        :
        <p style={{color: "red", fontSize: 20}}>*Content not found</p>
      }
    </div>
  )
}

export default NftCardContainer