import {Link} from '@remix-run/react'

function Product({product}) {
  const {description, name, price, brand, image, url} = product;
  console.log()

  return (
    <div className='product'>
      <img src={image.data.attributes.formats.medium.url} alt={`Image ${name}`}/>
      <div className='content'>
        <h3>{name}</h3>
        <p className='description'>{description}</p>
        <p className='price'>${price}</p>
        <Link className='link' to={`/guitars/${url}`}>See product</Link>
      </div>
    </div>
  )
}

export default Product