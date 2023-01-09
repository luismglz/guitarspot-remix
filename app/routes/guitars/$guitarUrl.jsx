import { useState } from 'react'
import { getGuitarByUrl } from '~/models/guitars.server'
import { useLoaderData, useOutletContext } from '@remix-run/react'


export async function loader({ params }) {
  const { guitarUrl } = params;
  const guitar = await getGuitarByUrl(guitarUrl);

  if (guitar.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Product not found'
    })
  }


  return guitar
}


export function meta({ data }) {

  if (!data) {
    return {
      title: 'GuitarSpot | Product not found',
      description: 'Product not found'
    }
  }

  return {
    title: `GuitarSpot | ${data.data[0].attributes.name}`,
    description: `Guitars store ${data.data[0].attributes.name}`,
  }
}


function Guitar() {

  const { addToCart } = useOutletContext()

  const [quantity, setQuantity] = useState(0);

  const guitar = useLoaderData();
  const { brand, description, image, name, price } = guitar.data[0].attributes


  const handleSubmit = e => {
    e.preventDefault()

    if (quantity < 1) {
      alert('You must select a quantity')
      return
    }

    const selectedGuitar = {
      id: guitar.data[0].id,
      thumbnail: image.data.attributes.url,
      name,
      price,
      quantity
    }

    addToCart(selectedGuitar)

  }

  return (
    <main className='product'>
      <img
        className='image'
        src={image.data.attributes.url}
        alt={`${name}`}
      />
      <div className='content'>
        <h3>{name}</h3>
        <p className='text'>{description}</p>
        <p className='price'>${price}</p>
        <form onSubmit={handleSubmit} className='form'>
          <label htmlFor='quantity'>Quantity</label>
          <select
            onChange={e => setQuantity(parseInt(e.target.value))}
            id='quantity'>
            <option value="0">--Select--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input
            type='submit'
            value="Add to cart">
          </input>
        </form>
      </div>
    </main>
  )
}

export default Guitar