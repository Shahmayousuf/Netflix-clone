import axios from "axios";
import "./RowPost.css";
import { imgUrl,baseUrl,API_KEY } from "../../constants/constants";
import { useEffect, useState } from "react";
import Youtube from 'react-youtube'
const RowPost =(props) => {
  const [movies, setMovies] = useState([]);
  const[urlId,setUrlId]=useState([])
  useEffect(() => {
    axios.get(baseUrl+ props.url).then((response) => {
      console.log(response.data.results);
      setMovies(response.data.results);
    });
  }, []);
   
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
 console.log(id)
 axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then(response=>{
  if(response.data.results.length!==0){
    setUrlId(response.data.results[0])
  }
  
 })
  }
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters" >
        {movies.map((obj) => (
          <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPoster':"poster"}  alt="poster" src={`${imgUrl+obj.backdrop_path}`} />
        ))}
      </div>
     {urlId && <Youtube opts={opts} videoId={urlId.key}></Youtube>}

    </div>
  );
};

export default RowPost;
