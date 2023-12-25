import axios from 'axios';
import getShirts from '../../DataSources/getShirts.json';
import { useEffect, useState } from 'react';


export interface Ishirt {
  id?: number,
  image?: string,
  description?: string,
  link?: string
}

export interface Shirts extends Array<Ishirt>{}

function GetShirt(initialShoes: Shirts): Shirts {

  const [getShirt, setShirt] = useState(initialShoes)

  useEffect(() =>{
    setShirt(getShirts)
  }, [])
  
  return getShirt
}

export default GetShirt