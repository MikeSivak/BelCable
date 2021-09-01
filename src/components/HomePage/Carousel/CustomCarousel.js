import './Carousel.css'
import '../../../fonts/fonts.css'

import { Carousel, Button, Image, Row, Col } from "react-bootstrap"

export default function CustomCarousel() {
    return (
        <>
            <div className='custom-carousel-container'>
                <Carousel className='check'>
                    <Carousel.Item>
                        <img className="frontPic" src="h1.png" alt="" />
                        <img className="frontPic-mobile" src="mc1.png" alt="" />
                        <Carousel.Caption>
                            <div>
                                <p>Кабели для внутренних и наружных соединений подвижного состава РЕЛЬСОВОГО ТРАНСПОРТА И ТРОЛЛЕЙБУСОВ</p>
                                <Button className='photoButton' variant="danger">Перейти</Button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="frontPic" src="h2.png" alt="" />
                        <img className="frontPic-mobile" src="mc2.png" alt="" />
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
                        <img className="frontPic-mobile" src="mc3.png" alt="" />
                        <Carousel.Caption>
                            <div>
                                <p style={{ maxWidth: '100%' }}>КАБЕЛИ И ПРОВОДА МОНТАЖНЫЕ</p>
                                <h5 style={{ maxWidth: '100%' }}>
                                    Предназначены для передачи электрической энергии в пределах одной электрической установки, электрического прибора или аппарата.
                                </h5>
                                <Button className='photoButton' variant="danger">Перейти</Button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="frontPic" src="h4.png" alt="" />
                        <img className="frontPic-mobile" src="mc4.png" alt="" />
                        <Carousel.Caption>
                            <div>
                                <p style={{ maxWidth: '100%' }}>КАБЕЛИ УПРАВЛЕНИЯ И ПЕРЕДАЧИ ДАННЫХ</p>
                                <h5 style={{ maxWidth: '70%' }}>
                                    Предназначены для передачи сигналов к аппаратуре контроля.
                                </h5>
                                <Button className='photoButton' variant="danger">Перейти</Button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="frontPic" src="h5.png" alt="" />
                        <img className="frontPic-mobile" src="mc5.png" alt="" />
                        <Carousel.Caption>
                            <div>
                                <p style={{ maxWidth: '49%' }}>КАБЕЛИ СИЛОВЫЕ</p>
                                <h5 style={{ maxWidth: '90%' }}>
                                    Для передачи электроэнергии токами промышленных частот и для стационарной прокладки.
                                </h5>
                                <Button className='photoButton' variant="danger">Перейти</Button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="frontPic" src="h6.png" alt="" />
                        <img className="frontPic-mobile" src="mc6.png" alt="" />
                        <Carousel.Caption>
                            <div>
                                <p style={{ maxWidth: '80%' }}>КАБЕЛИ И ПРОВОДА ДЛЯ СИГНАЛИЗАЦИИ И БЛОКИРОВКИ</p>
                                <h5 style={{ maxWidth: '90%' }}>
                                    Для монтажа систем сигнализации и эксплуатации в условиях стационарной и нестационарной прокладки
                                </h5>
                                <Button className='photoButton' variant="danger">Перейти</Button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="frontPic" src="h7.png" alt="" />
                        <img className="frontPic-mobile" src="mc7.png" alt="" />
                        <Carousel.Caption>
                            <div>
                                <p>КАБЕЛИ КОНТРОЛЬНЫЕ</p>
                                <h5 style={{ maxWidth: '90%' }}>
                                    Для неподвижного присоединения к электрическим приборам, аппаратам, сборкам зажимов электрических распределительных устройств
                                </h5>
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