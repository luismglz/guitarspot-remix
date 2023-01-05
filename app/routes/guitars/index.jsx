import { getGuitars } from '~/models/guitars.server'
import { useLoaderData } from '@remix-run/react'
import ProductList from '~/components/product-list'


export function meta() {
  return {
    title: 'GuitarSpot | Store',
    description: 'Products collection'
  }
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
      <ProductList
        guitars={guitars} />
  )
}

export default Store