import React from 'react'
import styles from "./Features.module.css"

export default function Features() {
  return (
    <div className={styles.featurePage}>
        <div className={styles.heading}>
            <h1>Features</h1>
        </div>

        <div className={styles.allFeatures}>

        {/* 1st feature  */}
        <div className={styles.featureNumber}>
            <div className={styles.featureContent}>
            {/* write here  */}
            <h1>01</h1>
            <h2>Tech & Software Sales</h2>
            <p>
                <strong>Everything Tech:</strong>
                From the latest laptops to essential accessories, and software find exactly what you need in one place. Quality, variety, and speedy delivery guaranteed.
            </p>
            </div>

            <div className={styles.featurePic}>
            {/* add image here  */}
            <img src="https://source.unsplash.com/random/?tech" alt="" />
            </div>
        </div>

        {/* 2nd feature  */}
        <div className={styles.featureNumber}>
            <div className={styles.featurePic}>
            {/* add image here  */}
            <img src="https://source.unsplash.com/random/?ai" alt="" />
            </div>

            <div className={`ms-5 ${styles.featureContent}`}>
            {/* write here  */}
            <h1>02</h1>
            <h2>Custom AI and Software Solutions</h2>
            <p>
                <strong>Empower your business:</strong>
                With tailor-made AI, web applications, software tools, and custom web scraping solutions. Our technology is designed to fit your unique needs, boosting operations and driving forward progress.
            </p>
            </div>
        </div>


        {/* 3rd feature  */}
        <div className={styles.featureNumber}>
            <div className={styles.featureContent}>
            {/* write here  */}
            <h1>03</h1>
            <h2>Cloud Services & Flexibility</h2>
            <p>
                <strong>Access Everywhere:</strong>
                Empower your business with the ability to work and access files from anywhere, securely and effortlessly. Our cloud solutions offer seamless collaboration, complete backups, and the freedom to operate remotely with confidence.
            </p>
            </div>

            <div className={styles.featurePic}>
            {/* add image here  */}
            <img src="https://source.unsplash.com/random/?backup" alt="" />
            </div>
        </div>



        {/* 4th feature  */}
        <div className={styles.featureNumber}>
            <div className={styles.featurePic}>
            {/* add image here  */}
            <img src="https://source.unsplash.com/random/?repair" alt="" />
            </div>

            <div className={`ms-5 ${styles.featureContent}`}>
            {/* write here  */}
            <h1>04</h1>
            <h2>Quick Repairs</h2>
            <p>
                <strong>Convenient Service:</strong>
                No need to visit us; we'll come to you. Enjoy hassle-free pick-up and drop-off repair services to keep your tech running smoothly. Fast, efficient, and convenient.
            </p>
            </div>
        </div>


        {/* 5th feature  */}
        <div className={styles.featureNumber}>
            <div className={styles.featureContent}>
            {/* write here  */}
            <h1>05</h1>
            <h2>24/7 Support</h2>
            <p>
                <strong>Here for Every Issue:</strong>
                Our experts are ready anytime to tackle any tech challenge, from software glitches to setup queries, across all platforms. Friendly, efficient support ensures you're never left stranded. Customer service is at the heart of everything that we do.
            </p>
            </div>

            <div className={styles.featurePic}>
            {/* add image here  */}
            <img src="https://plus.unsplash.com/premium_photo-1679736181128-ac8e129dd99d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
        </div>

        </div>
    </div>
  )
}
