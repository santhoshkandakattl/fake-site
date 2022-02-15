import React from 'react';
import Link from 'next/link';
import Avatar from '../components/Avatar';

function Menus(props) {
  return (
    <div className="menu-container">
        <style jsx global>{`
          .menu-container {
            min-width: 300px;
          }

          .link-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .link {
            list-style: none;
            color: #fff;
            cursor: pointer;
            font-weight: 200;
          }
        `}
        </style>
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
            <Avatar dpName="S" />
          </li>
        </ul>
    </div>
  )
}

export default Menus
