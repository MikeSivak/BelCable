import './IndustriesList.css'
import { Row, Col, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../fonts/fonts.css'
import '../../../index.css'

export default function IndustriesList() {
    const industry = [
        {
            name: 'Энергетика',
            info: 'Продукция для строительства и реконструкции кабельных линий ',
            image: 'industryTower.png'
        },
        {
            name: 'Строительство',
            info: 'Продукция для энергоснабжения объектов гражданского ',
            image: 'industryCrane.png'
        },
        {
            name: 'Коммуникации',
            info: 'Продукция общепромышленного назначения',
            image: 'industryPhone.png'
        },
        {
            name: 'Нефтегазовая промышленность',
            info: 'Кабели для питания насосов в нефтескважинах',
            image: 'industryPlatform.png'
        },
        {
            name: 'Транспортная инраструктура',
            info: 'Для внутренних и наружных соединений подвижного состава рельсового транспорта и троллейбусов',
            image: 'industryTrain.png'
        },
        {
            name: 'Машиностроение',
            info: 'Продукция для энергоснабжения инфраструктуры предприятия',
            image: 'industryCar.png'
        },
    ]
    return (
        <>
            <div className='industry-list-container'>
                <div className='industry-label'>
                    По отраслям
                </div>
                {/* <Row xs={1} md={2} className="g-2 industry-list-row">
                    <Col className='industry-list-col-blocks'>
                        <Row md={3} className='industry-list-row-blocks'>
                            <Col>
                                <Link className='custom-link' to='/product'>
                                    <Card className='industry-product-card'>
                                        <Image className='industry-product-card-circle' src='circle.png' alt='img' />
                                        <Image className='industry-product-card-img-1 ipc-img' src='industryTower.png' alt='img' />
                                        <Card.Body>
                                            <Card.Title><span className='product-name'>Энергетика</span></Card.Title>
                                            <Card.Text>
                                                <span className='card-text'>Продукция для строительства и реконструкции кабельных линий</span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                                <Link className='custom-link' to='/product'>
                                    <Card className='industry-product-card'>
                                        <Image className='industry-product-card-circle' src='circle.png' alt='img' />
                                        <Image className='industry-product-card-img-2 ipc-img' src='industryCrane.png' alt='img' />
                                        <Card.Body>
                                            <Card.Title><span className='product-name'>Строительство</span></Card.Title>
                                            <Card.Text>
                                            <span className='card-text'>Продукция для энергоснабжения объектов гражданского</span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                                <Link className='custom-link' to='/product'>
                                    <Card className='industry-product-card'>
                                        <Image className='industry-product-card-circle' src='circle.png' alt='img' />
                                        <Image className='industry-product-card-img-3 ipc-img' src='industryPhone.png' alt='img' />
                                        <Card.Body>
                                            <Card.Title><span className='product-name'>Коммуникации</span></Card.Title>
                                            <Card.Text>
                                            <span className='card-text'>Продукция общепромышленного назначения</span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='industry-list-col-blocks'>
                        <Row md={3} className='industry-list-row-blocks'>
                            <Col>
                                <Link className='custom-link' to='/product'>
                                    <Card className='industry-product-card'>
                                        <Image className='industry-product-card-circle' src='circle.png' alt='img' />
                                        <Image className='industry-product-card-img-4 ipc-img' src='industryPlatform.png' alt='img' />
                                        <Card.Body>
                                            <Card.Title><span className='product-name'>Нефтегазовая промышленность</span></Card.Title>
                                            <Card.Text>
                                            <span className='card-text'>Кабели для питания насосов в нефтескважинах</span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                                <Link className='custom-link' to='/product'>
                                    <Card className='industry-product-card'>
                                        <Image className='industry-product-card-circle' src='circle.png' alt='img' />
                                        <Image className='industry-product-card-img-5 ipc-img' src='iTrain.png' alt='img' />
                                        <Card.Body>
                                            <Card.Title><span className='product-name'>Транспортная инраструктура</span></Card.Title>
                                            <Card.Text>
                                            <span className='card-text'>Для внутренних и наружных соединений подвижного состава рельсового транспорта и троллейбусов</span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                                <Link className='custom-link' to='/product'>
                                    <Card className='industry-product-card'>
                                        <Image className='industry-product-card-circle' src='circle.png' alt='img' />
                                        <Image className='industry-product-card-img-6 ipc-img' src='industryCar.png' alt='img' />
                                        <Card.Body>
                                            <Card.Title><span className='product-name'>Машиностроение</span></Card.Title>
                                            <Card.Text>
                                            <span className='card-text'>Продукция для энергоснабжения инфраструктуры предприятия</span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row> */}

                <Row xs={1} md={3} className="g-2 industry-list-row">
                    <Col className='industry-list-col-blocks'>
                        <Row md={2} className='industry-list-row-blocks'>
                            <Col>
                                <Link className='custom-link' to='/product'>
                                    <Card className='industry-product-card'>
                                        <Image className='industry-product-card-circle' src='circle.png' alt='img' />
                                        <Image className='industry-product-card-img-1 ipc-img' src='industryTower.png' alt='img' />
                                        <Card.Body>
                                            <Card.Title><span className='product-name'>Энергетика</span></Card.Title>
                                            <Card.Text>
                                                <span className='card-text'>Продукция для строительства и реконструкции кабельных линий</span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                                <Link className='custom-link' to='/product'>
                                    <Card className='industry-product-card'>
                                        <Image className='industry-product-card-circle' src='circle.png' alt='img' />
                                        <Image className='industry-product-card-img-2 ipc-img' src='industryCrane.png' alt='img' />
                                        <Card.Body>
                                            <Card.Title><span className='product-name'>Строительство</span></Card.Title>
                                            <Card.Text>
                                                <span className='card-text'>Продукция для энергоснабжения объектов гражданского</span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='industry-list-col-blocks'>
                        <Row md={2} className='industry-list-row-blocks'>
                            <Col>
                                <Link className='custom-link' to='/product'>
                                    <Card className='industry-product-card'>
                                        <Image className='industry-product-card-circle' src='circle.png' alt='img' />
                                        <Image className='industry-product-card-img-3 ipc-img' src='industryPhone.png' alt='img' />
                                        <Card.Body>
                                            <Card.Title><span className='product-name'>Коммуникации</span></Card.Title>
                                            <Card.Text>
                                                <span className='card-text'>Продукция общепромышленного назначения</span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                                <Link className='custom-link' to='/product'>
                                    <Card className='industry-product-card'>
                                        <Image className='industry-product-card-circle' src='circle.png' alt='img' />
                                        <Image className='industry-product-card-img-4 ipc-img' src='industryPlatform.png' alt='img' />
                                        <Card.Body>
                                            <Card.Title><span className='product-name'>Нефтегазовая промышленность</span></Card.Title>
                                            <Card.Text>
                                                <span className='card-text'>Кабели для питания насосов в нефтескважинах</span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='industry-list-col-blocks'>
                        <Row md={2} className='industry-list-row-blocks'>
                            <Col>
                                <Link className='custom-link' to='/product'>
                                    <Card className='industry-product-card'>
                                        <Image className='industry-product-card-circle' src='circle.png' alt='img' />
                                        <Image className='industry-product-card-img-5 ipc-img' src='iTrain.png' alt='img' />
                                        <Card.Body>
                                            <Card.Title><span className='product-name'>Транспортная инраструктура</span></Card.Title>
                                            <Card.Text>
                                                <span className='card-text'>Для внутренних и наружных соединений подвижного состава рельсового транспорта и троллейбусов</span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                                <Link className='custom-link' to='/product'>
                                    <Card className='industry-product-card'>
                                        <Image className='industry-product-card-circle' src='circle.png' alt='img' />
                                        <Image className='industry-product-card-img-6 ipc-img' src='industryCar.png' alt='img' />
                                        <Card.Body>
                                            <Card.Title><span className='product-name'>Машиностроение</span></Card.Title>
                                            <Card.Text>
                                                <span className='card-text'>Продукция для энергоснабжения инфраструктуры предприятия</span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    )
}