import axios from 'axios';
import getContents from '../DataSources/getContents.json';
import { useEffect, useState } from 'react';

export interface Ichild {
  id?: number,
  title?: string,
  description?: string,
  link?: string,
  image?: string
 }


export interface IContent {
  id?: number,
  title: string,
  description?: string,
  author?: string,
  child?: Array<Ichild>
}

export interface Contents extends Array<IContent> { }

function GetContent(initialShoes: Contents): Contents {

  const [getContent, setContent] = useState(initialShoes)

   useEffect(() => {
     setContent(getContents)
   }, [])

  return getContent
}

export default GetContent