import Breadcrumbs from "@mui/material/Breadcrumbs"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider";

import { IoLayers } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa6";

import styles from './Good.module.css';

import nftImg from '../../assets/nft-sample.jpg';
import avaImg from '../../assets/authorAva.jpg';
import ethImg from '../../assets/eth-icon.svg';

import CategoryLabel from "../../components/CategoryLabel";

const Good = () => {
  return (
    <div className={`layout`}>
        <Breadcrumbs aria-label="breadcrumb" style={{marginTop: '100px'}}>
            <Link underline="hover" color="inherit" href="/store">
                store
            </Link>
            <Link underline="hover" color="inherit" href="/store/modern">
                modern
            </Link>
            <Typography color="text.primary">flasking pinky fluids</Typography>
        </Breadcrumbs>
        <div className={styles.goodWrapper}>
            <img className={styles.goodImg} src={nftImg} alt=""/>
            <div className={styles.goodInfo}>
                <div className={styles.mainInfo}>
                    <h1>Flasking pinky fluids</h1>
                    <div className={styles.mainInfo_author}>
                        <p>Tom Smith</p>
                        <img src={avaImg} alt="" />
                    </div>
                </div>
                <div className={styles.goodAccessory}>
                    <div className={styles.goodAccessory_collection}>
                        <IoLayers color="black" size={25}/>
                        <p>fluids</p>
                    </div>
                    <Divider orientation="vertical" flexItem/>
                    <div className={styles.goodAccessory_categories}>
                        <div style={{margin: '0 10px 0 20px'}}>
                            <CategoryLabel category="modern" color='#FFECCF'/>
                        </div>
                        <div style={{marginRight: '10px'}}>
                            <CategoryLabel category="art" color='#E7CFFF'/>
                        </div>
                    </div>
                </div>
                <div className={styles.maxPrice}>
                    <p>12.5</p>
                    <img src={ethImg} alt="" />
                </div>
                <div className={styles.makeBid}>
                    <input type="number" placeholder="0.5"/>
                    <button>bid</button>
                </div>
                <div className={styles.recentBids}>
                    <h3>Recent bids</h3>
                    <div className={styles.biddersWrapper}>
                        <div className={styles.bidder}>
                            <div className={styles.bidderInfo}>
                                <img src={avaImg} alt="" />
                                <p>Billy Booy</p>
                            </div>
                            <div className={styles.bidderBid}>
                                <img src={ethImg} alt="" />
                                <p>0.4 Eth</p>
                            </div>
                        </div>
                        <Divider style={{margin: '10px 0'}}/>
                        <div className={styles.bidder}>
                            <div className={styles.bidderInfo}>
                                <img src={avaImg} alt="" />
                                <p>Billy Booy</p>
                            </div>
                            <div className={styles.bidderBid}>
                                <img src={ethImg} alt="" />
                                <p>0.4 Eth</p>
                            </div>
                        </div>
                        <Divider style={{margin: '10px 0'}}/>
                        <div className={styles.bidder}>
                            <div className={styles.bidderInfo}>
                                <img src={avaImg} alt="" />
                                <p>Billy Booy</p>
                            </div>
                            <div className={styles.bidderBid}>
                                <img src={ethImg} alt="" />
                                <p>0.4 Eth</p>
                            </div>
                        </div>
                    </div>
                    <button>see all <FaArrowDown size={12}/></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Good