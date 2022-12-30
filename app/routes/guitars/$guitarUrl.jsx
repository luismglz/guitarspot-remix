import React from 'react'
import {getGuitarByUrl} from '~/models/guitars.server'
import {useLoaderData} from '@remix-run/react'

export async function loader({params}){
  const { guitarUrl } = params;
  const guitar = await getGuitarByUrl(guitarUrl);
  return guitar
}

function GuitarUrl() {

  const guitar = useLoaderData();

  return (
    <h1>{guitar.data[0].attributes.name}</h1>
  )
}

export default GuitarUrl