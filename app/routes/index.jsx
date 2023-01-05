import { useLoaderData } from '@remix-run/react'
import {getGuitars} from '~/models/guitars.server'
import {getBlogs} from '~/models/blogs.server'
import ProductList from '~/components/product-list'
import PostList from '~/components/post-list'
import styleProducts from '~/styles/products.css'
import styleBlogs from '~/styles/blog.css'

export function meta(){

}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styleProducts
    },
    {
      rel: 'stylesheet',
      href: styleBlogs
    },
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
      <section className='container'>
        <PostList posts={posts} />
      </section>
    </>
  )
}

export default Index