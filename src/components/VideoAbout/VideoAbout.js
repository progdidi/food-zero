import React, {useState, useEffect} from 'react';
import './videoAbout.scss';
import play from './play.svg';
import video from '../../helpers/about/video.mp4';
import poster from './video.png';

const VideoAbout = () => {

    const [videoPlay, setvideoPlay] = useState(false);

    const toggleVideoPlay = () => {
        setvideoPlay(!videoPlay);
    }
    
    return ( 
        <section className="video">
                <div className="container">
                    <div className="video__inner">
                        <video 
                        className={videoPlay ? "video__play" : "video__play hidden"} 
                        src={video} 
                        onClick={toggleVideoPlay} 
                        autoplay={videoPlay ? "autoplay": ""}
                        controls
                        loop></video>

                        <div className={videoPlay ? "video__overlay hidden" : "video__overlay"}>

                            <h3 className="video__title section__title">It looks delicious</h3>

                            <p className="video__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

                            <button className="video-btn" onClick={toggleVideoPlay}> 
                               <img src={play} alt="play" className="video-btn__img" />
                            </button>

                            
                        </div>
                    </div>
                </div>
            </section> 
     );
}
 
export default VideoAbout;