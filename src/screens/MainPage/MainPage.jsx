import React from 'react'
import styles from "./MainPage.module.css";
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function MainPage() {
  return (
    <div className={styles.main}>
        <div className={styles.centerBlock}>
        <div className={styles.content}>
        <h1><span className={styles.welcometo}> Welcome to </span>
        ComputerMarketHub!</h1>
        <p>
        Your one stop for all your digital needs. Empowering your digital journey with top-tier computers and accessories, custom software, website development, and AI solutions. Enjoy easy shopping, expert support, and fast nationwide delivery. Your local tech hub, anytime, anywhere.
        </p>
        <Link to="#services">
        <Button variant="primary" className={styles.startButton}>Start Now</Button>
        </Link>
        </div>
        </div>
    </div>
  )
}
