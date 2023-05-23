import React, { useEffect, useState } from 'react'
import { API_KEY, baseUrl,imgUrl } from '../../constants/constants'
import "./Banner.css"
import axios from 'axios'
const Banner = () => {

const[movie,setMovie]=useState()

  useEffect(()=>{
   axios.get(`${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    
    console.log(response.data)
    setMovie(response.data.results.sort(function(a,b){return 0.5 - Math.random()})[0])

   })
  },[])
  return (
    <div style={{backgroundImage:`url(${movie? imgUrl+movie.backdrop_path:""})`}}
      
     id='banner'>
        <div id='content'>
            <h1 className='title'>{movie?movie.title:""}</h1>
            
            <div className='banner-btn'>
                <button id='button'>Play</button>
                <button id='button'>My List</button>
            </div>
            <h1 className='description'>
            {movie?movie.overview:""}
            </h1>
        </div>
        <div className="fade"></div>

              
      
    </div>
  )
}

export default Banner
