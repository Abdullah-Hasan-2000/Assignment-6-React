import React from 'react';
import NavbarOLX from '../components/NavbarOLX/NavbarOLX.jsx';
import CarouselOLX from '../components/Carousel/CarouselOLX.jsx';
import { Container } from 'react-bootstrap';
import CategoriesCard from '../components/CategoriesCard/CategoriesCard.jsx';
import CategoriesCardData from '../CategoriesCardData.jsx';
import styles from './HomePage.module.css';
import ProductsCards from '../components/ProductsCards/ProductsCards.jsx';
import ProductsData from '../Data.jsx';

const HomePage = () => {
    return (
        <>

            <NavbarOLX />
            <CarouselOLX />

            <Container className='px-4'>
                <div className={`d-flex flex-wrap justify-content-start mt-4 ${styles.categoriesContainer}`}>
                    {CategoriesCardData.map((e, i) => {
                        return (<CategoriesCard key={i} imageSrc={e.imageSrc} title={e.title} />)
                    })}
                </div>

                <div>
                    <div className='d-flex justify-content-between align-items-center mt-5 mb-3'>
                        <h2 style={{ color: '#002f34' }}>Mobile Phones</h2>
                        <span><a href="#" className='text-decoration-none fw-bold'>View More</a></span>
                    </div>
                    <div className={`d-flex gap-3 justify-content-between`}>
                        {ProductsData.slice(0, 4).map((product) => (
                            <ProductsCards key={product['Ad ID']} title={product['Car Name']} price={product['Price']} imageSrc={product['Image']} year={product['Year']} location={product['Seller Location']} />
                        ))}
                    </div>

                </div>
            </Container>



        </>
    )
}

export default HomePage