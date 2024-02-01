
import styles from './Header.module.css';
import logo from '../assets/logo.svg';

import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className='layout'>
        <div className={styles.headerLayout}>
          <button onClick={() => navigate('/')}>
            <img className={styles.logo} src={logo}/>
          </button>
          <div>
            <a className={styles.navItem} href="/">home</a>
            <a className={styles.navItem} href="/store">store</a>
            <a className={styles.navItem}>contacts</a>
          </div>
          <div>
            <button>log in</button>
            <button>sign up</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header