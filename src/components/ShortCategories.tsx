import styles from './ShortCategories.module.css';

const ShortCategories = () => {
  return (
    <div className={styles.btnsWrapper}>
        <button>all</button>
        <button>art</button>
        <button>sport</button>
        <button>gaming</button>
        <button>3D</button>
    </div>
  )
}

export default ShortCategories