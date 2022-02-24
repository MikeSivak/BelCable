import './Contacts.css'
import { Row, Col, Image, Button, Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { YMaps, Map, ZoomControl, TypeSelector, Placemark } from 'react-yandex-maps'

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
                                <hr></hr>
                                <p>
                                    <span style={{ color: '#343753', fontWeight: '600', fontSize: '24px' }}>Офис</span>
                                </p>
                                <p>
                                    Республика Беларусь, г. Мозырь, 247760, ул. Октябрьская 14
                                    +375-236-37-25-75
                                </p>
                                <p>
                                    <span style={{ color: '#343753', fontWeight: '600', fontSize: '24px' }}>Приёмная</span>
                                </p>
                                <p>
                                    <span style={{ color: 'black', fontWeight: '600', fontSize: '24px' }}>Бондарчук Александра Николаевна</span>
                                </p>
                                <p>
                                    +375-236-24-77-29 (приемная)
                                </p>
                                <p>
                                    +375-236-25-42-80 (факс)
                                </p>
                                <hr></hr>
                                <p>
                                    <span style={{ fontWeight: '600', color: '#343753' }}>Email:</span> <span style={{ color: '#000000', fontWeight: '600', fontSize: '20px' }}>vc@belaruskabel.by</span>
                                </p>
                                <p>
                                    Возникли какие-то вопросы, не можете решить проблему или просто хотите поделиться мнением о нас — можете написать нам.
                                </p>
                                <hr></hr>
                                <p>
                                    <span style={{ color: '#343753', fontWeight: '600', fontSize: '24px' }}>Время работы</span>
                                </p>
                                <p>Пн – Чт: 08:00–17:00, обед 12:45–13:30</p>
                                <p>Пт: 08:00–15:45, обед 12:45–13:30</p>
                                <p>Сб, Вс: выходной</p>
                                <hr></hr>
                                <p>
                                    <span style={{ color: '#343753', fontWeight: '600', fontSize: '24px' }}>Фирменный магазин</span>
                                </p>
                                <p>
                                    <p>время работы: </p>
                                </p>
                                <p>вторник-пятница c 9:00 до 18:00 (обед 14:30-15:30)</p>
                                <p>суббота c 9:00 до 15:00</p>
                                <p>воскресенье, понедельник - выходной</p>

                            </div>
                            <hr></hr>
                            <div className='feedback-button-container'>
                                <Link>
                                    <Button bsPrefix='feedback-button'>Написать нам</Button>
                                </Link>
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <YMaps>
                                <div>
                                    <Map width={'100%'} height={500} defaultState={{ center: [52.053695, 29.241805], zoom: 16, controls: [] }}>
                                        <ZoomControl options={{ float: 'right' }} />
                                        <TypeSelector options={{ float: 'right' }} />
                                        <Placemark geometry={[52.053695, 29.241805]} />
                                    </Map>
                                </div>

                            </YMaps>
                        </Row>
                    </Col>
                </Row>
            </div>
            <hr></hr>
            <div className='contacts-container'>
                <Row className='contacts-row'>
                    <span style={{ color: '#343753', fontWeight: '600', fontSize: '24px' }}>ДИРЕКЦИЯ</span>
                    <Row style={{ marginTop: '20px' }}>
                        <Col>
                            <Row>
                                <p>
                                    <span style={{ fontWeight: '700', fontSize: '18px' }}>Директор</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>Шилов Виталий Петрович</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-24-77-29</span>
                                </p>
                            </Row>
                            <Row>
                                <p>
                                    <span style={{ fontWeight: '700', fontSize: '18px' }}>Главный инженер</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>Барановский Сергей Григорьевич</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-24-77-29</span>
                                </p>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <p>
                                    <span style={{ fontWeight: '700', fontSize: '18px' }}>Зам. директора по развитию</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>Фиранчук Дмитрий Николаевич</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-25-41-62</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>firanchuk@belaruskabel.by</span>
                                </p>
                            </Row>
                            <Row>
                                <p>
                                    <span style={{ fontWeight: '700', fontSize: '18px' }}>
                                        Заместитель директора по идеологической работе, кадрам и социальным вопросам
                                    </span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>Фещенко Светлана Леонидовна</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-25-42-24</span>
                                </p>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <p>
                                    <span style={{ fontWeight: '700', fontSize: '18px' }}>
                                        Зам. директора по снабжению и организации перевозок
                                    </span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>Камеш Владимир Александрович</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-25-41-14</span>
                                </p>
                            </Row>
                            <Row>
                                <p>
                                    <span style={{ fontWeight: '700', fontSize: '18px' }}>
                                        Главный бухгалтер
                                    </span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>Белько Анна Александровна</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-24-65-23</span>
                                </p>
                            </Row>
                        </Col>
                    </Row>
                </Row>
            </div>
            <hr></hr>
            <div className='contacts-container'>
                <Row className='contacts-row'>
                    <span style={{ color: '#343753', fontWeight: '600', fontSize: '24px' }}>ОТДЕЛ ПРОДАЖ</span>
                    <Row style={{ marginTop: '20px' }}>
                        <Col>
                            <Row>
                                <p>
                                    <span style={{ fontWeight: '700', fontSize: '18px' }}>Зам начальника отдела продаж</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>Сигай Татьяна Сергеевна</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-24-28-32</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>zavod@belaruskabel.by</span>
                                </p>
                            </Row>
                            <Row>
                                <p>
                                    <span style={{ fontWeight: '700', fontSize: '18px' }}>Специалист по продаже</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>Черданцева Наталья Вячеславовна</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-25-23-69</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>sbyt5@belaruskabel.by</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>(группа кабелей КИПиА)</span>
                                </p>
                            </Row>
                            <Row>
                                <p>
                                    <span style={{ fontWeight: '700', fontSize: '18px' }}>
                                        Специалист по продаже
                                    </span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>Падалинский Андрей Леонидович</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-25-47-42</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-25-48-59</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>sbyt1@belaruskabel.by</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>(авиамонтажная группа)</span>
                                </p>
                            </Row>
                            <Row>
                                <p>
                                    <span style={{ fontWeight: '700', fontSize: '18px' }}>
                                        Специалист по продаже
                                    </span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>Колос Ирина Валентиновна</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-25-41-96</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>sbyt2@belaruskabel.by</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>(автотракторная группа и шнуры)</span>
                                </p>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <p>
                                    <span style={{ fontWeight: '700', fontSize: '18px' }}>Специалист по продаже</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>Ющенко Татьяна Владимировна</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>sbyt5@belaruskabel.by</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>(группа кабелей КИПиА)</span>
                                </p>
                            </Row>
                            <Row>
                                <p>
                                    <span style={{ fontWeight: '700', fontSize: '18px' }}>Специалист по продаже</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>Ляшенко Светлана Николаевна</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-25-47-42</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-24-45-23</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>sbyt3@belaruskabel.by</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>(группа силовой и контрольный кабель)</span>
                                </p>
                            </Row>
                            <Row>
                                <p>
                                    <span style={{ fontWeight: '700', fontSize: '18px' }}>
                                        Специалист по продаже
                                    </span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>Дульская Татьяна Михайловна</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-25-47-42</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-25-48-59</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>sbyt1@belaruskabel.by</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>(авиамонтажная группа)</span>
                                </p>
                            </Row>
                            <Row>
                                <p>
                                    <span style={{ fontWeight: '700', fontSize: '18px' }}>
                                        Специалист по продаже
                                    </span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>Гончаревич Наталья Владимировна</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-25-47-42</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-24-28-32</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>sbyt4@belaruskabel.by</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>(по кабелю связи и сигнально-блокировочная группа)</span>
                                </p>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <p>
                                    <span style={{ fontWeight: '700', fontSize: '18px' }}>Специалист по продаже</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>Кадол Ольга Александровна</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>sbyt5@belaruskabel.by</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375236254859</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>(группа кабелей КИПиА)</span>
                                </p>
                            </Row>
                            <Row>
                                <p>
                                    <span style={{ fontWeight: '700', fontSize: '18px' }}>Специалист по продаже</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>Щипер Нина Михайловна</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-25-47-42</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-24-45-23</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>sbyt3@belaruskabel.by</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>(группа силовой и контрольный кабель)</span>
                                </p>
                            </Row>
                            <Row>
                                <p>
                                    <span style={{ fontWeight: '700', fontSize: '18px' }}>
                                        Специалист по продаже
                                    </span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>Северина Наталья Сергеевна</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-25-41-96</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>sbyt2@belaruskabel.by</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>(авиамонтажная группа и шнуры)</span>
                                </p>
                            </Row>
                        </Col>
                    </Row>
                </Row>
            </div>
            <hr></hr>
            <div className='contacts-container'>
                <Row className='contacts-row'>
                    <span style={{ color: '#343753', fontWeight: '600', fontSize: '24px' }}>ОТДЕЛ МАТЕРИАЛЬНО-ТЕХНИЧЕСКОГО СНАБЖЕНИЯ</span>
                    <Row style={{ marginTop: '20px' }}>
                        <Col>
                            <Row>
                                <p>
                                    <span style={{ fontWeight: '700', fontSize: '18px' }}>Начальник отдела</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>Гололобов Сергей Львович</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-25-48-81</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-25-41-59</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>(факс)</span>
                                </p>
                            </Row>
                            <Row>
                                <p>
                                    <span style={{ fontWeight: '700', fontSize: '18px' }}>Группа химии</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>Леоненко Нина Григорьевна</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375 (236) 24-91-52</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-25-41-59</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>(факс)</span>
                                </p>
                            </Row>
                            <Row>
                                <p>
                                    <span style={{ fontWeight: '700', fontSize: '18px' }}>
                                        Группа комплектации
                                    </span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>Бородина Татьяна Анатольевна</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-24-63-88</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-25-41-59</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>(факс)</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>snab1@belaruskabel.by</span>
                                </p>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <p>
                                    <span style={{ fontWeight: '700', fontSize: '18px' }}>
                                        Заместитель начальника
                                    </span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>Ивахно Тамара Яковлевна</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-24-91-52</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-25-41-59</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>(факс)</span>
                                </p>
                            </Row>
                            <Row>
                                <p>
                                    <span style={{ fontWeight: '700', fontSize: '18px' }}>
                                        Группа металлов
                                    </span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>Гололобов Юрий Сергеевич</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-24-28-70</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-25-41-59</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>(факс)</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>omts@belaruskabel.by</span>
                                </p>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <p>
                                    <span style={{ fontWeight: '700', fontSize: '18px' }}>
                                        Группа комплектации
                                    </span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-24-63-88</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-25-41-59</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>(факс)</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>os3600252@yandex.by</span>
                                </p>
                            </Row>
                            <Row>
                                <p>
                                    <span style={{ fontWeight: '700', fontSize: '18px' }}>
                                        Группа металлов
                                    </span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>Тимошков Алексей Владимирович</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-24-28-70</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-25-41-59</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>(факс)</span>
                                    <br></br>
                                    <span style={{ fontWeight: '400', fontSize: '18px' }}>omts@belaruskabel.by</span>
                                </p>
                            </Row>
                        </Col>
                    </Row>
                </Row>
            </div>
            <hr></hr>
            <div className='contacts-container'>
                <Row className='contacts-row'>
                    <span style={{ color: '#343753', fontWeight: '600', fontSize: '24px' }}>ОТДЕЛ КАДРОВ</span>
                    <Row style={{ marginTop: '20px' }}>
                        <Col>
                            <p>
                                <span style={{ fontWeight: '700', fontSize: '18px' }}>
                                    Начальник отдела кадров
                                </span>
                                <br></br>
                                <span style={{ fontWeight: '400', fontSize: '18px' }}>Шилова Татьяна Анатольевна</span>
                                <br></br>
                                <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-24-08-03</span>
                            </p>
                        </Col>
                        <Col>
                            <p>
                                <span style={{ fontWeight: '700', fontSize: '18px' }}>
                                    Общий
                                </span>
                                <br></br>
                                <span style={{ fontWeight: '400', fontSize: '18px' }}>Щербин Светлана Ивановна</span>
                                <br></br>
                                <span style={{ fontWeight: '400', fontSize: '18px' }}>+375 (236) 37-25-66</span>
                            </p>
                        </Col>
                    </Row>
                </Row>
            </div>
            <hr></hr>
            <div className='contacts-container'>
                <Row className='contacts-row'>
                    <span style={{ color: '#343753', fontWeight: '600', fontSize: '24px' }}>БЮРО МАРКЕТИНГА</span>
                    <Row style={{ marginTop: '20px' }}>
                        <p>
                            <span style={{ fontWeight: '700', fontSize: '18px' }}>
                                Начальник бюро маркетинга                            </span>
                            <br></br>
                            <span style={{ fontWeight: '400', fontSize: '18px' }}>Мартинович Роман Валерьевич</span>
                            <br></br>
                            <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-21-07-55</span>
                            <br></br>
                            <span style={{ fontWeight: '400', fontSize: '18px' }}>+37529179-97-35</span>
                            <br></br>
                            <span style={{ fontWeight: '400', fontSize: '18px' }}>marketing@belaruskabel.by</span>
                        </p>
                    </Row>
                </Row>
            </div>
            <hr></hr>
            <div className='contacts-container'>
                <Row className='contacts-row'>
                    <span style={{ color: '#343753', fontWeight: '600', fontSize: '24px' }}>ЦЕНТРАЛЬНАЯ ЗАВОДСКАЯ ЛАБОРАТОРИЯ</span>
                    <Row style={{ marginTop: '20px' }}>
                        <p>
                            <span style={{ fontWeight: '700', fontSize: '18px' }}>
                                Начальник отдела
                            </span>
                            <br></br>
                            <span style={{ fontWeight: '400', fontSize: '18px' }}>Шульга Алексей Васильевич</span>
                            <br></br>
                            <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-24-55-97</span>
                            <br></br>
                            <span style={{ fontWeight: '400', fontSize: '18px' }}>czl@belaruskabel.by</span>
                        </p>
                    </Row>
                </Row>
            </div>
            <hr></hr>
            <div className='contacts-container'>
                <Row className='contacts-row'>
                    <span style={{ color: '#343753', fontWeight: '600', fontSize: '24px' }}>КАНЦЕЛЯРИЯ</span>
                    <Row style={{ marginTop: '20px' }}>
                        <p>
                            <span style={{ fontWeight: '700', fontSize: '18px' }}>
                                Начальник отдела
                            </span>
                            <br></br>
                            <span style={{ fontWeight: '400', fontSize: '18px' }}>Дубинина Людмила Сергеевна</span>
                            <br></br>
                            <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-25-42-80 (тел./факс)</span>
                            <br></br>
                            <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-22-95-48</span>
                        </p>
                    </Row>
                </Row>
            </div>
            <hr></hr>
            <div className='contacts-container'>
                <Row className='contacts-row'>
                    <span style={{ color: '#343753', fontWeight: '600', fontSize: '24px' }}>ПРОФКОМ</span>
                    <Row style={{ marginTop: '20px' }}>
                        <p>
                            <span style={{ fontWeight: '700', fontSize: '18px' }}>
                                Начальник отдела
                            </span>
                            <br></br>
                            <span style={{ fontWeight: '400', fontSize: '18px' }}>Председатель профкома</span>
                            <br></br>
                            <span style={{ fontWeight: '400', fontSize: '18px' }}>Чурило Николай Леонидович</span>
                            <br></br>
                            <span style={{ fontWeight: '400', fontSize: '18px' }}>+375-236-25-40-64</span>
                        </p>
                    </Row>
                </Row>
            </div>
            <div className='contacts-container'>
                <Row className='contacts-row'>
                    <span style={{ color: '#343753', fontWeight: '800', fontSize: '30px' }}>
                        ВЫШЕСТОЯЩАЯ ОРГАНИЗАЦИЯ
                    </span>
                    <Row style={{ marginTop: '40px' }}>
                        <p>
                            <span style={{ color: '#343753', fontWeight: '600', fontSize: '24px' }}>
                                МИНИСТЕРСТВО ПРОМЫШЛЕННОСТИ РЕСПУБЛИКИ БЕЛАРУСЬ
                            </span>
                        </p>
                        <p>
                            <span style={{ color: '#343753', fontWeight: '600', fontSize: '18px' }}>
                                Адрес: Партизанский проспект, 2, корп. 4. 220033, Республика Беларусь, г. Минск
                            </span>
                        </p>
                        <p>
                            <span style={{ color: '#343753', fontWeight: '600', fontSize: '18px' }}>
                                тел.: (+375 17) 223-93-96
                            </span>
                        </p>
                        <p>
                            <span style={{ color: '#343753', fontWeight: '600', fontSize: '18px' }}>
                                Канцелярия: (+375 17) 223-64-96
                            </span>
                        </p>
                        <p>
                            <span style={{ color: '#343753', fontWeight: '600', fontSize: '18px' }}>
                                факс: (+375 17) 328-30-48
                            </span>
                        </p>
                        <p>
                            <span style={{ color: '#343753', fontWeight: '600', fontSize: '18px' }}>
                                E-mail: minprom4@minprom.gov.by
                            </span>
                        </p>
                        <p>
                            <span style={{ color: '#343753', fontWeight: '600', fontSize: '18px' }}>
                                web-сайт: www.minprom.gov.by
                            </span>
                        </p>
                        <p>
                            <span style={{ color: '#343753', fontWeight: '600', fontSize: '18px' }}>
                                Режим работы: Ежедневно, кроме субботы и воскресенья с 9.00. до 18.00, обед с 13.00 до 14.00                            </span>
                        </p>
                    </Row>
                </Row>
            </div>
        </>
    )
}