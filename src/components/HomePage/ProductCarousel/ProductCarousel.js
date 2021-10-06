import { Carousel, Row, Col, Card, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Carousel.css'

export default function ProductCarousel() {
    const purpose = [
        {
            id: 1,
            name: 'Кабели и провода монтажные',
            image1: '',
            image2: '',
            description: `
            Объединяют специальную группу кабельной продукции, предназначенной для передачи электрической энергии в пределах одной электрической установки, электрического прибора или аппарата.
            `,
        },
        {
            id: 2,
            name: 'КАБЕЛИ И ПРОВОДА СВЯЗИ',
            image1: '',
            image2: '',
            description: `
            Используется для прокладки линий телефонной связи и распределительных сетей. 
            `,
        },
        {
            id: 3,
            name: 'КАБЕЛИ УПРАВЛЕНИЯ И ПЕРЕДАЧИ ДАННЫХ',
            image1: '',
            image2: '',
            description: `
            Предназначены для передачи сигналов к аппаратуре контроля, используются для дистанционного управления исполнительными механизмами управления.
            `,
        },
        {
            id: 4,
            name: 'КАБЕЛИ СИЛОВЫЕ',
            image1: '',
            image2: '',
            description: `
            Для передачи электроэнергии токами промышленных частот и для стационарной прокладки.
            `,
        },
        {
            id: 5,
            name: 'КАБЕЛИ И ПРОВОДА ДЛЯ СИГНАЛИЗАЦИИ И БЛОКИРОВКИ',
            image1: '',
            image2: '',
            description: `
            Для монтажа систем сигнализации и эксплуатации в условиях стационарной и нестационарной прокладки
            `,
        },
        {
            id: 6,
            name: 'КАБЕЛИ КОНТРОЛЬНЫЕ',
            image1: '',
            image2: '',
            description: `
            Для неподвижного присоединения к электрическим приборам, аппаратам, сборкам зажимов электрических распределительных устройств
            `,
        },
        {
            id: 7,
            name: 'КАБЕЛИ КОМБИНИРОВАННЫЕ',
            image1: '',
            image2: '',
            description: `
            Для подключения камер видеонаблюдения. 
            `,
        },
        {
            id: 8,
            name: 'ПРОВОДА И ШНУРЫ СОЕДИНИТЕЛЬНЫЕ',
            image1: '',
            image2: '',
            description: `
            Для присоединения к электрическим сетям подвижных и неподвижных установок бытового назначения, электроприборов, электроинструментов, машин и приборов
            `,
        },
    ]

    return (
        <>
            <div className='product-carousel-container'>
                <div className='productLabel'>
                    <p>ПРОДУКЦИЯ</p>
                </div>
                <Row xs={1} md={4} className="g-1 product-carousel-row">
                    {purpose.map((data) => (
                        <Col className='product-carousel-col'>
                            {/* to={data.purposeLink} */}
                            <Link className='custom-link' to='/#'>
                                <Card className='product-carousel-card'>
                                    <div className='image-box'>
                                        {/* src={data.image1} */}
                                        <Image className='product-carousel-round round-image' src='round1.png' alt='img' />
                                        {/* src={data.image2} */}
                                        <Image className='product-carousel-round-2 round-image' src='round2.png' alt='img' />
                                    </div>
                                    <Card.Body className='product-carousel-card-body'>
                                        <Card.Title><span className='card-title'>{data.name}</span></Card.Title>
                                        <Card.Text>
                                            <span className='card-text'>
                                                {data.description}
                                            </span>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
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