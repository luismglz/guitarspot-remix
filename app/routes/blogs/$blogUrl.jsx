import { getBlogByUrl } from '~/models/blogs.server'

export async function loader({ params }) {
  const { blogUrl } = params;
  const post = await getBlogByUrl(blogUrl);

  if(post.data.length === 0){
    throw new Response('',{
      status: 404,
      statusText: 'Post not found'
    })
  }


  return {}
}

export default function Blog() {
  return (
    <div>$blogUrl</div>
  )
}

