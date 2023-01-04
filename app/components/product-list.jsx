import Product from './product'

function ProductList({guitars}) {
  return (
    <>
      <h2 className='heading'>Explore our collection</h2>
      {guitars.length && (
        <div className='guitars-grid'>
          {guitars.map(guitar => (
            <Product
              key={guitar?.id}
              product={guitar?.attributes}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default ProductList