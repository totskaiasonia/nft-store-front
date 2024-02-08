import styles from './AuthForm.module.css';

const AuthForm = () => {
  return (
    <>
      <div className={styles.inputRow}>
        <label>Login</label>
        <input/>
      </div>
      <div className={styles.inputRow}>
        <label>Password</label>
        <input/>
      </div>
      <button className={styles.formBtn}>start now</button>
    </>
  )
}

export default AuthForm