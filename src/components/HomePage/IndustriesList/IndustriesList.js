import './IndustriesList.css'
import { Row, Col, Image, Card } from 'react-bootstrap';

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
            <div className='industryLabel'>
                <p>ПО ОТРАСЛЯМ</p>
            </div>
            <Row xs={1} md={6} className="g-4 indList">
                {industry.map((data) => (
                    <Col>
                        <Card className='industry-list-card'>
                            <Image className='industy-card-round' src='circle.png' alt='img' />
                            <Image className='industy-card-image' src={data.image} alt='img' />
                            <Card.Body>
                                <Card.Title><span className='industry-name'>{data.name}</span></Card.Title>
                                <Card.Text>
                                    {data.info}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                {/* {Array.from({ length: 6 }).map((_, idx) => (
                    <Col>
                        <Card className='industry-list-card'>
                            <Image className='industy-card-round' src='circle.png' alt='img' />
                            <Image className='industy-card-image' src='industryTower.png' alt='img' />
                            <Card.Body>
                                <Card.Title>Энергетика</Card.Title>
                                <Card.Text>
                                    Продукция для строительства и реконструкции кабельных линий
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))} */}
            </Row>
        </>
    )
}