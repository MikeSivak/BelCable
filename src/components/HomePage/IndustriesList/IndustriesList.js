import './IndustriesList.css'
import { Row, Col, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../fonts/fonts.css'
import '../../../index.css'

export default function IndustriesList() {
    const industry = [
        {
            id: 1,
            name: 'Энергетика',
            info: 'Продукция для строительства и реконструкции кабельных линий ',
            image: 'industryTower.png'
        },
        {
            id: 2,
            name: 'Строительство',
            info: 'Продукция для энергоснабжения объектов гражданского ',
            image: 'industryCrane.png'
        },
        {
            id: 3,
            name: 'Коммуникации',
            info: 'Продукция общепромышленного назначения',
            image: 'industryPhone.png'
        },
        {
            id: 4,
            name: 'Нефтегазовая промышленность',
            info: 'Кабели для питания насосов в нефтескважинах',
            image: 'industryPlatform.png'
        },
        {
            id: 5,
            name: 'Транспортная инраструктура',
            info: 'Для внутренних и наружных соединений подвижного состава рельсового транспорта и троллейбусов',
            image: 'industryTrain.png'
        },
        {
            id: 6,
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
                <Row md={2} className="g-2 industry-list-row">
                    <Col className='industry-list-col'>
                        <Row>
                            <Link className='custom-link' to='/product'>
                                <Card className='industry-product-card'>
                                    <Row style={{ width: '100%' }} md={2}>
                                        <Col md={3}>
                                            <Image className='industry-product-card-circle' src='ind1.png' alt='img' />
                                        </Col>
                                        <Col className='product-card-body' md={9}>
                                            <Card.Body>
                                                <Card.Title><span className='product-name'>Энергетика</span></Card.Title>
                                                <Card.Text>
                                                    <span className='card-text'>Продукция для строительства и реконструкции кабельных линий</span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Link>
                        </Row>
                        <Row>
                            <Link className='custom-link' to='/product'>
                                <Card className='industry-product-card'>
                                    <Row style={{ width: '100%' }} md={2}>
                                        <Col md={3}>
                                            <Image className='industry-product-card-circle' src='ind2.png' alt='img' />
                                        </Col>
                                        <Col className='product-card-body' md={9}>
                                            <Card.Body>
                                                <Card.Title><span className='product-name'>Строительство</span></Card.Title>
                                                <Card.Text>
                                                    <span className='card-text'>Продукция для энергоснабжения объектов гражданского</span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Link>
                        </Row>
                        <Row><Link className='custom-link' to='/product'>
                            <Card className='industry-product-card'>
                                <Row style={{ width: '100%' }} md={2}>
                                    <Col md={3}>
                                        <Image className='industry-product-card-circle' src='ind3.png' alt='img' />
                                    </Col>
                                    <Col className='product-card-body' md={9}>
                                        <Card.Body>
                                            <Card.Title><span className='product-name'>Коммуникации</span></Card.Title>
                                            <Card.Text>
                                                <span className='card-text'>Продукция общепромышленного назначения</span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Link></Row>
                    </Col>
                    <Col className='industry-list-col'>
                        <Row>
                            <Link className='custom-link' to='/product'>
                                <Card className='industry-product-card'>
                                    <Row style={{ width: '100%' }} md={2}>
                                        <Col md={3}>
                                            <Image className='industry-product-card-circle' src='ind4.png' alt='img' />
                                        </Col>
                                        <Col className='product-card-body' md={9}>
                                            <Card.Body>
                                                <Card.Title><span className='product-name'>Нефтегазовая промышленность</span></Card.Title>
                                                <Card.Text>
                                                    <span className='card-text'>Кабели для питания насосов в нефтескважинах</span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Link>
                        </Row>
                        <Row>
                            <Link className='custom-link' to='/product'>
                                <Card className='industry-product-card'>
                                    <Row style={{ width: '100%' }} md={2}>
                                        <Col md={3}>
                                        <Image className='industry-product-card-circle' src='ind5.png' alt='img' />
                                        </Col>
                                        <Col className='product-card-body' md={9}>
                                            <Card.Body>
                                            <Card.Title><span className='product-name'>Транспортная инраструктура</span></Card.Title>
                                                <Card.Text>
                                                    <span className='card-text'>Для внутренних и наружных соединений подвижного состава рельсового транспорта и троллейбусов</span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Link>
                        </Row>
                        <Row>
                            <Link className='custom-link' to='/product'>
                                <Card className='industry-product-card'>
                                    <Row style={{ width: '100%' }} md={2}>
                                        <Col md={3}>
                                            <Image className='industry-product-card-circle' src='ind6.png' alt='img' />
                                        </Col>
                                        <Col className='product-card-body' md={9}>
                                            <Card.Body>
                                                <Card.Title><span className='product-name'>Машиностроение</span></Card.Title>
                                                <Card.Text>
                                                    <span className='card-text'>Продукция для энергоснабжения инфраструктуры предприятия</span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Link>
                        </Row>
                    </Col>
                </Row>
            </div >
        </>
    )
}