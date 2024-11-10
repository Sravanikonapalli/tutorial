// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalPriceAmount = 0
      cartList.forEach(eachItem => {
        totalPriceAmount += eachItem.price * eachItem.quantity
      })

      return (
        <>
          <div className="container">
            <h1 className="total-price">
              <span className="total-orders">Order Total:</span> Rs{' '}
              {totalPriceAmount}/-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <button className="button" type="button">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
