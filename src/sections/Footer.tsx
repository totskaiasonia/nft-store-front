import styles from './Footer.module.css';
import logo from '../assets/logo.svg';
import { config } from '../setup';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='layout'>
        <div className={styles.footerMainInfoWrapper}>
          <div>
            <img className={styles.logo} src={logo}/>
            <p>{config.footer_phone_number}</p>
            <p>{config.footer_email}</p>
            <p>{config.footer_address}</p>
          </div>
          <div>
            <h4>Navigation</h4>
            <div>
              <a className={styles.navItem} href="/">home</a>
              <a className={styles.navItem} href="/store/all">store</a>
              <a className={styles.navItem}>contacts</a>
            </div>
          </div>
          <div>
            <input className={styles.input} type="text" placeholder='search'/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer