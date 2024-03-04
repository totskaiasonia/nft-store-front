import styles from './Category.module.css';

interface PropsType {
    categoryName: string
}

const Category = (props: PropsType) => {
  return (
    <button className={styles.categoryBtn}>{props.categoryName}</button>
  )
}

export default Category