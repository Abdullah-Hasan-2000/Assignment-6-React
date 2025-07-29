import Carousel from 'react-bootstrap/Carousel';
import styles from './PhotosCarousel.module.css';
import { CiCamera } from "react-icons/ci";

function PhotosCarousel({ images }) {

    const totalImages = images.length;

    return (
        <Carousel className={styles.carouselContainer}>
            {images.map((e, i) => (
                <Carousel.Item key={i}>
                    <div className={styles.itemWrapper}>
                        <img src={e} alt={`slide-${i}`} className={styles.slideImage} />
                    </div>

                    <Carousel.Caption>
                        <div className={styles.captionText}>
                            <span className={styles.featuredText}>Featured</span>
                            <span className={styles.imageCounter}><CiCamera size={16} /> &nbsp;&nbsp;{i + 1} / {totalImages}</span>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default PhotosCarousel;