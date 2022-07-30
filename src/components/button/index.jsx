import styles from './button.style.module.css'

const Button = ({ text, onClick, primary, secondary }) => {
  const buttonStyles = {
    backgroundColor: primary ? 'brown' : secondary ? 'white' : 'brown',
    color: primary ? 'white' : secondary ? 'brown' : 'white',
    border: secondary ? '2px solid brown' : '',
  }

  return (
    <button className={styles.Button} onClick={onClick} style={buttonStyles}>
      {text}
    </button>
  )
}

export default Button
