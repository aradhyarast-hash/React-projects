import styles from './header.module.css'
const Header = () => {
  return (
    <div className={styles.header}>
        <h3>Sheriyans</h3>
        <button className={styles.btn}>log</button>
    </div>
  )
}

export default Header