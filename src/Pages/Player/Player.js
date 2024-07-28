import React from 'react'
import '../Player/Player.css'
import { useLocation,useNavigate } from 'react-router-dom';
import back_arrow from '../../assets/back_arrow.jpg'
import { useState,useEffect } from 'react';

function Player() {
    const location = useLocation();
    const navigate = useNavigate();
    const { id,profiles,profile } = location.state;
    const [data,setData]=useState({
        name:'',
        key:'',
        published_at:'',
        typeof:''
    })
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODEyODVjZjIzZmU4OGJjOWQ4NTU0NDk0NzFjM2VhYyIsIm5iZiI6MTcyMDI3NjA2NS44ODUzMzUsInN1YiI6IjY2MjE0ZTRmODdhZTdiMDE0Y2Q3YzkwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KapnJglPDgXm42Z40-DGLQf4gtY86pnj5CJW-zSp-tc'
        }
      };
      useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(response => response.json())
        .then(response => setData(response.results[0]))
        .catch(err => console.error(err));
      },[id])
      const handleClick=()=>{
        navigate('/landing-page', { state: { profiles, profile } });
      }

  return (
    <div className='player'>
      <img src={back_arrow} onClick={handleClick} alt='back-arrow' />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${data.key}`}
      title='trailer' allowFullScreen></iframe>
      <div className='player-info'>
        <p>{data.published_at.slice(0,10)}</p>
        <p>{data.name}</p>
        <p>{data.type}</p>
      </div>
    </div>
  )
}

export default Player
