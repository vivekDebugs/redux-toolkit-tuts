import styles from './modal.style.module.css'
import Button from '../button'

const Modal = ({
  onOk = () => {},
  onCancel = () => {},
  okLabel = 'OK',
  cancelLabel,
  title,
  content,
}) => {
  return (
    <div className={styles.Modal}>
      <div className={styles.modalContent}>
        <div className={styles.contentContainer}>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        <div className={styles.buttonContainer}>
          <span>
            <Button primary text={okLabel} onClick={onOk} />
          </span>
          {cancelLabel ? (
            <span>
              <Button secondary text={cancelLabel} onClick={onCancel} />
            </span>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Modal
