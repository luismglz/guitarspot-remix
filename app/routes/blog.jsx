import { useLoaderData } from '@remix-run/react';
import { getBlogs } from '~/models/blogs.server';
import Post from '~/components/post';
import styles from '~/styles/blog.css'

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}


export async function loader(){
  const posts = await getPosts();
  return posts.data;
}


function Blog() {

  const posts = useLoaderData();

  return (
    <main className="container">
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts.map(post =>(
          <Post
            key={post.id}
            post={post.attributes}/>
        ))

        }
      </div>
    </main>
  )
}

export default Blog