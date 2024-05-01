import React from 'react'
import styles from './Services.module.css';
import Card from '../../components/Card/Card';

export default function Services() {
  return (
    <div className={styles.servicePage}>

    <div className={styles.serviceHead}>
       <h1>Our Services</h1>
    </div>
    
    <div className={styles.allServices}>

    {/* 1st row  */}
    <div className={styles.serviceRow}>
            <Card 
            imageSrc="https://source.unsplash.com/random/?laptop" 
            cardTitle="Tech Solutions" 
            cardContent="Sales, repairs, and support for the latest products, including computers, laptops, & accessories.  Everything you need for your tech lifestyle."
            />
            <Card
            imageSrc="https://source.unsplash.com/random/?software" 
            cardTitle="Software Sales" 
            cardContent="A wide range of essential software solutions for both personal and business use, including productivity tools, antivirus, and accounting software."
             />
    </div>


    {/* 2nd row  */}
    <div className={styles.serviceRow}>
            <Card 
            imageSrc="https://source.unsplash.com/random/?website" 
            cardTitle="Website Development" 
            cardContent="Elevate your online presence with our custom website development and integrated digital marketing strategies for unparalleled digital success."
            />
            <Card
            imageSrc="https://source.unsplash.com/random/?code" 
            cardTitle="Software Development" 
            cardContent="Custom software solutions and database management, featuring cloud applications, API integrations, and expertise in SQL and NoSQL systems."
             />
    </div>


    {/* 3rd row  */}
    <div className={styles.serviceRow}>
            <Card 
            imageSrc="https://source.unsplash.com/random/?seminar" 
            cardTitle="Professional Training" 
            cardContent="Workshops and training in AI, machine learning, data science, coding, and web design, complemented by cutting-edge research and development."
            />
            <Card
            imageSrc="https://source.unsplash.com/random/?call" 
            cardTitle="Tech Support" 
            cardContent="Round-the-clock support for all your technology and software setup needs, ensuring you're always equipped and supported, wherever, whenever."
             />
    </div>



    {/* 4th row  */}
    <div className={styles.serviceRow}>
            <Card 
            imageSrc="https://source.unsplash.com/random/?amazonweb" 
            cardTitle="Cloud & IT Infrastructure" 
            cardContent="Secure, scalable cloud computing services and robust IT support, including network management and cybersecurity, for a protected digital environment."
            />
            <Card
            imageSrc="https://source.unsplash.com/random/?javascript" 
            cardTitle="Web Scraping" 
            cardContent="Custom web scraping to gather, analyze, and leverage web data for enhanced market research and strategic business insights."
             />
    </div>


    {/* 5th row  */}
    <div className={styles.serviceRow}>
            <Card 
            imageSrc="https://source.unsplash.com/random/?ai" 
            cardTitle="AI & Data Analytics" 
            cardContent="Advanced solutions in AI, machine learning, computer vision, and comprehensive data analytics to transform data into actionable insights."
            />
            <Card
            imageSrc="https://source.unsplash.com/random/?reasearch" 
            cardTitle="Research & Development (R&D)" 
            cardContent="Innovating future technologies with our dedicated R&D team, focused on creating scalable, sustainable and forward-thinking solutions."
             />
        
    </div>    



    </div>
    </div>
  )
}
