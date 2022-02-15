import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeroArea from '../components/HeroArea';
import VideoSection from '../components/VideoSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <style jsx global>{`
        * {
          font-family: Source Sans Pro;
        }
        .custom-btn {
          background-color: #EE2D1C;
          min-height: 55px;
          font-size: 22px;
          color: #fff;
        }
        .divider {
          display: flex;
          flex-direction: column;
          border: 1px solid #E8E8E8;
          margin: 40px 0;
        }
        .head1 {
          font-size: 48px;
          line-height: 48px;
          color: #fff;
        }
        .title {
          font-size: 36px;
          line-height: 36px;
          color: #4C4C51;
        }
        .desc {
          font-size: 22px;
          line-height: 28px;
          color: #4C4C51;
        }
        .link {
          font-size: 22px;
          line-height: 28px;
          color: #88939E;
        }
        .link-hover {
          font-size: 22px;
          line-height: 28px;
          color: #4C4C51;
        }
        .sections {
          margin-top: 40px;
        }
        .heading-gap {
          margin-top: 22px;
        }
      `}</style>
      <style jsx>{`
        .container {
          margin: 50px;
        }
      `}</style>
      <HeroArea />
      <VideoSection />
      <Footer />
    </div>
  )
}
