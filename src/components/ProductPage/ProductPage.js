import './ProductPage.css'
import { Card, Col, Row, Dropdown, Tabs, Tab, Breadcrumb, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function ProductPage() {

    const industry = [
        {
            name: 'Энергетика',
            image: 'tow.png',
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
            ]
        },
        { name: 'Строительство', image: 'crane.png', menu: [] },
        { name: 'Коммуникации', image: 'phone.png', menu: [] },
        { name: 'Нефтегазовая промышленность', image: 'platform.png', menu: [] },
        { name: 'Транспортная инфраструктура', image: 'train.png', menu: [] },
        { name: 'Машиностроение', image: 'industryCar.png', menu: [] },
    ]

    const purpose = [
        { name: 'Кабели и провода монтажные', menu: [] },
        { name: 'Кабели и провода связи', menu: [] },
        { name: 'Кабели управления и передачи данных', menu: [] },
        { name: 'Кабели силовые', menu: [] },
        { name: 'Кабели и провода для сигнализации и блокировки', menu: [] },
        { name: 'Кабели контрольные', menu: [] },
        { name: 'Кабели комбинированные', menu: [] },
        { name: 'Провода и шнуры соединительные', menu: [] },
        { name: 'Кабели и многожильные подвесные', menu: [] },
        { name: 'Кабели, провода, шнуры микрофонные', menu: [] },
        { name: 'Провода автотракторные', menu: [] },
        { name: 'Провода бортовые облученные', menu: [] },
        { name: 'Провода для промышленных взрывных работ', menu: [] },
        { name: 'Провода для щёток электрических машин, провода для платы', menu: [] },
        { name: 'Провода контактные для экранизирующих элементов', menu: [] },
        { name: 'Провода кроссовые станционные с изоляцией из ПВХ пластика', menu: [] },
        { name: 'Провода обмоточные для погруженных электродвигателей', menu: [] },
        { name: 'Провода трансляционные с пластмассовой изоляцией', menu: [] },
        { name: 'Провода установочные для водопогружных электродвигателей', menu: [] },
        { name: 'Радиочастотные кабели', menu: [] }
    ]

    return (
        <>
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
                                                {data.name} <img src='vectorDown.png' alt='image' />
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
                            <Tab eventKey="byPurpose" title="По назначению">
                                {purpose.map((data) => (
                                    <>
                                        <Dropdown >
                                            <Dropdown.Toggle className='drop-buttons mt-1' id="dropdown-basic">
                                                {data.name} <img src='vectorDown.png' alt='image' />
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
                                <Row xs={1} md={3} className="g-4">
                                    {industry.map((data) => (
                                        <Col>
                                            <Link className='custom-link' to='/product'>
                                                <Card className='product'>
                                                    <Image className='product-card-image-industry round-image' src='circle.png' alt='img' />
                                                    <Image className='product-card-image-industry-2 round-image' src={data.image} alt='img' />
                                                    {/* <Card.Img className='cardImg' variant="top" src={data.image} /> */}
                                                    <Card.Body>
                                                        <Card.Title><span className='product-name'>{data.name}</span></Card.Title>
                                                        <Card.Text>
                                                            This is a longer card with supporting text below as a natural
                                                            lead-in to additional content. This content is a little bit longer.
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Link>
                                        </Col>
                                    ))
                                    }
                                </Row>
                            </Tab>
                            <Tab eventKey="byPurpose" title="По назначению" className='cardsTab'>
                                <Row xs={1} md={3} className="g-4">
                                    {purpose.map((data) => (
                                        <Col>
                                            <Link className='custom-link' to='/product'>
                                                <Card className='product'>
                                                    <Image className='product-card-image round-image' src='round1.png' alt='img' />
                                                    <Image className='product-card-image-2 round-image' src='round2.png' alt='img' />
                                                    <Card.Body>
                                                        <Card.Title><span className='product-name'>{data.name}</span></Card.Title>
                                                        <Card.Text>
                                                            This is a longer card with supporting text below as a natural
                                                            lead-in to additional content. This content is a little bit longer.
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