import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import SearchBar from '../../components/SearchBar/SearchBar';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import { KEY } from "../../localKey";
const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
 const [videos, setVideos] = useState([]);
    const {search} = useParams();

   
    const fetchVideos = async (search="jackson 5") => {
        try {
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&type=video&maxResults=5&key=${KEY}`);
            console.log(response.data.items)
            setVideos(response.data.items)
        } catch (error) {
            
        }
    };
    useEffect(() => {
        fetchVideos();
    }, []);

    return (
        <div>
            <SearchBar fetchVideos= {fetchVideos} />
         <div className='videoscontainer'>
            {videos &&
            videos.map((video) => {
                return (
                    <div className='vid' key={video.snippet.title}>
                        <p>{video.snippet.title}</p>
                        <Link to={`/video/${video.id.videoId}`}>
                            <img src={video.snippet.thumbnails.medium.url} />
                        </Link>

                    </div>
                );
            })}
        </div>
        </div>
    );
}
;

export default HomePage;
