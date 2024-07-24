
import styles from './Header.module.css';
import logo from '../assets/logo.svg';

import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className='layout'>
        <div className={styles.headerLayout}>
          <button onClick={() => navigate('/')} style={{width: '170px'}}>
            <img className={styles.logo} src={logo}/>
          </button>
          <div className={styles.nav}>
            <a className={styles.navItem} href="/">home</a>
            <a className={styles.navItem} href="/store/all">store</a>
            <a className={styles.navItem}>contacts</a>
          </div>
          <div>
            <button className={styles.logInBtn}>log in</button>
            <button className={styles.singUpBtn}>sign up</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header