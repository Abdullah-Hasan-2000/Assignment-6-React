import React from 'react';
import NavbarOLX from '../components/NavbarOLX/NavbarOLX.jsx';
import CarouselOLX from '../components/Carousel/CarouselOLX.jsx';
import { Container } from 'react-bootstrap';
import CategoriesCard from '../components/CategoriesCard/CategoriesCard.jsx';
import CategoriesCardData from '../CategoriesCardData.jsx';
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <>

            <NavbarOLX />
            <CarouselOLX />

            <Container>
                <div className={`d-flex flex-wrap justify-content-start mt-4 ${styles.categoriesContainer}`}>
                    {CategoriesCardData.map((e,i) => {
                        return ( <CategoriesCard imageSrc={e.imageSrc} title={e.title}/>)
                    })}
                </div>

                <div>
                    <div className='d-flex justify-content-between align-items-center mt-5 mb-3'>
                        <h2>More in Electronics & Home Appliances</h2>
                        <span><a href="#">View More</a></span>
                    </div>

                </div>
            </Container>



        </>
    )
}

export default HomePage