import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

function Footer(props) {
  return (
    <div className="footer-layout">
      <style jsx global>{`
          .footer-layout {
            margin: 40px 0;
          }
          .footer-container {
            display: flex;
            flex-direction: row;
          }
          .link-tower {
            display: flex;
            flex-direction: column;
          }
          .link-tower span {
            margin-bottom: 5px;
          }
          .footer-links {
            margin-left: 100px;
          }
          span.header-link {
            color: #EE2D1C;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .link {
            font-size: 22px;
            line-height: 28px;
            color: #88939E;
            margin-left: 30px;
          }
          .footer-bot {
            display: flex;
            justify-content: space-between;
            margin: 0 40px;
          }
          .link-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        `}
      </style>
        <div className="footer-container">
          <div className="footer-links">
            <div className="link-tower">
              <span className="header-link">Fakesite</span>
              <span>About us</span>
              <span>Press</span>
              <span>Policies</span>
              <span>Help</span>
            </div>
          </div>
          <div className="footer-links">
            <div className="link-tower">
              <span className="header-link">Account</span>
              <span>Edit Profile</span>
              <span>Friends</span>
              <span>Social</span>
              <span>Delete Profile</span>
            </div>
          </div>          
        </div>
        <div className="divider" />
        <div className="footer-bot">
          <Image src="/logo.png" alt="App Logo" width={60} height={48} />
          <ul className='link-container'>
            <li className="link">
              <Link href="/account">
                <a>Account</a>
              </Link>
            </li>
            <li className="link">
              <Link href="/help">
                <a>Help</a>
              </Link>
            </li>
            <li className="link">
              <a>Help</a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Footer
