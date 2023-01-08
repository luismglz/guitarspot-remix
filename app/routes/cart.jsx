import styles from '~/styles/cart.css'

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
  return (
    <main className="container">
      <h1 className="heading">Shopping Cart</h1>
      <div className="content">
        <div className="cart">
          <h2>Items</h2>
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
