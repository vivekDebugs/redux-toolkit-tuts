import styles from './cartItem.style.module.css'
import { useDispatch } from 'react-redux'
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from '../../redux/features/cart.slice'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'

const CartItem = ({ item }) => {
  const dispatch = useDispatch()

  const handleIncreaseQuantity = item => {
    dispatch(incrementQuantity(item.id))
  }

  const handleDecreaseQuantity = item => {
    if (item.quantity <= 1) return dispatch(removeItem(item.id))
    dispatch(decrementQuantity(item.id))
  }

  const handleRemoveItem = item => {
    dispatch(removeItem(item.id))
  }

  return (
    <div className={styles.CartItem}>
      <img src={item.image} className={styles.itemImage} />
      <span className={styles.itemName}>{item.name}</span>
      <span className={styles.amount}>Rs. {item.price}</span>
      <div className={styles.quantityContainer}>
        <FiChevronUp
          fontSize={30}
          onClick={() => handleIncreaseQuantity(item)}
        />
        <span className={styles.quantity}>{item.quantity}</span>
        <FiChevronDown
          fontSize={30}
          onClick={() => handleDecreaseQuantity(item)}
        />
      </div>
      <div>
        <AiOutlineDelete fontSize={30} onClick={() => handleRemoveItem(item)} />
      </div>
    </div>
  )
}

export default CartItem
