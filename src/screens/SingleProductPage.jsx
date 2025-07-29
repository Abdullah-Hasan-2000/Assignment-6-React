import React from 'react'
import NavbarOLX from '../components/NavbarOLX/NavbarOLX.jsx';
import { Container } from 'react-bootstrap';
import styles from './SingleProductPage.module.css';
import { IoIosArrowDown } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import { CiMemoPad } from "react-icons/ci";
import { useParams } from 'react-router-dom';
import ProductsData from '../Data.jsx';
import PhotosCarousel from '../components/PhotosCarousel/PhotosCarousel.jsx';

const SingleProductPage = () => {

    const { id } = useParams();
    console.log("Product ID:", id);

    const product = ProductsData.filter((e, i) => {
        return e['Ad ID'] === parseInt(id);
    });

    console.log("Product Details:", product);
    return (
        <>
            <NavbarOLX />
            <Container>
                <div style={{ color: '#002f34' }}>
                    <ul className={`d-flex justify-content-start align-items-center gap-4 ${styles.categoryList}`}>
                        <li className={`fw-bold d-flex gap-2 align-items-center`}>All Categories<IoIosArrowDown /></li>
                        <li>Mobile Phones</li>
                        <li>Cars</li>
                        <li>Motorcycles</li>
                        <li>Houses</li>
                        <li>Videos-Audios</li>
                        <li>Tablets</li>
                        <li>Land & Plots</li>
                    </ul>
                </div>

                <div className={`d-flex`}>
                    <div className={`${styles.productDetailsContainer} me-5`}>
                        <PhotosCarousel images={product[0].Images} />
                    </div>

                    <div className={`${styles.sellerDetailsContainer}`}>
                        <div>
                            <div className='d-flex justify-content-between align-items-center mt-3 mx-3'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <div>
                                            <RxAvatar size={60} />
                                        </div>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center ms-2'>
                                        <span>Posted By</span>
                                        <span style={{ fontWeight: 'bold' }}>{product[0]['Posted By']}</span>
                                    </div>
                                </div>
                                <div>
                                    <FaChevronRight />
                                </div>
                            </div>
                            <div className={styles.divider}>

                            </div>
                            <div className='d-flex align-items-start mx-3 mt-3 gap-5'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <SlCalender />
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <span>Member Since</span>
                                        <span style={{ fontWeight: 'bold' }}>{product[0]['Year']}</span>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <CiMemoPad />
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <span>Model</span>
                                        <span style={{ fontWeight: 'bold' }}>{product[0]['Model']}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default SingleProductPage