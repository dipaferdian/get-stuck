import axios from 'axios';
import getShoesDummy from '../../DataSources/getShoes.json';
import { useEffect, useState } from 'react';


export interface Ishoes {
  id?: number,
  image?: string,
  description?: string,
  link?: string
}

export interface Shoes extends Array<Ishoes>{}

function GetShoes(initialShoes: Shoes): Shoes {

  const [getShoes, setShoes] = useState(initialShoes)

  useEffect(() =>{
    setShoes(getShoesDummy)
  }, [])
  
  return getShoes 
}

export default GetShoes