import '../App.css';
import Comment from '../components/Comment';
import styles from './WhatPeopleSay.module.css';

const WhatPeopleSay = () => {
  return (
    <div className={`${styles.wrapper} layout`}>
        <h3 className={styles.title}><span>what people say </span>about us</h3>
        <div className={styles.commentWrapper} style={{width: '50%'}}>
            <Comment text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut consequat purus. Quisque accumsan magna.'/>
        </div>
        <div className={styles.commentWrapper} style={{margin: '20px 20px 20px auto', width: '65%'}}>
            <Comment text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper id orci viverra lacinia. Donec felis ipsum, congue at quam non, tristique auctor ipsum. Nunc blandit libero ac nisi euismod, eu mollis turpis dignissim.'/>
        </div>
        <div className={styles.commentWrapper} style={{width: '60%'}}>
            <Comment text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper id orci viverra lacinia. Donec felis ipsum, congue at quam non, tristique auctor ipsum.'/>
        </div>
    </div>
  )
}

export default WhatPeopleSay