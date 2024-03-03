import styles from './CategoryLabel.module.css';

interface PropsType {
    category: string,
    color: string,
}

const CategoryLabel = (props: PropsType) => {
  return (
    <div className={styles.category} style={{background: props.color}}>{props.category}</div>
  )
}

export default CategoryLabel