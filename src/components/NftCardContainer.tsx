import NftCard from "./NftCard";
import styles from './NftCardContainer.module.css';

interface PropsType {
  placeIsSpaceBetween: boolean
}

const NftCardContainer = (props: PropsType) => {
  return (
    <div className={styles.nftCardsWrapper} style={{justifyContent: props.placeIsSpaceBetween ? 'space-between' : 'flex-start'}}>
      <NftCard/>
      <NftCard/>
      <NftCard/>
      <NftCard/>
      <NftCard/>
      <NftCard/>
      <NftCard/>
      <NftCard/>
      <NftCard/>
      <NftCard/>
    </div>
  )
}

export default NftCardContainer