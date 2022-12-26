import {getGuitars} from '~/models/guitars.server'
import {useLoaderData} from '@remix-run/react'
import Product from '~/components/product'
import styles from '~/styles/products.css'


export function meta(){
  return{
    title: 'GuitarSpot | Store',
    description: 'Products collection'
  }
}

export function links(){
  return[
    {
      rel:'stylesheet',
      href:styles
    }
  ]
}

//loader-> get data from third party
//action -> get data from form
export async function loader() {
  const guitars = await getGuitars()
  return guitars.data
}


function Store() {
  const guitars = useLoaderData();

  return (
    <main className='container'>
      <h2 className='heading'>Explore our collection</h2>
      {guitars.length && (
        <div className='guitars-grid'>
          {guitars.map(guitar => (
            <Product
              key={guitar?.id}
              product={guitar?.attributes}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default Store