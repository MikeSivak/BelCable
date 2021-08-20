import './IndustriesList.css'
import { Row, Col, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                    ПРОДУКЦИЯ
                </div>
                <Row xs={1} md={6} className="g-1 industry-list-row">
                    {industry.map((data) => (
                        <Col>
                            <div className='industry-block'>
                                <Link className='custom-link' to='/product'>
                                    <Row className='g-1 industry-images'>
                                        <Image className='product-card-image-industry round-image' src='circle.png' alt='img' />
                                        <Image className='product-card-image-industry-2 round-image' src={data.image} alt='img' />
                                    </Row>
                                    <Row style={{padding:'2em 0 0 0'}}>
                                        <p><span className='industry-name'>{data.name}</span></p>
                                        <p>{data.info}</p>
                                    </Row>
                                </Link>
                            </div>
                        </Col>
                    ))
                    }
                </Row>
            </div>
        </>
    )
}