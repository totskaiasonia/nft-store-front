import { SetStateAction } from 'react';
import styles from './SignUp.module.css';

interface PropsType {
  toogleFormHandler: (value: SetStateAction<boolean>) => void
}

const SignUp = (props: PropsType) => {
  return (
    <div className={`${styles.singUpForm} layout`}>
      <div className={styles.buttonsGroup}>
        <button className={styles.activeBtn} onClick={() => props.toogleFormHandler(true)}>sign up</button>
        <button onClick={() => props.toogleFormHandler(false)}>log in</button>
      </div>
      <form action="submit">
        <label>email</label>
        <input placeholder='example@gmail.com'/>
        <label>username</label>
        <input placeholder='example'/>
        <label>password</label>
        <input placeholder='password'/>
        <input placeholder='repeat password'/>
        <label>gender</label>
        <select aria-placeholder='male'>
          <option>male</option>
          <option>female</option>
          <option>non-binary</option>
        </select>
      </form>
      <button>continue</button>
    </div>
  )
}

export default SignUp