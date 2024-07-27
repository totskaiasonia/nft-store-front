import '../App.css';
import Comment from '../components/Comment';
import { config } from '../setup';
import styles from './WhatPeopleSay.module.css';
import { useInView, animated } from '@react-spring/web'

const WhatPeopleSay = () => {

  const [ref1, springs1] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: -100,
      },
      to: {
        opacity: 1,
        x: 0,
      },
      config: {
        tension: 100,
      },
    }),
    {
      rootMargin: '-40% 0%',
      once: true,
    }
  )
  const [ref2, springs2] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: '100%',
      },
      to: {
        opacity: 1,
        x: '0%',
      },
      config: {
        tension: 100,
      },
    }),
    {
      rootMargin: '-40% 0%',
      once: true,
    }
  )
  const [ref3, springs3] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: -100,
      },
      to: {
        opacity: 1,
        x: 0,
      },
      config: {
        tension: 100,
      },
    }),
    {
      rootMargin: '-40% 0%',
      once: true,
    }
  )

  return (
    <div className={`${styles.wrapper} layout`}>
        <h3 className={styles.title}>{config.section_5_title_before_outline} <span>{config.section_5_title_outline}</span> {config.section_5_title_after_outline}</h3>
        <animated.div ref={ref1} style={springs1}>
          <div className={styles.commentWrapper} style={{width: '50%'}}>
              <Comment text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut consequat purus. Quisque accumsan magna.'/>
          </div>
        </animated.div>
        <animated.div ref={ref2} style={springs2}>
          <div className={styles.commentWrapper} style={{margin: '20px 20px 20px auto', width: '65%'}}>
              <Comment text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper id orci viverra lacinia. Donec felis ipsum, congue at quam non, tristique auctor ipsum. Nunc blandit libero ac nisi euismod, eu mollis turpis dignissim.'/>
          </div>
        </animated.div>
        <animated.div ref={ref3} style={springs3}>
          <div className={styles.commentWrapper} style={{width: '60%'}}>
              <Comment text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper id orci viverra lacinia. Donec felis ipsum, congue at quam non, tristique auctor ipsum.'/>
          </div>
        </animated.div>
    </div>
  )
}

export default WhatPeopleSay