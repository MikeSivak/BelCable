import './ProductPage.css'
import { Card, Col, Row, Dropdown, Tabs, Tab } from 'react-bootstrap'

const industryNames = [
    'Энергетика',
    'Строительство',
    'Металлургия',
    'Нефтегазовая промышленность',
    'Транспортная инфраструктура',
    'Машиностроение'
]

const industryImages = [
    '',
    '',
    '',
    '',
    '',
    '',
]

const purposeNames = [
    'Кабели и провода монтажные',
    'Кабели и провода связи',
    'Кабели управления и передачи данных',
    'Кабели силовые',
    'Кабели и провода для сигнализации и блокировки',
    'Кабели контрольные',
    'Кабели комбинированные',
    'Провода и шнуры соединительные',
    'Кабели и многожильные подвесные',
    'Кабели, провода, шнуры микрофонные',
    'Провода автотракторные',
    'Провода бортовые облученные',
    'Провода для промышленных взрывных работ',
    'Провода для щёток электрических машин, провода для платы',
    'Провода контактные для экранизирующих элементов',
    'Провода кроссовые станционные с изоляцией из ПВХ пластика',
    'Провода обмоточные для погруженных электродвигателей',
    'Провода трансляционные с пластмассовой изоляцией',
    'Провода установочные для водопогружных электродвигателей',
    'Радиочастотные кабели'
]

export default function ProductPage() {
    return (
        <>
            <div className='product-page-container'>
                <div class="container content">
                    <div class="row">
                        <Col md={4}>
                            <Tabs defaultActiveKey="byIndustry" id="uncontrolled-tab-example">
                                <Tab eventKey="byIndustry" title="По отраслям" className=''>
                                    {industryNames.map((names) => (
                                        <>
                                            <Dropdown >
                                                <Dropdown.Toggle className='drop-buttons mt-1' id="dropdown-basic">
                                                    {names}
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </>
                                    ))}
                                </Tab>
                                <Tab eventKey="byPurpose" title="По назначению">
                                    {purposeNames.map((names) => (
                                        <>
                                            <Dropdown >
                                                <Dropdown.Toggle className='drop-buttons mt-1' id="dropdown-basic">
                                                    {names}
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </>
                                    ))}
                                </Tab>
                            </Tabs>
                        </Col>
                        <div class="col-md-8 products">
                            <Row xs={1} md={3} className="g-4">
                                {industryNames.map((names) => (
                                    <Col>
                                        <Card className='product'>
                                            <Card.Img className='cardImg' variant="top" src="itemCable.png" />
                                            <Card.Body>
                                                <Card.Title>{names}</Card.Title>
                                                <Card.Text>
                                                    This is a longer card with supporting text below as a natural
                                                    lead-in to additional content. This content is a little bit longer.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}