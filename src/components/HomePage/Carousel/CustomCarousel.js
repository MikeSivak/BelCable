import './Carousel.css'

import { Carousel, Button, Image, Row, Col } from "react-bootstrap"

export default function CustomCarousel() {
    return (
        <>
            <div className='custom-carousel'>
                <Carousel>
                    <Carousel.Item>
                        <img className="frontPic" src="h1.png" alt="" />
                        <Carousel.Caption>
                            <div>
                                <p>Кабели для внутренних и наружных соединений подвижного состава РЕЛЬСОВОГО ТРАНСПОРТА И ТРОЛЛЕЙБУСОВ</p>
                                <Button className='photoButton' variant="danger">Перейти</Button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="frontPic" src="h2.png" alt="" />
                        <Carousel.Caption>
                            <div>
                                <p>КАБЕЛИ И ПРОВОДА СВЯЗИ</p>
                                <h5 style={{ maxWidth: '90%' }}>Для эксплуатации в местных первичных сетях связи с номинальным напряжением дистанционного питания до 225 В и 145</h5>
                                <Button className='photoButton' variant="danger">Перейти</Button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="frontPic" src="h3.png" alt="" />
                        <Carousel.Caption>
                            <div>
                                <p style={{ maxWidth: '50%' }}>КАБЕЛИ И ПРОВОДА МОНТАЖНЫЕ</p>
                                <Button className='photoButton' variant="danger">Перейти</Button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="frontPic" src="h4.png" alt="" />
                        <Carousel.Caption>
                            <div>
                                <p style={{ maxWidth: '49%' }}>КАБЕЛИ УПРАВЛЕНИЯ И ПЕРЕДАЧИ ДАННЫХ</p>
                                <Button className='photoButton' variant="danger">Перейти</Button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="frontPic" src="h5.png" alt="" />
                        <Carousel.Caption>
                            <div>
                                <p style={{ maxWidth: '49%' }}>КАБЕЛИ СИЛОВЫЕ</p>
                                <Button className='photoButton' variant="danger">Перейти</Button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="frontPic" src="h6.png" alt="" />
                        <Carousel.Caption>
                            <div>
                                <p style={{ maxWidth: '80%' }}>КАБЕЛИ И ПРОВОДА ДЛЯ СИГНАЛИЗАЦИИ И БЛОКИРОВКИ</p>
                                <Button className='photoButton' variant="danger">Перейти</Button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="frontPic" src="h7.png" alt="" />
                        <Carousel.Caption>
                            <div style={{ marginTop: '70px' }}>
                                <p>КАБЕЛИ КОНТРОЛЬНЫЕ</p>
                                <Button className='photoButton' variant="danger">Перейти</Button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className='control-block'>
                    <Row className='g-0 control-block-row'>
                        <Col className='control-block-info'>Кабели для рельсового транспорта</Col>
                        <Col className='control-block-info'>КАБЕЛИ И ПРОВОДА СВЯЗИ</Col>
                        <Col className='control-block-info'>КАБЕЛИ И ПРОВОДА МОНТАЖНЫЕ</Col>
                        <Col className='control-block-info'>кабели управления и передачи данных</Col>
                        <Col className='control-block-info'>кабели силовые</Col>
                        <Col className='control-block-info'>кабели и провода для сигнализации и блокировки </Col>
                        <Col className='control-block-info'>кабели контрольные</Col>
                    </Row>
                </div>
            </div>
        </>
    )
}