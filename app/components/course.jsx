

export default function Course({course}) {
  const {title, content, thumbnail, publishedAt} = course;
  return (
    <section className="course">
      <style jsx="true">
        {`
        .course{
          background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 /.7)), url(${thumbnail.data.attributes.url})
        }
        `}
      </style>
      <div className="container course__grid">
        <div className="content">
          <h2 className="heading">{title}</h2>
          <p className="course__content">{content}</p>

        </div>
      </div>
    </section>
  )
}