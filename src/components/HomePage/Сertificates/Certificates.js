import './Certificates.css'
import { Row, Col, Carousel } from 'react-bootstrap'

export default function Certificates() {
    const certificates = [
        'img',
        'img',
        'img',
        // ...
    ]

    const reviews = [
        'img',
        'img',
        'img',
        // ...
    ]

    return (
        <>
            <Row xs={1} md={2} className="g-4 certList">
                <Col className="listCol " md={4}>
                    <div className='labels'>
                        <p>СЕРТИФИКАТЫ</p>
                    </div>
                    <Carousel className='certCarousel' variant='dark'>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="cert.png"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="cert.png"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="cert.png"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col className="listCol revCol" md={6}>
                    <div className='labels'>
                        <p>ОТЗЫВЫ</p>
                    </div>
                    <Carousel className='revCarousel' variant='dark'>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="review1.png"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="review1.png"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="review1.png"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </>
    )
}