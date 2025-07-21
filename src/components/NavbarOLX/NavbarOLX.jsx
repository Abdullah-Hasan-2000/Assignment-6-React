import React from 'react';
import ButtonBorder from '../../assets/SellButtonBorder.svg';
import OLXLogo from '../../assets/OLX_New_Logo.png';
import Motors from '../../assets/OLXMotors.png';
import Property from '../../assets/OLXProperty.png';
import { Container } from 'react-bootstrap';
import styles from './NavbarOLX.module.css'

const NavbarOLX = () => {
    return (
        <>
            <div style={{backgroundColor:'#f0f6ff'}}>
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
                            <span className={`fw-bold ${styles.aligningSellButtonText} ${styles.fontchange}`}>Sell</span>
                        </div>
                    </div>
                </div>

                
            </Container>
            </div>

            <Container>
                <div className='d-flex align-items-center'>
                    <div className={styles.cityDropDown}>
                        <div>
                            <select name="" id="">
                                <option value="Pakistan">Pakistan</option>
                                <option value="Karachi" >Karachi, Sindh</option>
                                <option value="Lahore">Lahore, Punjab</option>
                                <option value="Islamabad">Islamabad, Capital Territory</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.searchInput}></div>
                </div>
            </Container>
            
        </>
    )
}

export default NavbarOLX