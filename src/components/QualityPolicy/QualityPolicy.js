import './QualityPolicy.css'
import { Row, Col, Image, Breadcrumb } from 'react-bootstrap'

export default function QualityPolicy() {
    return (
        <>
            <div className='quality-page-container'>
                <Breadcrumb className='custom-breadcrumb' style={{ marginTop: '38px' }}>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item href="/">Компания</Breadcrumb.Item>
                    <Breadcrumb.Item active>Политика качества</Breadcrumb.Item>
                </Breadcrumb>
                <div className='quality-page-label'>
                    Политика качества
                </div>
                <div className='quality-page-info'>
                    <Row className='quality-page-row'>
                        <Col md={8}>
                            <Row>
                                <div className='quality-page-text'>
                                    Политика в области качества ориентирована на удовлетворение постоянно меняющегося потребительского спроса, требований к качеству продукции, на совершенствование технологий ее изготовления. Преимуществом предприятия является соответствие выпускаемой продукции существующим ГОСТ, ТУ, международным требованиям ISO 9001:2015, возможность гладко и оперативно приступить к выпуску продукции согласно предъявляемым требованиям заказчика.
                                    В ОАО «Беларускабель» с декабря 2000 года была внедрена и сертифицирована система качества разработки, производства и поставки кабельной продукции и потребительских товаров (шнуров армированных, вилок опрессованных, удлинителей) на базе международных стандартов серии ИСО 9000.
                                    В июле 2019 года организация успешно прошла ре-сертификацию на соответствие требованиям международного стандарта ISO 9001:2015 «Системы менеджмента качества. Требования». Сертификат на СМК №320513050/3 с 02.10.2019 по 01.10.2022 (DEKRA Certification GmbH  Германия).
                                </div>
                            </Row>
                        </Col>
                        <Col className='quality-image-section'>
                            <Image className='quality-page-images' src='cert1.png' alt='1.1.png' />
                        </Col>
                    </Row>
                    <Row className='quality-page-row'>
                        <Col className='quality-image-section'>
                            <Image className='quality-page-images' src='cert1.png' alt='1.1.png' />
                        </Col>
                        <Col md={8}>
                            <Row>
                                <div className='quality-page-text indentation-blocks'>
                                    В августе  2020 года организация успешно прошла ре-сертификацию на соответствие требованиям стандарта СТБ ISO 9001-2015 «Системы менеджмента качества. Требования» в Национальной системе подтверждения соответствия Республики Беларусь. Сертификат на СМК №BY/112 05.01. 012 10916 с 13.10.2020 до 13.10.2023. Выдан органом по сертификации систем менеджмента Республиканское унитарное предприятие «Калинковичский центр стандартизации, метрологии и сертификации» (РУП «Калинковичский ЦСМС»)
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='quality-page-row'>
                        <Col md={8}>
                            <Row>
                                <div className='quality-page-text indentation-blocks'>
                                    В организации действует сертифицированная система управления окружающей средой согласно требованиям СТБ ISO 14001-2017 «Системы управления окружающей средой. Требования». Получен сертификат № BY/112 06.01.021 00414 (от 03.09.2018 до 03.09.2021, первичная регистрация с 01.12.2006 года). Выдан Органом по сертификации систем управления окружающей средой филиала БНТУ «Научно-исследовательский политехнический институт».
                                </div>
                            </Row>
                        </Col>
                        <Col className='quality-image-section'>
                            <Image className='quality-page-images' src='cert1.png' alt='1.1.png' />
                        </Col>
                    </Row>
                    <Row className='quality-page-row'>
                        <Col className='quality-image-section'>
                            <Image className='quality-page-images' src='cert1.png' alt='1.1.png' />
                        </Col>
                        <Col md={8}>
                            <Row>
                                <div className='quality-page-text indentation-blocks'>
                                    В организации действует сертифицированная система управления охраной труда при производстве кабелей, проводов, шнуров, товаров народного потребления согласно требованиям СТБ 18001-2009 «Система управления охраной труда». Получен сертификат № BY/112 05.04.021 02058 (от 15.08.2018 до 15.08.2021). Выдан органом по сертификации продукции, услуг, систем управления «ПОЛИТЕХ-СЕРТ».
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}