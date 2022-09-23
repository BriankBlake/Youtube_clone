import React, { useState, useEffect } from 'react';
import  {useParams} from "react-router-dom";
import { KEY } from "../../localKey";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './VideoPage.css';
// import { Link } from 'react-router-dom';

const VideoPage = (props) => {
    const {videoid} = useParams();
    console.log(videoid)
    const [relatedVideos, setRelatedVideos] = useState([]);
    const [comment, setComment] = useState([]);

   

    async function getRelatedVideos(id) {
        try {
            let response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${id}&type=video&key=${KEY}&part=snippet&maxResults=8`);
                setRelatedVideos(response.data.items);
        } catch (error) {
            console.log(error.message);
            
        }
    }
    async function getAllComment() {
        const response = await axios.get("http://127.0.0.1:8000/api/comments/6zr73ZeLK4I/");
        console.log(response.data);
        setComment(response.data);
      }

    useEffect(() => {
        getAllComment(videoid);
     },);

    useEffect(() => {
        getRelatedVideos(videoid);
     },);

return (
    <div className='video-page'>
        <div>
        <iframe
            id="ytplayer"
            type="text/html"
            title="myVideo"
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${videoid}?autoplay=1`}
          ></iframe>
        </div>
        <div className='relatedvideos'>
            {relatedVideos &&
            relatedVideos.map((video) => {
                return (
                    <div>
                        <p>{video.snippet.title}</p>
                        <img src={video.snippet.thumbnails.medium.url} alt='thumbnail' />
                    </div>
                )
            })}
        </div>
    </div>

)

   
}

export default VideoPage;