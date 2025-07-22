import React from 'react';
import ButtonBorder from '../../assets/SellButtonBorder.svg';
import OLXLogo from '../../assets/OLX_New_Logo.png';
import Motors from '../../assets/OLXMotors.png';
import Property from '../../assets/OLXProperty.png';
import { Container } from 'react-bootstrap';
import styles from './NavbarOLX.module.css'
import { CiLocationOn } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";



const NavbarOLX = () => {
    return (
        <>
            <div style={{ backgroundColor: '#f0f6ff', fontFamily: 'Geomanist,Helvetica,sans-serif !important' }}>
                <Container>
                    <div className={`d-flex justify-content-between align-items-center`}>
                        <div className={`d-flex justify-content-center align-items-center gap-2`}>
                            <div className={styles.olx_shape}>
                                <img className={styles.imageDimensions} src={OLXLogo} alt="" />
                            </div>
                            <div className={`d-flex justify-content-center align-items-center mt-1`}>
                                <div className={`d-flex justify-content-center align-items-center ${styles.imageContainer}`}>
                                    <img className={styles.imageDimensions} src={Motors} alt="" />
                                </div>
                                <div>
                                    <span className={`fw-bold ${styles.fontchange}`}>Motors</span>
                                </div>
                            </div>
                            <div className={`d-flex justify-content-center align-items-center mt-1`}>
                                <div className={`d-flex justify-content-center align-items-center ${styles.imageContainerProperty}`}>
                                    <img className={styles.imageDimensions} src={Property} alt="" />
                                </div>
                                <div>
                                    <span className={`fw-bold ${styles.fontchange}`}>Property</span>
                                </div>
                            </div>
                        </div>
                        <div className={`d-flex justify-content-center align-items-center gap-3`}>
                            <div className={`fw-bold`}>
                                <span className={`${styles.loginUnderline} ${styles.fontchange}`}>
                                    Login
                                </span>

                            </div>
                            <div className={`${styles.sellButton}`}>
                                <FaPlus className={`fw-bold ${styles.plusSign} ${styles.aligningSellButtonText} ${styles.fontchange}`} />
                                <span className={`fw-bold ${styles.aligningSellButtonText} ${styles.fontchange}`}>Sell</span>
                            </div>
                        </div>
                    </div>


                </Container>
            </div>

            <Container>
                <div className={`d-flex align-items-center my-3 gap-3 ${styles.searchbarContainer}`}>
                    <div className={styles.cityDropDown}>
                        <CiLocationOn size='20px' color='blue' className={styles.locationIcon} />
                        <select className={`w-100 ${styles.cityDropDownMenu}`} name="" id="">
                            <option value="Pakistan">Pakistan</option>
                            <option value="Karachi" >Karachi, Sindh</option>
                            <option value="Lahore">Lahore, Punjab</option>
                            <option value="Islamabad">Islamabad, Capital Territory</option>
                        </select>
                    </div>
                    <div className={styles.searchInput}>
                        <div className={`w-100 ${styles.searchInputContainer}`}>
                            <input type="text" placeholder='Find Cars, Mobile Phones and more...' />
                        </div>
                        <div>
                            <button className={styles.searchButton}>
                                <span className={`fw-bold ${styles.fontchange}`}>Search</span>
                            </button>
                        </div>
                    </div>

                </div>
            </Container>

            <div className={`${styles.divider}`}></div>

            <Container>
                <div>
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

export default NavbarOLX