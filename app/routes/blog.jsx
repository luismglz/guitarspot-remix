import { useLoaderData } from '@remix-run/react';
import { getBlogs } from '~/models/blogs.server';
import PostList from '~/components/post-list';
import styles from '~/styles/blog.css'

export function meta(){
  return{
    title: 'GuitarSpot | Blog',
    description: 'GuitarSpot, music blog, guitar store'
  }
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}


export async function loader(){
  const posts = await getBlogs();
  return posts.data;
}


function Blog() {

  const posts = useLoaderData();

  return (
    <main className="container">
      <PostList posts={posts}/>
    </main>
  )
}

export default Blog