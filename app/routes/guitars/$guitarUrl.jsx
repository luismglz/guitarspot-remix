import React from 'react'
import {getGuitarByUrl} from '~/models/guitars.server'
import {useLoaderData} from '@remix-run/react'
import styles from '~/styles/products.css'


export async function loader({ params }) {
  const { guitarUrl } = params;
  const guitar = await getGuitarByUrl(guitarUrl);
  
  if(guitar.data.length === 0){
    throw new Response('',{
      status: 404,
      statusText: 'Product not found'
    })
  }


  return guitar
}


export function meta({data}){

  if(!data){
    return{
      title: 'GuitarSpot | Product not found',
      description: 'Product not found'
    }
  }

  return{
    title: `GuitarSpot | ${data.data[0].attributes.name}`,
    description: `Guitars store ${data.data[0].attributes.name}`,
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



function GuitarUrl() {

  const guitar = useLoaderData();
  const { brand, description, image, name, price} = guitar.data[0].attributes

  return (
    <main className='container product'>
      <img 
        className='image' 
        src={image.data.attributes.url} 
        alt={`Image guitar ${name}`}
      />
      <div className='content'>
        <h3>{name}</h3>
        <p className='text'>{description}</p>
        <p className='price'>${price}</p>
      </div>
    </main>
  )
}

export default GuitarUrl