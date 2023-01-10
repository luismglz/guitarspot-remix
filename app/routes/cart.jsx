import styles from '~/styles/cart.css'
import { useEffect, useState } from 'react'
import { useOutletContext } from '@remix-run/react'
import {ClientOnly} from 'remix-utils'

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
  const [total, setTotal] = useState(0);
  const { cart, updateQuantityCart, deleteProductFromCart } = useOutletContext();

  useEffect(() => {
    const calculateTotal = cart.reduce((accumulator, currentItem) => accumulator + (currentItem.quantity * currentItem.price), 0)

    setTotal(calculateTotal)
  }, [cart])

  return (
    <ClientOnly fallback={'Loading...'}>
      {()=>(

      
    <main className="container">
      <h1 className="heading">Shopping Cart</h1>
      <div className="content">
        <div className="cart">
          <h2>Items</h2>
          {cart?.length === 0 ? 'Empty' : (
            cart?.map(item => (
              <div key={item.id} className="product">
                <div>
                  <img src={item.thumbnail} alt={`${item.name} product`} />
                </div>
                <div>
                  <p className='name'>{item.name}</p>
                  <p className='quantity'>Quantity: </p>
                  <select
                    className='select'
                    onChange={e => updateQuantityCart({
                      quantity: +e.target.value,
                      id: item.id
                    })}
                    value={item.quantity}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <p className='price'><span>$ {item.price}</span></p>
                  <p className='subtotal'>Subtotal: <span>$ {item.quantity * item.price}</span></p>
                </div>
                <button
                  type='button'
                  className='btn_remove_item'
                  onClick={()=>deleteProductFromCart(item.id)}
                >X</button>
              </div>
            ))
          )}
        </div>
        <aside className="summary">
          <h3>Order summary</h3>
          <p>Total: ${total}</p>
        </aside>
      </div>
    </main>
      )}
    </ClientOnly>
  )
}

export default Cart
