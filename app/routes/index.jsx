import { useLoaderData } from '@remix-run/react'
import {getGuitars} from '~/models/guitars.server'
import {getBlogs} from '~/models/blogs.server'
import {getCourse} from '~/models/course.server'
import ProductList from '~/components/product-list'
import PostList from '~/components/post-list'
import Course from '~/components/course'
import styleProducts from '~/styles/products.css'
import styleBlogs from '~/styles/blog.css'
import styleCourse from '~/styles/course.css'

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
    {
      rel: 'stylesheet',
      href: styleCourse
    },
  ]
}

export async function loader(){

  const [guitars, posts, course] = await Promise.all([
    getGuitars(),
    getBlogs(),
    getCourse()
  ])

  return {
    guitars: guitars.data,
    posts: posts.data,
    course: course.data
  }
}



function Index() {

  const {guitars, posts, course} = useLoaderData()

  return (
    <>
    <main className='container'>
        <ProductList
          guitars={guitars}/>
    </main>
    <Course course={course.attributes}/>
      <section className='container'>
        <PostList posts={posts} />
      </section>
    </>
  )
}

export default Index