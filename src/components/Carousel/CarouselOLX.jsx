import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from '../../assets/CarouselImage.webp';
import { Container } from 'react-bootstrap';

function CarouselOLX() {
    return (
        <Container>
            <div style={{ width: '100%', marginTop: '40px', borderRadius: '10px'}}>
                <Carousel>
                    <Carousel.Item>
                        <img style={{ borderRadius: '10px', width: '100%', height: 'auto' }} src={CarouselImage} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{ borderRadius: '10px', width: '100%', height: 'auto' }} src={CarouselImage} alt="" />
                    </Carousel.Item>
                </Carousel>
            </div>

        </Container>
    );
}

export default CarouselOLX;