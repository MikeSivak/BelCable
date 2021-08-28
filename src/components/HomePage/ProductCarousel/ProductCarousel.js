import { Carousel, Row, Col, Card, Image, Button } from 'react-bootstrap'
import './Carousel.css'

export default function ProductCarousel() {
    return (
        <>
            <div className='product-carousel-container'>
                <div className='productLabel'>
                    <p>ПРОДУКЦИЯ</p>
                </div>
                <Row xs={1} md={4} className="g-1 product-carousel-row">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Col className='product-carousel-col'>
                            <Card className='product-carousel-card'>
                                <Image className='product-carousel-round round-image' src='round1.png' alt='img' />
                                <Image className='product-carousel-round-2 round-image' src='round2.png' alt='img' />
                                <Card.Body>
                                    <Card.Title><span className='card-title'>КАБЕЛИ И ПРОВОДА МОНТАЖНЫЕ</span></Card.Title>
                                    <Card.Text>
                                        <span className='card-text'>Объединяют специальную группу кабельной продукции, предназначенной для передачи электрической энергии в пределах одной электрической установки, электрического прибора или аппарата.</span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <div className='catalogButton'>
                    <Button className='cB' variant="danger">Перейти в каталог</Button>
                </div>
            </div>
        </>
    )
}