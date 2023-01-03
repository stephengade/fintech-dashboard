import React from 'react'
import styles from "./Card.module.scss";

interface iCard {
  icon: string
  title: string
  number: string
};


const Card = ({icon, title, number}: iCard) => {
  return (
    <div className={styles.card_wrapper}>
        <img src={icon} alt={title} />

        <h3>{title}</h3>

        <p>{number}</p>

    </div>
  )
}


export default Card