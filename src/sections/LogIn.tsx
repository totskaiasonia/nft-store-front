import { SetStateAction } from 'react';
import styles from './LogIn.module.css';

interface PropsType {
  toogleFormHandler: (value: SetStateAction<boolean>) => void
}

const LogIn = (props: PropsType) => {
  return (
    <div className={`${styles.logInForm} layout`}>
      <div className={styles.buttonsGroup}>
        <button onClick={() => props.toogleFormHandler(true)}>sign up</button>
        <button className={styles.activeBtn} onClick={() => props.toogleFormHandler(false)}>log in</button>
      </div>
      <form action="submit">
        <label>email</label>
        <input placeholder='example@gmail.com'/>
        <label>password</label>
        <input placeholder='password'/>
      </form>
      <button>continue</button>
    </div>
  )
}

export default LogIn