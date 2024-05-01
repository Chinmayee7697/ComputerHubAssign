import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SubNavbar from '../../components/SubNavbar/SubNavbar'
import styles from "./Home.module.css";
import MainPage from '../MainPage/MainPage';
import Features from '../Features/Features';
import Services from '../Services/Services';
import AboutUs from '../AboutUs/AboutUs';
import Description from '../Description/Description';

export default function Home() {
  return (
    <div className='container mw-100'>
        <div className={styles.navs}>
        <div className={styles.navbarBox}><Navbar /></div>
        <div className={styles.subnavbarBox}><SubNavbar /> </div>
        </div>
        <div className={styles.mainPage}><MainPage />  </div>
        <div className={styles.features}><Features />  </div>
        <div className={styles.services}><Services /> </div>
        <div className={styles.aboutUs}> <AboutUs /> </div>
        <div className={styles.description}><Description />  </div>
    </div>
  )
}
