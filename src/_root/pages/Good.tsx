import Breadcrumbs from "@mui/material/Breadcrumbs"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider";

import { IoLayers } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa6";

import styles from './Good.module.css';

import avaImg from '../../assets/authorAva.jpg';
import ethImg from '../../assets/eth-icon.svg';

import CategoryLabel from "../../components/CategoryLabel";
import { useLocation, useParams } from "react-router-dom";

import nfts from "../../data/nfts";
import { useEffect, useState } from "react";

const Good = () => {
    const {nftId} = useParams<{ nftId: string }>();
    const location = useLocation();
    const { category } = location.state;

    const [nft, setNft] = useState<any>(null);

    const id = parseInt(nftId || '', 10);

    useEffect(() => {
        window.scroll(0, 0);
        setNft(nfts.find(item => item.id === id));
    }, [])
  return (
    <div className={`layout`}>
        {
        nft && <Breadcrumbs aria-label="breadcrumb" style={{marginTop: '100px'}}>
            <Link underline="hover" color="inherit" href="/store/all">
                store
            </Link>
            <Link underline="hover" color="inherit" href={`/store/${category}`}>
                {category}
            </Link>
            <Typography color="text.primary">{nft.name.toLowerCase()}</Typography>
        </Breadcrumbs>
        }
        {
        nft && <div className={styles.goodWrapper}>
            <img className={styles.goodImg} src={nft.image} alt=""/>
            <div className={styles.goodInfo}>
                <div className={styles.mainInfo}>
                    <h1>{nft.name}</h1>
                    <div className={styles.mainInfo_author}>
                        <p>Tom Smith</p>
                        <img src={avaImg} alt="" />
                    </div>
                </div>
                <div className={styles.goodAccessory}>
                    <div className={styles.goodAccessory_collection}>
                        <IoLayers color="black" size={25}/>
                        <p>{nft.collection}</p>
                    </div>
                    <Divider orientation="vertical" flexItem/>
                    <div className={styles.goodAccessory_categories}>
                        {
                            nft.categories.map((item: any) => (
                                <div key={item} className={styles.categoryLabelWrapper}>
                                    <CategoryLabel category={item} color='#E7CFFF'/>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={styles.maxPrice}>
                    <p>{nft.price}</p>
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
        }
    </div>
  )
}

export default Good