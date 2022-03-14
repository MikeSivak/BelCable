import './QualityPolicy.css'
import { Row, Col, Image, Breadcrumb } from 'react-bootstrap'

export default function QualityPolicy() {
    return (
        <>
            <div className='quality-page-container'>
                <Breadcrumb className='custom-breadcrumb' style={{ marginTop: '38px' }}>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item href="/">Компания</Breadcrumb.Item>
                    <Breadcrumb.Item active>Система менеджмента и качества</Breadcrumb.Item>
                </Breadcrumb>
                <div className='commonLabels'>
                    СИСТЕМА МЕНЕДЖМЕНТА И КАЧЕСТВА
                </div>
                <div className='quality-page-info'>
                    <Row className='quality-page-row'>
                        <Col md={2} className='quality-image-section'>
                            <Image className='quality-page-images' src='f2a6ab1e5911edbf381fc707566255d4.jpg' alt='1.1.png' />
                        </Col>
                        <Col md={8}>
                            <Row>
                                <div className='quality-page-text'>
                                    В ОАО «Беларускабель» с декабря 2000 года была внедрена и сертифицирована система качества разработки, производства и поставки кабельной продукции и потребительских товаров (шнуров армированных, вилок опрессованных, удлинителей) на базе международных стандартов серии ИСО 9000.
                                    В июле 2019 года организация успешно прошла ре-сертификацию на соответствие требованиям международного стандарта ISO 9001:2015 «Системы менеджмента качества. Требования». Сертификат на СМК №320513050/3 с 02.10.2019 по 01.10.2022 (DEKRA Certification GmbH  Германия).
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='quality-page-row'>
                        <Col md={8}>
                            <Row>
                                <div className='quality-page-text indentation-blocks'>
                                    В августе  2020 года организация успешно прошла ре-сертификацию на соответствие требованиям стандарта СТБ ISO 9001-2015 «Системы менеджмента качества. Требования» в Национальной системе подтверждения соответствия Республики Беларусь. Сертификат на СМК №BY/112 05.01. 012 10916 с 13.10.2020 до 13.10.2023. Выдан органом по сертификации систем менеджмента Республиканское унитарное предприятие «Калинковичский центр стандартизации, метрологии и сертификации» (РУП «Калинковичский ЦСМС»)
                                </div>
                            </Row>
                        </Col>
                        <Col md={2} className='quality-image-section'>
                            <Image className='quality-page-images' src='bc19d7835d25e9017aa3496527d672f3.jpg' alt='1.1.png' />
                        </Col>
                    </Row>
                    <Row className='quality-page-row'>
                        <Col md={2} className='quality-image-section'>
                            <Image className='quality-page-images' src='a58a8a39443d0d844e7b6da3ea06059b.jpg' alt='1.1.png' />
                        </Col>
                        <Col md={8}>
                            <Row>
                                <div className='quality-page-text indentation-blocks'>
                                    В организации действует сертифицированная система управления окружающей средой согласно требованиям СТБ ISO 14001-2017 «Системы управления окружающей средой. Требования». Получен сертификат № BY/112 06.01.021 00414 (от 03.09.2018 до 03.09.2021, первичная регистрация с 01.12.2006 года). Выдан Органом по сертификации систем управления окружающей средой филиала БНТУ «Научно-исследовательский политехнический институт».
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='quality-page-row'>
                        <Col md={8}>
                            <Row>
                                <div className='quality-page-text indentation-blocks'>
                                    В организации действует сертифицированная система управления охраной труда при производстве кабелей, проводов, шнуров, товаров народного потребления согласно требованиям СТБ 18001-2009 «Система управления охраной труда». Получен сертификат № BY/112 05.04.021 02058 (от 15.08.2018 до 15.08.2021). Выдан органом по сертификации продукции, услуг, систем управления «ПОЛИТЕХ-СЕРТ».
                                </div>
                            </Row>
                        </Col>
                        <Col md={2} className='quality-image-section'>
                            <Image className='quality-page-images' src='Сертификат 45001 BY 112 05.04. 021.03 00017_1.jpg' alt='1.1.png' />
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}