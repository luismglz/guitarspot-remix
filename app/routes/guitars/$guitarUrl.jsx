import React from 'react'
import {getGuitarByUrl} from '~/models/guitars.server'
import {useLoaderData} from '@remix-run/react'
import styles from '~/styles/products.css'

export function meta({data}){
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

export async function loader({params}){
  const { guitarUrl } = params;
  const guitar = await getGuitarByUrl(guitarUrl);
  return guitar
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