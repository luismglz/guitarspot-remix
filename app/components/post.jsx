import {Link} from '@remix-run/react'

export default function Post({post}) {
  const { title, content, url, thumbnail, publishedAt} = post;
  console.log(thumbnail)
  return (
    <article className='post'>
      <div className="content">
        <img className='thumbnail' src={thumbnail.data.attributes.formats.small.url} alt={`blog thumbnail ${title}`} />
        <h3>{title}</h3>
        <p className="date">{publishedAt}</p>
        <p className="summary">{content}</p>
        <Link className='link' to={`/blogs/${url}`}>Read post</Link>
      </div>
    </article>
  )
}
