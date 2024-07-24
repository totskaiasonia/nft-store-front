import styles from './NftCard.module.css';
import eth from '../assets/eth-icon.svg';

import { useNavigate } from 'react-router-dom';

interface NftCardProps {
  index: number;
  nftImage: string;
  amountLeft: number;
  totalAmount: number;
  price: number;
  timeLeft: {
    h: number;
    m: number;
    s: number;
  };
  category: string;
}

const NftCard = (props: NftCardProps) => {
  const navigate = useNavigate();
  return (
    <div className={styles.nftCardWrapper} onClick={() => navigate(`/goods/${props.index}`, {state: {category: props.category}})}>
        <img src={props.nftImage}/>
        <p className={styles.amount}>{props.amountLeft} of {props.totalAmount}</p>
        <h3><img src={eth} alt="" />{props.price} Eth</h3>
        <p className={styles.timeLeft}>{props.timeLeft.h}h {props.timeLeft.m}m {props.timeLeft.s}s left</p>
        <button>Place a bid</button>
    </div>
  )
}

export default NftCard