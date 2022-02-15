import React, {useEffect, useState} from 'react';
import Image from 'next/image';

function VideoSection(props) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('/fixtures/vimeo.json').then(res => res.json()).then(videoList => {
      if (videoList && Array.isArray(videoList)) {
        setVideos(videoList);
      } else {
        setVideos([]);
      }
    }).catch(err => {
      setVideos([]);
    })
  });
  
  return (
    <div className="video-sec-container">
      <style jsx global>{`
        .video-sec-container {
          margin-top: 40px;
        }
        .video-top-sec {
          display: flex;
          margin: 0 50px;
          margin-top: 40px;
        }
        .video-top-sec:nth-child(even) {
          flex-direction: row-reverse;
        }
        .video-top-sec-left, .video-top-sec-right {
          flex: 1;
        }
        .video-top-sec-right {
          padding-left: 40px;
        }
        .video-title {
          margin: 0;
        }
        .video-top-sec-center {
          text-align: center;
          margin-top: 40px;
        }
      `}
      </style>
      {videos.map((video) => (
        <div className='video-top-sec'>
          <div className='video-top-sec-left'>
            <h3 className='video-title'>{video.title}</h3>
            <p>{video.description}</p>
          </div>
          <div className='video-top-sec-right'>
            <Image src={video.thumbnail_large} alt="Thumbnail" width={300} height={220} />
          </div>
        </div>
      ))}
      <div className='video-top-sec-center'>
          <h3 className="title">Ready to have your cake and eat it too ?</h3>
          <p><span className="desc">
            Start by designing the experience you have in mind. We'll guide you through each step. If your experience meets the quality standards, you'll hear more about what's next.
          </span></p>
      </div>
    </div>
  )
}

export default VideoSection
