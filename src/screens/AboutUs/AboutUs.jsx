import React from 'react'
import styles from "./AboutUs.module.css"
import { Button } from 'react-bootstrap';


export default function AboutUs() {
  return (
    <div className={styles.aboutPage}>
    <div className={styles.centerAbout}>
        <div className={styles.aboutContent}>
            <h1>About Us</h1>
            <p>At the heart of our enterprise is a legacy of over three decades in the tech industry, founded by a visionary who's mastered everything from hardware sales and repairs to advanced software solutions. Alongside him, a senior data scientist brings cutting-edge AI and data analytics expertise from leading US startups. Together, we offer a comprehensive suite of services designed to empower your digital journey. Our commitment to innovation, excellence, and customer support ensures we're the trusted partner you need to navigate the complexities of today's tech landscape.</p>
            <Button variant="primary" className={styles.learnMore}>Learn More</Button>
        </div>
    </div>

    </div>
  )
}
