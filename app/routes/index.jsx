import { useLoaderData } from '@remix-run/react'
import {getGuitars} from '~/models/guitars.server'
import {getBlogs} from '~/models/blogs.server'
import ProductList from '~/components/product-list'
import styleProducts from '~/styles/products.css'

export function meta(){

}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styleProducts
    }
  ]
}

export async function loader(){

  const [guitars, posts] = await Promise.all([
    getGuitars(),
    getBlogs()
  ])


  return {
    guitars: guitars.data,
    posts: posts.data
  }
}



function Index() {

  const {guitars, posts} = useLoaderData()

  return (
    <>
    <main className='container'>
        <ProductList
          guitars={guitars}/>
    </main>
    </>
  )
}

export default Index