import './Contacts.css'
import { Row, Col, Image, Button, Breadcrumb} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Contacts() {
    return (
        <>
            <div className='contacts-container'>
                <Breadcrumb className='custom-breadcrumb' style={{ marginTop: '38px' }}>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item href="/">Компания</Breadcrumb.Item>
                    <Breadcrumb.Item active>Контакты</Breadcrumb.Item>
                </Breadcrumb>
                <div className='contacts-label'>
                    Контакты
                </div>
                <Row className='contacts-row'>
                    <Col>
                        <Row>
                            <div className='contacts-page-info'>
                                <p>
                                    <span style={{ color: '#E74137', textTransform: 'uppercase', fontSize: '24px' }}>ОАО «БЕЛАРУСКАБЕЛЬ»</span>
                                </p>

                                <span style={{ color: '#343753', fontWeight: '600', fontSize: '24px' }}>Офис</span>
                                <p>
                                    Республика Беларусь, г. Мозырь, 247760, ул. Октябрьская 14
                                    +375-236-37-25-75
                                </p>

                                <span style={{ color: '#343753', fontWeight: '600', fontSize: '24px' }}>Фирменный магазин</span>
                                <p>
                                    Республика Беларусь, г. Мозырь, 247760, ул. Октябрьская 14
                                    +375-236-37-25-75
                                </p>

                                <p>Email: <span style={{ color: '#000000', fontWeight: '600', fontSize: '20px' }}>info@segmentenergo.ru</span></p>
                                <p>
                                    Возникли какие-то вопросы, не можете решить проблему или просто хотите поделиться мнением о нас — можете написать нам.
                                </p>
                            </div>
                            <div className='feedback-button-container'>
                                <Link>
                                    <Button bsPrefix='feedback-button'>Написать нам</Button>
                                </Link>
                            </div>
                        </Row>
                        {/* <div className='contacts-page-info'>
                            <p>
                                <span style={{ color: '#E74137', textTransform: 'uppercase', fontSize: '24px' }}>ОАО «БЕЛАРУСКАБЕЛЬ»</span>
                            </p>

                            <span style={{ color: '#343753', fontWeight: '600', fontSize: '24px' }}>Офис</span>
                            <p>
                                Республика Беларусь, г. Мозырь, 247760, ул. Октябрьская 14
                                +375-236-37-25-75
                            </p>

                            <span style={{ color: '#343753', fontWeight: '600', fontSize: '24px' }}>Фирменный магазин</span>
                            <p>
                                Республика Беларусь, г. Мозырь, 247760, ул. Октябрьская 14
                                +375-236-37-25-75
                            </p>

                            <p>Email: <span style={{ color: '#000000', fontWeight: '600', fontSize: '20px' }}>info@segmentenergo.ru</span></p>
                            <p>
                                Возникли какие-то вопросы, не можете решить проблему или просто хотите поделиться мнением о нас — можете написать нам.
                            </p>
                        </div>
                        <div className='feedback-button-container'>
                            <Link>
                                <Button bsPrefix='feedback-button'>Написать нам</Button>
                            </Link>
                        </div> */}
                    </Col>
                    <Col>
                        <Row>
                            <Image className='map-image' src='map2.png' alt='image' />
                        </Row>
                        {/* <Image className='map-image' src='map2.png' alt='image' /> */}
                    </Col>
                </Row>
            </div>
        </>
    )
}