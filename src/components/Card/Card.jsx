import React from 'react';
import styles from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={`${styles.card} card mb-3 `} style={{ maxWidth: "530px" }}>
      <div className={`row g-1 ${styles.individualCard}`}>
        <div className="col-md-6">
          <img src={props.imageSrc} className={`img-fluid rounded-start ${styles.cardImage}`} alt="..." />
        </div>
        <div className="col-md-6">
          <div className={`card-body ${styles.cardRightSide}`}>
            <h5 className="card-title">{props.cardTitle}</h5>
            <p className="card-text">{props.cardContent}</p>
            <button type="button" class={`btn btn-primary ${styles.cardButton}`}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
