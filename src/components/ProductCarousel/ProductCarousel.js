import { Carousel, Row, Col, Card, Image, Button } from 'react-bootstrap'
import './Carousel.css'

export default function ProductCarousel() {
    return (
        <>
            <Carousel className='product'>
                <Carousel.Item interval={1000}>
                    <Row xs={1} md={4} className="g-4">
                        {Array.from({ length: 8 }).map((_, idx) => (
                            <Col>
                                <Card>
                                    {/* <Card.Img variant="top" src="itemCable.png" roundedCircle/> */}
                                    <Image src="itemCable.png" style={{ background: '#CDDBEC' }} roundedCircle />
                                    <Card.Body>
                                        <Card.Title>КАБЕЛИ И ПРОВОДА МОНТАЖНЫЕ</Card.Title>
                                        <Card.Text>
                                            Объединяют специальную группу кабельной продукции, предназначенной для передачи электрической энергии в пределах одной электрической установки, электрического прибора или аппарата.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <Row xs={1} md={4} className="g-4">
                        {Array.from({ length: 8 }).map((_, idx) => (
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="itemCable.png" />
                                    <Card.Body>
                                        <Card.Title>КАБЕЛИ И ПРОВОДА МОНТАЖНЫЕ</Card.Title>
                                        <Card.Text>
                                            Объединяют специальную группу кабельной продукции, предназначенной для передачи электрической энергии в пределах одной электрической установки, электрического прибора или аппарата.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <Row xs={1} md={4} className="g-4">
                        {Array.from({ length: 8 }).map((_, idx) => (
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="itemCable.png" />
                                    <Card.Body>
                                        <Card.Title>КАБЕЛИ И ПРОВОДА МОНТАЖНЫЕ</Card.Title>
                                        <Card.Text>
                                            Объединяют специальную группу кабельной продукции, предназначенной для передачи электрической энергии в пределах одной электрической установки, электрического прибора или аппарата.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Button className='catalogButton' variant="danger">Перейти в каталог</Button>
        </>
    )
}