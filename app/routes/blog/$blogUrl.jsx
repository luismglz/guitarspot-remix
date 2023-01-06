import { useLoaderData } from '@remix-run/react';
import { getBlogByUrl } from '~/models/blogs.server'
import {formatDate} from '~/utils/helpers'

export function meta({ data }) {

  if (!data) {
    return {
      title: 'GuitarSpot | Post not found',
      description: 'Post not found'
    }
  }

  return {
    title: `GuitarSpot | ${data.data[0].attributes.title}`,
    description: `Post ${data.data[0].attributes.title}`,
  }
}

export async function loader({ params }) {
  const { blogUrl } = params;
  const post = await getBlogByUrl(blogUrl);

  if(post.data.length === 0){
    throw new Response('',{
      status: 404,
      statusText: 'Post not found'
    })
  }

  return post
}



export default function Blog() {

  const post = useLoaderData();
  
  const { title, content, url, publishedAt, thumbnail } = post?.data[0]?.attributes
  return (
    <article className='post mt-3'>
      <div className="content">
        <img className='thumbnail' src={thumbnail.data.attributes.url} alt={`blog thumbnail ${title}`} />
        <h3>{title}</h3>
        <p className="date">{formatDate(publishedAt)}</p>
        <p className="post__body">{content}</p>
      </div>
    </article>
  )
}

