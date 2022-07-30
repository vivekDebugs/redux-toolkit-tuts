import styles from './badge.style.module.css'

const Badge = ({ Icon, value = 0 }) => {
  return (
    <div className={styles.Badge}>
      <Icon fontSize={26} />
      {Boolean(value) && <span className={styles.value}>{value}</span>}
    </div>
  )
}

export default Badge
