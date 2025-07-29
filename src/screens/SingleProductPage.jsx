import React from 'react'
import NavbarOLX from '../components/NavbarOLX/NavbarOLX.jsx';
import { Container } from 'react-bootstrap';
import styles from './SingleProductPage.module.css';
import { IoIosArrowDown } from "react-icons/io";

const SingleProductPage = () => {
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
            </Container>

        </>
    )
}

export default SingleProductPage