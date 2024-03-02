import Wave from 'react-wavify';
import styles from './StartSteps.module.css';

import { FaRegCircleUser } from "react-icons/fa6";
import { PiUserCircleThin } from "react-icons/pi";

import '../App.css';
import { useState } from 'react';
import MyStepper from '../components/ui/MyStepper';

const StartSteps = () => {
    const [isActive, setIsActive] = useState([true, false, false, false]);
    return (
        <>
            <h3 className={styles.title}><span>create and sell</span> your nfts</h3>
            <div className={styles.sectionWrapper}>
                <Wave style={{display: 'flex'}} 
                    fill="url(#gradient)"
                    options={{
                        height: 70,
                        amplitude: 20,
                        speed: 0.25,
                        points: 5
                }}>
                    <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(13)">
                            <stop offset="20%"  stopColor="#FEC8F2" />
                            <stop offset="50%" stopColor="#E0FBF2" />
                            <stop offset="90%" stopColor="#C5D6EF" />
                        </linearGradient>
                    </defs>
                </Wave>
                <div className={styles.topCurve}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles.curveFill}></path>
                    </svg>
                </div>
                <div className={styles.mainInfoWrapper}>
                    <div style={{marginTop: '30px'}}>
                        <MyStepper/>
                    </div>
                    <div className={`${styles.mainInfoContent} layout`}>
                        <PiUserCircleThin size={200}/>
                        <div className={styles.stepsDescWrapper}>
                            <h2>Sign up</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sequi harum sunt, voluptatem at quam dolorem, provident maxime cupiditate dolor exercitationem unde enim nostrum numquam, optio laborum reiciendis dolore excepturi!</p>
                            <div className={styles.stepsBtnWrapper}>
                                <button>sign up now</button>
                                <button style={{background: 'rgba(248, 248, 248, 0.2)'}}>next step</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StartSteps