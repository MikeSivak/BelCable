import { Row, Col, Image } from 'react-bootstrap'
import './HistoryPage.css'

export default function HistoryPage() {
    return (
        <>
            <div className='history-page-container'>
                <div className='history-page-label'>
                    История
                </div>
                <div className='history-page-info'>
                    <Row className='history-page-row hpr-1'>
                        <Col>
                            <Row className='hpr-1-row'>
                                <Col className='hpr-image-section'>
                                    <Image className='history-page-images' src='1.1.png' alt='1.1.png' />
                                </Col>
                                <Col className='hpr-image-section'>
                                    <Image className='history-page-images' src='1.2.png' alt='1.2.png' />
                                </Col>
                            </Row>
                            <Row>
                                <div className='history-page-text'>
                                    <span>Предприятие ОАО «Беларускабель»</span> (ранее «Мозырькабель») организовано в старейшем городе белорусского Полесья в 1958 г. На возвышенности у самой реки Припять расположились корпуса завода. С момента образования предприятие считается одним из лучших в кабельной отрасли СНГ.
                                </div>
                            </Row>
                        </Col>
                        <Col className='hpr-image-section'>
                            <Image className='history-page-images' src='2.png' alt='2.png' />
                        </Col>
                    </Row>
                    <Row className='history-page-row hpr-2'>
                        <Col className='hpr-image-section'>
                            <Image className='history-page-images' src='3.png' alt='3.png' />
                        </Col>
                        <Col>
                            <div className='history-page-text'>
                                <span>За годы деятельности ОАО «Беларускабель»</span> значительно выросли производственные мощности, сформировался опытный коллектив, который решает серьезные инженерные задачи по постановке на производство новых кабельно-проводниковых изделий и освоению прогрессивной технологии. На предприятии был установлен электронный ускоритель, в то время одна из самых прогрессивных технологий, для облучения изоляции проводов, что существенно улучшило физико-механические характеристики проводов и позволило ставить на производство провода, используемые для авиационной промышленности
                            </div>
                        </Col>
                    </Row>
                    <Row className='history-page-row hpr-3'>
                        <Col className='hpr-image-section'>
                            <Image className='history-page-images' src='4.1.png' alt='4.1.png' />
                        </Col>
                        <Col className='hpr-image-section'>
                            <Image className='history-page-images' src='4.2.png' alt='4.2.png' />
                        </Col>
                    </Row>
                    <Row className='history-page-row hpr-4'>
                        <Col>
                            <div className='history-page-text'>
                                <span>В настоящее время</span> предприятие производит монтажные провода, терморадиационностойкие провода, малогабаритные и теплостойкие провода, силовые кабели и контрольные кабели, кабели связи, радиочастотные кабели, а также кабели и провода различного специального назначения с жилой из медной и алюминиевой проволоки. Сфера применения выпускаемых изделий охватывает такие отрасли народного хозяйства, как радиоэлектроника, авиационная техника, приборостроение, строительство, связь, телекоммуникация и электротехника.
                            </div>
                        </Col>
                        <Col className='hpr-image-section'>
                            <Image className='history-page-images' src='5.png' alt='5.png' />
                        </Col>
                    </Row>
                    <Row className='history-page-row hpr-5'>
                        <Col className='hpr-image-section'>
                            <Image className='history-page-images' src='6.1.png' alt='6.1.png' />
                        </Col>
                        <Col className='hpr-image-section'>
                            <Image className='history-page-images' src='6.2.png' alt='6.2.png' />
                        </Col>
                    </Row>
                    <Image className='graphic' src='graphic.png' alt='graphic.png'></Image>
                </div>
            </div>
        </>
    )
}