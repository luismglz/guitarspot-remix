import styles from '~/styles/cart.css'
import { useOutletContext } from '@remix-run/react'

export function meta() {
  return {
    title: 'GuitarSpot | Shopping Cart',
    description: 'Guitars for sale, music, blog, shopping cart, music accesories for sale'
  }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

function Cart() {

  const {cart}= useOutletContext()

  return (
    <main className="container">
      <h1 className="heading">Shopping Cart</h1>
      <div className="content">
        <div className="cart">
          <h2>Items</h2>
          {cart.length === 0 ? 'Empty': (
            cart.map(item =>(
              <div key={item.id} className="product">
                <div>
                  <img src={item.thumbnail} alt={`${item.name} product`}/>
                </div>
                <div>
                  <p className='name'>{item.name}</p>
                  <p className='quantity'>Quantity: {item.quantity}</p>
                  <p className='price'><span>$ {item.price}</span></p>
                  <p className='subtotal'>Subtotal: <span>$ {item.quantity * item.price}</span></p>
                </div>
              </div>
            ))
          )}
        </div>
        <aside className="summary">
          <h3>Order summary</h3>
          <p>Total:</p>
        </aside>
      </div>
    </main>
  )
}

export default Cart
