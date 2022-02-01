import React from 'react'
import { useEffect, useState, useCallback } from 'react';
import {Card} from "./Card"
import "./photoGallery.css";
import icon from "../Pics/icon.png"
import Loading from './Loading';

const Cards = () => {

  const [images, setImages] = useState([])
  const [input, setInput] = useState("")
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  
  const peticion = useCallback (async () => {
    
    let route = `https://api.pexels.com/v1/search/?page=${page}&query=hug&smile&love&per_page=18`;

    if (input !== ""){
        route = `https://api.pexels.com/v1/search/?page=${page}&query=${encodeURI(input)}&per_page=18`;
    }

    setLoading(true)

    const res = await fetch(route,{
    headers: {
      Authorization: "563492ad6f9170000100000181a4aa773c2444de97d2750d4f9c7ced"
    }
    });
  
    const data = await res.json();
    //console.log(data);
    setImages(data.photos);
        //console.log(images);
        //console.log(images[0].src.portrait);
        //console.log(images[0].photographer_url);
        setLoading(false)
  }, [input, page]);

  useEffect(() => {
    peticion()
  }, [input, page, peticion]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    setInput(text)
  }

  const nextPage = (e) => {
    e.preventDefault();
    let newPage = page + 1
    setPage(newPage)
  };

  const prevPage = (e) => {
    e.preventDefault();
    let newPage = page - 1
    setPage(newPage)
  };

    return (
    <>
        <form className='form text-center' onSubmit={handleSubmit}>
            <label>Search: <input className="input" type="text" name="inputText"></input></label>
            <button type="submit" className='submit'><img src={icon} className="icon" alt="icon" /> </button>
        </form>
       
       {loading && <Loading />}
       
       
        <div className='cardContainer text-center'>
            {images.map((img) => {
                return <Card
                key={img.id}
                title={img.alt} 
                url={img.src.portrait} 
                photographer={img.photographer}
                link={img.photographer_url}
                /> 
            })}
        </div>
        <div className="pagination text-center">
            <button className='button' onClick={prevPage}>Previos page</button>
            <button className='button' onClick={nextPage}>Next page</button>
        </div>
        
    </>
    );
}

export default Cards 