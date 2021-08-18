import './ProductPage.css'
import { Card, Col, Row, Dropdown, Tabs, Tab} from 'react-bootstrap'

export default function ProductPage() {

    const industry = [
        { name: 'Энергетика', image: 'tow.png' },
        { name: 'Строительство', image: 'crane.png' },
        { name: 'Коммуникации', image: 'phone.png' },
        { name: 'Нефтегазовая промышленность', image: 'platform.png' },
        { name: 'Транспортная инфраструктура', image: 'train.png' },
        { name: 'Машиностроение', image: 'car.png' },
    ]

    const purpose = [
        { name: 'Кабели и провода монтажные' },
        { name: 'Кабели и провода связи' },
        { name: 'Кабели управления и передачи данных' },
        { name: 'Кабели силовые' },
        { name: 'Кабели и провода для сигнализации и блокировки' },
        { name: 'Кабели контрольные' },
        { name: 'Кабели комбинированные' },
        { name: 'Провода и шнуры соединительные' },
        { name: 'Кабели и многожильные подвесные' },
        { name: 'Кабели, провода, шнуры микрофонные' },
        { name: 'Провода автотракторные' },
        { name: 'Провода бортовые облученные' },
        { name: 'Провода для промышленных взрывных работ' },
        { name: 'Провода для щёток электрических машин, провода для платы' },
        { name: 'Провода контактные для экранизирующих элементов' },
        { name: 'Провода кроссовые станционные с изоляцией из ПВХ пластика' },
        { name: 'Провода обмоточные для погруженных электродвигателей' },
        { name: 'Провода трансляционные с пластмассовой изоляцией' },
        { name: 'Провода установочные для водопогружных электродвигателей' },
        { name: 'Радиочастотные кабели' }
    ]

    return (
        <>
            <div className='product-page-container'>
                <div class="container content">
                    <div class="row">
                        <Col md={4}>
                            <Tabs defaultActiveKey="byIndustry" id="uncontrolled-tab-example">
                                <Tab eventKey="byIndustry" title="По отраслям" className=''>
                                    {industry.map((data) => (
                                        <>
                                            <Dropdown >
                                                <Dropdown.Toggle className='drop-buttons mt-1' id="dropdown-basic">
                                                    {data.name}
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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
                                                    {data.name}
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </>
                                    ))
                                    }
                                </Tab>
                            </Tabs>
                        </Col>
                        <div class="col-md-8 products">
                            <div className='productsLabel'>ПРОДУКЦИЯ</div>
                            <Tabs defaultActiveKey="byIndustry" id="uncontrolled-tab-example" className='cardsBlock'>
                                <Tab eventKey="byIndustry" title="По отраслям" className='cardsTab'>
                                    <Row xs={1} md={3} className="g-4">
                                        {industry.map((data) => (
                                            <Col>
                                                <Card className='product'>
                                                    <Card.Img className='cardImg' variant="top" src={data.image} />
                                                    <Card.Body>
                                                        <Card.Title>{data.name}</Card.Title>
                                                        <Card.Text>
                                                            This is a longer card with supporting text below as a natural
                                                            lead-in to additional content. This content is a little bit longer.
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))
                                        }
                                    </Row>
                                </Tab>
                                <Tab eventKey="byPurpose" title="По назначению" className='cardsTab'>
                                    <Row xs={1} md={3} className="g-4">
                                        {purpose.map((data) => (
                                            <Col>
                                                <Card className='product'>
                                                    <Card.Img className='cardImg' variant="top" src='itemCable.png' />
                                                    <Card.Body>
                                                        <Card.Title>{data.name}</Card.Title>
                                                        <Card.Text>
                                                            This is a longer card with supporting text below as a natural
                                                            lead-in to additional content. This content is a little bit longer.
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))
                                        }
                                    </Row>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}