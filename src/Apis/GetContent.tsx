import axios from 'axios';
import getContents from '../DataSources/getContents.json';
import { useEffect, useState } from 'react';

export interface IContent {
  id?: number,
  title: string,
  image?: string,
  description?: string,
  link?: string
}

export interface Contents extends Array<IContent> { }

function GetContent(page: number, initialShoes: Contents): Contents {

  const [getContent, setContent] = useState(initialShoes)

  axios.get(`${process.env.REACT_APP_API}?page=${page}`)

    .then(function (response) {
      // handle success
      setContent(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
  })

  return getContent
}

export default GetContent