import {getGuitars} from '~/models/guitars.server'
import {useLoaderData} from '@remix-run/react'
import ProductList from '~/components/product-list'
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
      <ProductList
      guitars={guitars}/>
    </main>
  )
}

export default Store