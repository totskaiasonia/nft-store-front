import Wave from 'react-wavify';
import styles from './StartSteps.module.css';

import { PiUserCircleThin, PiWallet } from "react-icons/pi";
import { RiAuctionLine } from "react-icons/ri";

import '../App.css';
import MyStepper from '../components/ui/MyStepper';
import { useEffect, useState } from 'react';

import { config } from '../setup';

const steps = [
    {
        icon: <PiUserCircleThin size={200}/>,
        title: 'Sign up',
        buttonTitle: 'sign up now',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sequi harum sunt, voluptatem at quam dolorem, provident maxime cupiditate dolor exercitationem unde enim nostrum numquam, optio laborum reiciendis dolore excepturi!',
    },
    {
        icon: <PiWallet size={200}/>,
        title: 'Connect wallet',
        buttonTitle: 'connect wallet now',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sequi harum sunt, voluptatem at quam dolorem, provident maxime cupiditate dolor exercitationem unde enim nostrum numquam, optio laborum reiciendis dolore excepturi!',
    },
    {
        icon: <RiAuctionLine size={200}/>,
        title: 'Start auction',
        buttonTitle: 'start auction now',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sequi harum sunt, voluptatem at quam dolorem, provident maxime cupiditate dolor exercitationem unde enim nostrum numquam, optio laborum reiciendis dolore excepturi!',
    },
]

const StartSteps = () => {
    const [activeStep, setActiveStep] = useState<number>(0);
    const [transitionClass, setTransitionClass] = useState('');

    const nextStep = () => {
        setTransitionClass(styles.stepExit);
        setTimeout(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 500); // Duration of the transition
    };
    
    useEffect(() => {
        // Add transition class when step changes
        setTransitionClass(styles.stepEnter);
        const timeoutId = setTimeout(() => {
            setTransitionClass('');
        }, 500); // Duration of the transition

        return () => clearTimeout(timeoutId);
    }, [activeStep]);
    return (
        <>
            <h3 className={styles.title}>{config.section_2_title_before_outline} <span>{config.section_2_title_outline}</span> {config.section_2_title_after_outline}</h3>
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
                            <stop offset="20%"  stopColor={`${config.gradient_color_1}70`} />
                            <stop offset="50%" stopColor={`${config.gradient_color_2}70`} />
                            <stop offset="90%" stopColor={`${config.gradient_color_3}70`} />
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
                        <MyStepper activeStep={activeStep}/>
                    </div>
                    <div className={`${styles.mainInfoContent} layout ${transitionClass}`}>
                            {
                                steps[activeStep].icon
                            }
                            <div className={styles.stepsDescWrapper}>
                                <h2>{steps[activeStep].title}</h2>
                                <p>{steps[activeStep].text}</p>
                                <div className={styles.stepsBtnWrapper}>
                                    <button>{steps[activeStep].buttonTitle}</button>
                                    <button style={{background: 'rgba(248, 248, 248, 0.2)'}} onClick={() => nextStep()}>next step</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StartSteps