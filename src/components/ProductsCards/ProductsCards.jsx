import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaRegHeart } from "react-icons/fa";

function ProductsCards({ title, price, imageSrc, location, year }) {
    return (
        <Card style={{ width: '18.5rem', height: '320px', marginBottom: '20px', color: '#002f34' }}>
            <Card.Img
                variant="top"
                src={imageSrc}
                style={{ height: '150px', width: '100%', objectFit: 'cover' }}
            />
            <Card.Body className='d-flex flex-column justify-content-between'>
                <div >
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <Card.Title style={{ margin: 0 }}>RS. {price}</Card.Title>
                        <span>
                            <FaRegHeart />
                        </span>
                    </div>
                    <Card.Text>{title}</Card.Text>
                </div>
                <div className='d-flex flex-column justify-content-between' style={{ fontSize: '14px' }}>
                    <span>{location}</span>
                    <span>{year}</span>
                </div>

            </Card.Body>
        </Card>
    );
}

export default ProductsCards;