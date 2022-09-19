import React, { useState, useEffect } from 'react';
import { KEY } from "../../localKey";
import SearchBar from '../../components/SearchBar/SearchBar';
import axios from "axios";
import {Link, } from "react-router-dom";


const SearchPage = () => {
    const [videos, setVideos] = useState([]);
    // const {search} = useParams();

   
    const fetchVideos = async (search) => {
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
            <SearchBar />
         <div className='videoscontainer'>
            {videos &&
            videos.map((video) => {
                return (
                    <div className='vid' key={video.snippet.title}>
                        <p>{video.snippet.title}</p>
                        <Link to={`/video/${video.id.videoId}`}>
                            <img src={video.snippet.thumbnails.medium.url} alt='' />
                        </Link>

                    </div>
                );
            })}
        </div>
        </div>
    );
}
;
export default SearchPage;