import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

function Avatar({dpImg, dpName}) {
  return (
    <div className="avatar-container">
        <style jsx global>{`
          .menu-container {
          }
          .link {
            list-style: none;
            color: #fff;
            cursor: pointer;
            font-weight: 200;
          }
          .dp-name {
            border-radius: 100px;
            background: #ccc;
            width: 50px;
            height: 50px;
            display: inline-flex;
            color: #000;
            align-items: center;
            justify-content: center;
          }
        `}
        </style>
        {dpImg && <Image src="/logo.png" alt="App Logo" width={60} height={48} />}
        {dpName && <span className='dp-name'>{dpName}</span>}
    </div>
  )
}

export default Avatar
