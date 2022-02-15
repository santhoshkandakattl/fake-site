import React from 'react';
import Header from '../components/Header';

function HeroArea(props) {
  return (
    <div className="hero-area-container">
        <style jsx global>{`
          .hero-area-container {
            background: url('/hero-image.png');
            color: #fff;
          }
          .hero-content {
            text-align: center;
            padding-bottom: 230px;
            padding-top: 50px;
          }
          .hero-title {
            font-size: 48px;
            line-height: 48px;
            color: #fff;
          }
          .hero-desc {
            margin: 30px;
            font-size: 24px;
            line-height: 24px;
          }
          .hero-desc span {
            width: 450px;
            display: inline-block;
          }
          .hero-action {
            background-color: #EE2D1C;
            border-radius: 20px;
            border: none;
            padding: 10px;
            min-height: 55px;
            font-size: 22px;
            color: #fff;
          }
        `}
        </style>
        <Header />
        <div className='hero-content'>
          <h3 className='hero-title'>The world's greatest fake site</h3>
          <p className='hero-desc'>
            <span>Create the world's greatest fake site and enjoy the breeze of fresh air when you complete it</span>
          </p>
          <button className='hero-action'>Do something awesome</button>
        </div>
    </div>
  )
}

export default HeroArea
