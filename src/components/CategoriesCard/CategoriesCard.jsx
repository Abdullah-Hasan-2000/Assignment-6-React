import React from 'react'
import styles from './CategoriesCard.module.css'

const CategoriesCard = ({ imageSrc, title }) => {
  return (
    <div className={`${styles.cardContainer}`}>
        <div>
            <img width={'80%'} src={imageSrc} alt={title} />
        </div>
        <div>
            <span className={`${styles.cardTitle}`}>{title.length > 23 ? title.slice(0,23) + "..." : title}</span>
        </div>
    </div>
  )
}

export default CategoriesCard