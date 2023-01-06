import { useLoaderData } from '@remix-run/react';
import { getBlogs } from '~/models/blogs.server';
import PostList from '~/components/post-list';

export function meta() {
  return {
    title: 'GuitarSpot | Blog',
    description: 'GuitarSpot, music blog, guitar store'
  }
}

export async function loader() {
  const posts = await getBlogs();
  return posts.data;
}


function Blog() {

  const posts = useLoaderData();

  return (
    <PostList posts={posts} />
  )
}

export default Blog