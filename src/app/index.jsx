import { useEffect } from 'react'
import styles from './app.style.module.css'
import { Badge, Button, CartItem, Modal } from '../components'
import { BsBag } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import {
  setTotalQuantity,
  setTotalAmount,
  clearCart,
  setCartItems,
} from '../redux/features/cart.slice'
import { setIsOpen as setIsModalOpen } from '../redux/features/modal.slice'
import CART_ITEMS from '../lib/data'

const App = () => {
  const dispatch = useDispatch()

  const {
    cartItems,
    totalQuantity: cartTotalQuantity,
    totalAmount: cartTotalAmount,
  } = useSelector(store => store.cart)

  const { isOpen: isModalOpen } = useSelector(store => store.modal)

  useEffect(() => {
    const getCartItems = async () => {
      const API_ENDPOINT = 'http://localhost:8080/cart-items'
      try {
        const res = await fetch(API_ENDPOINT)
        if (res.ok) {
          const data = await res.json()
          return data
        }
      } catch (err) {
        console.error(err)
        return CART_ITEMS
      }
    }

    ;(async () => dispatch(setCartItems(await getCartItems())))()
  }, [])

  useEffect(() => {
    dispatch(setTotalQuantity())
    dispatch(setTotalAmount())
  }, [cartItems])

  const handleClearCartClick = () => {
    dispatch(setIsModalOpen(true))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
    dispatch(setIsModalOpen(false))
  }

  const handleCancelButtonClick = () => {
    dispatch(setIsModalOpen(false))
  }

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <h2>React shopping cart</h2>
        <div className={styles.cartIconWrapper}>
          <Badge Icon={BsBag} value={cartTotalQuantity} />
        </div>
      </header>

      {cartItems.length ? (
        <>
          <section className={styles.cartItemsWrapper}>
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </section>

          <div className={styles.cartTotalContainer}>
            <h3>Cart Total</h3>
            <span className={styles.cartTotalAmount}>
              Rs. {cartTotalAmount}
            </span>
            <div>
              <Button text='Clear' primary onClick={handleClearCartClick} />
            </div>
          </div>
        </>
      ) : (
        <div className={styles.emptyCartMessageWrapper}>
          <h2>Oops.. Your cart is empty</h2>
        </div>
      )}

      <footer className={styles.footer}>Made with ❤</footer>

      {isModalOpen && (
        <Modal
          title={'Are you sure?'}
          content={'Do you want to clear the cart?'}
          okLabel={'OK'}
          cancelLabel={'Cancel'}
          onOk={handleClearCart}
          onCancel={handleCancelButtonClick}
        />
      )}
    </div>
  )
}

export default App
