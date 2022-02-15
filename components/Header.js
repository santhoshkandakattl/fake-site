import React from 'react'
import Image from 'next/image'
import Menus from '../components/Menus';

function Header(props) {
  return (
    <header className="header-container">
      <style jsx global>{`
        .header-container {
          display: flex;
          justify-content: space-between;
          margin: 0 50px;
        }
        .logo-container {
          align-self: center;
        }
      `}
      </style>
      <div className="logo-container">
        <Image src="/logo.png" alt="App Logo" width={60} height={48} />
      </div>
      <Menus />
    </header>
  )
}

export default Header
