import './ProductPage.css'
import { Card, Col, Row, Dropdown, Tabs, Tab, Breadcrumb, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function ProductPage() {
    const industry = [
        {
            id: 1,
            name: 'Энергетика',
            image: 'tow.png',
            description: `
            Продукция для строительства и реконструкции кабельных линий
            `,
            menu: []
        },
        {
            id: 2,
            name: 'Строительство',
            image: 'crane.png',
            description: `
            Продукция для энергоснабжения объектов гражданского
            `,
            menu: []
        },
        {
            id: 3,
            name: 'Коммуникации',
            image: 'phone.png',
            description: `
            Продукция общепромышленного назначения
            `,
            menu: []
        },
        {
            id: 4,
            name: 'Нефтегазовая промышленность',
            image: 'platform.png',
            description: `
            Кабели для питания насосов в нефтескважинах
            `,
            menu: []
        },
        {
            id: 5,
            name: 'Транспортная инфраструктура',
            image: 'train.png',
            description: `
            Для внутренних и наружных соединений подвижного состава рельсового транспорта и троллейбусов
            `,
            menu: []
        },
        {
            id: 6,
            name: 'Машиностроение',
            image: 'industryCar.png',
            description: `
            Продукция для энергоснабжения инфраструктуры предприятия
            `,
            menu: []
        },
    ]

    const purpose = [
        {
            id: 1,
            name: 'Кабели и провода монтажные',
            image1: '',
            image2: '',
            label: 'ТУ 345-684-2010',
            description: ``,
            menu: [
                'Кабели симметричные станционные для межстоечного и внутрестоечного монтажа',
                'Провода высоковольтные монтажные телевизионные',
                'Провода для электрических установок с поливинилхлоридной изоляцией',
                'Провода и кабели с изоляцией из ПВХ-пластиката для электрических установок',
                'Провода ленточные унифицированной серии',
                'Провода монтажные',
                'Провода монтажные для внутриприборного монтажа',
                'Провода монтажные малогабаритные',
                'Провода монтажные низковольтные',
                'Провода монтажные с волокнистой или пленочной и поливинилхлоридной изоляцией',
                'Провода монтажные с пластмассовой изоляцией',
                'Провода монтажные теплостойкие',
                'Провода монтажные терморадиационностойкие',
                'Провода с поливинилхлоридной изоляцией и оболочкой плоские',
                'Шнуры для ламп автомобилей (высоковольтные)',
            ],
        },
        {
            id: 2,
            name: 'Кабели и провода связи',
            image1: '',
            image2: '',
            label: 'ТУ 345-684-2010',
            description: ``,
            menu: [
                'Кабели городские телефонные с полиэтиленовой изоляцией в пластмассовой оболочке',
                'Кабели местной связи высокочастотные',
                'Кабели связи высокочастотные одночетверочные с полиэтиленовой изоляцией',
                'Кабели телефонные станционные',
                'Шнуры телефонные',
            ]
        },
        {
            id: 3,
            name: 'Кабели управления и передачи данных',
            image1: '',
            image2: '',
            label: 'ТУ 345-684-2010',
            description: ``,
            menu: [
                'Кабели высокочастотные для цифровых сетей абонентского доступа',
                'Кабели высокочастотные малопарные для цифровых сетей абонентского доступа',
                'Кабели управления и передачи данных, огнестойкие не распространяющие горение',
                'Кабели управления с ПЭ изоляцией в оболочке из ПВХ пластиката',
            ]
        },
        {
            id: 4,
            name: 'Кабели силовые',
            image1: '',
            image2: '',
            label: 'ТУ 345-684-2010',
            description: ``,
            menu: [
                'Кабели силовые бронированные',
                'Кабели силовые не распространяющие горение с низким дымо и газовыделением',
                'Кабели силовые огнестойкие',
                'Кабели силовые огнестойкие не распространяющие горение с изоляцией и оболочкой из полимерных композиций, не содержищих галогенов',
                'Кабели силовые с пластмассовой изоляцией, бронированные',
            ]
        },
        {
            id: 5,
            name: 'Кабели и провода для сигнализации и блокировки',
            image1: '',
            image2: '',
            label: 'ТУ 345-684-2010',
            description: ``,
            menu: [
                'Кабели для монтажа систем сигнализации',
                'Кабели для сигнализации и блокировки',
                'Кабели для систем пожарной и охранной сигнализации',
                'Провода для сигнализации',
            ]
        },
        {
            id: 6,
            name: 'Кабели контрольные',
            image1: '',
            image2: '',
            label: 'ТУ 345-684-2010',
            description: ``,
            menu: [
                'Кабели контрольные огнестойкие не распространяющие горение',
                'Кабели контрольные с пластмассовой изоляцией',
            ]
        },
        {
            id: 7,
            name: 'Кабели комбинированные',
            image1: '',
            image2: '',
            label: 'ТУ 345-684-2010',
            description: ``,
            menu: [
                'Кабели высокочастотные комбинированые для систем видеонаблюдения'
            ]
        },
        {
            id: 8,
            name: 'Провода и шнуры соединительные',
            image1: '',
            image2: '',
            label: 'ТУ 345-684-2010',
            description: ``,
            menu: [
                'Шнуры гибкие со скрученными жилами в ПВХ оболочке, в оплетке'
            ]
        },
        {
            id: 9,
            name: 'Кабели и многожильные подвесные',
            image1: '',
            image2: '',
            label: 'ТУ 345-684-2010',
            description: ``,
            menu: [

            ]
        },
        {
            id: 10,
            name: 'Кабели, провода, шнуры микрофонные',
            image1: '',
            image2: '',
            label: 'ТУ 345-684-2010',
            description: ``,
            menu: []
        },
        {
            id: 11,
            name: 'Провода автотракторные',
            image1: '',
            image2: '',
            label: 'ТУ 345-684-2010',
            description: ``,
            menu: []
        },
        {
            id: 12,
            name: 'Провода бортовые облученные',
            image1: '',
            image2: '',
            label: 'ТУ 345-684-2010',
            description: ``,
            menu: []
        },
        {
            id: 13,
            name: 'Провода для промышленных взрывных работ',
            image1: '',
            image2: '',
            label: 'ТУ 345-684-2010',
            description: ``,
            menu: [
                'Провода саперные'
            ]
        },
        {
            id: 14,
            name: 'Провода для щёток электрических машин, провода для платы',
            image1: '',
            image2: '',
            label: 'ТУ 345-684-2010',
            description: ``,
            menu: []
        },
        {
            id: 15,
            name: 'Провода контактные для экранизирующих элементов',
            image1: '',
            image2: '',
            label: 'ТУ 345-684-2010',
            description: ``,
            menu: []
        },
        {
            id: 16,
            name: 'Провода кроссовые станционные с изоляцией из ПВХ пластика',
            image1: '',
            image2: '',
            label: 'ТУ 345-684-2010',
            description: ``,
            menu: []
        },
        {
            id: 17,
            name: 'Провода обмоточные для погруженных электродвигателей',
            image1: '',
            image2: '',
            label: 'ТУ 345-684-2010',
            description: ``,
            menu: []
        },
        {
            id: 18,
            name: 'Провода трансляционные с пластмассовой изоляцией',
            image1: '',
            image2: '',
            label: 'ТУ 345-684-2010',
            description: ``,
            menu: []
        },
        {
            id: 19,
            name: 'Провода установочные для водопогружных электродвигателей',
            image1: '',
            image2: '',
            label: 'ТУ 345-684-2010',
            description: ``,
            menu: []
        },
        {
            id: 20,
            name: 'Радиочастотные кабели',
            image1: '',
            image2: '',
            label: 'ТУ 345-684-2010',
            description: ``,
            menu: []
        }
    ]

    return (
        <>
            {/* style={{backgroundImage:'url("backCab.png")', backgroundPosition:'rigth'}} */}
            <div className='product-page-container'>
                <Breadcrumb className='custom-breadcrumb' style={{ marginTop: '38px' }}>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item active>Продукция</Breadcrumb.Item>
                </Breadcrumb>
                <Row className='product-page-row'>
                    <Col md={4} className='product-menu'>
                        <Tabs defaultActiveKey="byIndustry" id="uncontrolled-tab-example">
                            <Tab eventKey="byIndustry" title="По отраслям">
                                {industry.map((data) => (
                                    <>
                                        <Dropdown >
                                            <Dropdown.Toggle className='drop-buttons mt-1' id="dropdown-basic">
                                                <Link to='/#' className='product-type-link'>{data.name}</Link> 
                                            </Dropdown.Toggle>
                                            {/* <Dropdown.Menu className='drop-menu'>
                                                {data.menu.map((item) => (
                                                    <Dropdown.Item href="/product">{item}</Dropdown.Item>
                                                ))}
                                            </Dropdown.Menu> */}
                                        </Dropdown>
                                    </>
                                ))
                                }
                            </Tab>
                            <Tab eventKey="byPurpose" title="По назначению">
                                {purpose.map((data) => (
                                    <>
                                        <Dropdown >
                                            <Dropdown.Toggle className='drop-buttons mt-1' id="dropdown-basic">
                                                <Link to='/#' className='product-type-link'>{data.name}</Link> <img src='vectorDown.png' alt='image' />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className='drop-menu'>
                                                {data.menu.map((item) => (
                                                    <Dropdown.Item href="/product">{item}</Dropdown.Item>
                                                ))}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </>
                                ))
                                }
                            </Tab>
                        </Tabs>
                    </Col>
                    <Col md={8} className='products'>
                        <div className='productsLabel'>ПРОДУКЦИЯ</div>
                        <Tabs defaultActiveKey="byIndustry" id="uncontrolled-tab-example" className='cardsBlock'>
                            <Tab eventKey="byIndustry" title="По отраслям" className='cardsTab'>
                                {/* <Row xs={1} md={3} className="g-2">
                                    {industry.map((data) => (
                                        <Col>
                                            <Link className='custom-link' to='/#'>
                                                <Card className='product'>
                                                        <Image className='product-card-image-industry round-image' src='circle.png' alt='img' />
                                                        <Image className='product-card-image-industry-2 round-image' src={data.image} alt='img' />                                                              
                                                    <Card.Body className='product-carousel-card-body'>
                                                        <Card.Title><span className='product-name'>{data.name}</span></Card.Title>
                                                        <Card.Text>
                                                            {data.description}
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Link>
                                        </Col>
                                    ))
                                    }
                                </Row> */}
                                <Row md={2} className="g-2 industry-list-row">
                                    <Col className='industry-list-col'>
                                        <Row>
                                            <Link className='custom-link' to='/product'>
                                                <Card className='industry-product-card'>
                                                    <Row style={{ width: '100%' }} md={2}>
                                                        <Col md={3}>
                                                            <Image className='industry-product-card-circle' src='ind11.png' alt='img' />
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
                                                            <Image className='industry-product-card-circle' src='ind22.png' alt='img' />
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
                                                        <Image className='industry-product-card-circle' src='ind33.png' alt='img' />
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
                                                            <Image className='industry-product-card-circle' src='ind44.png' alt='img' />
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
                                                            <Image className='industry-product-card-circle' src='ind55.png' alt='img' />
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
                                                            <Image className='industry-product-card-circle' src='ind66.png' alt='img' />
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
                            </Tab>
                            <Tab eventKey="byPurpose" title="По назначению" className='cardsTab'>
                                <Row xs={1} md={3} className="g-2">
                                    {purpose.map((data) => (
                                        <Col>
                                            <Link className='custom-link' to='/#'>
                                                <Card className='product'>
                                                    <Image className='product-carousel-round round-image' src='round1.png' alt='img' />
                                                    <Image className='product-carousel-round-2 round-image' src='round2.png' alt='img' />
                                                    <Card.Body className='product-carousel-card-body'>
                                                        <Card.Title><span className='product-name'>{data.name}</span></Card.Title>
                                                        <Card.Text>
                                                            <p className='product-card-label'>{data.label}</p>
                                                            Для монтажа передающих и приемных антенн с радио- и телевизионных станций, в системах радиосвязи и радиолокации.
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Link>
                                        </Col>
                                    ))
                                    }
                                </Row>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </div>
        </>
    )
}