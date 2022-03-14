import './Testing.css'
import { Breadcrumb, Row, Col, Image, NavLink, Nav } from 'react-bootstrap'

export default function Testing() {
    return (
        <>
            <div className='testing-page-container'>
                <Breadcrumb className='custom-breadcrumb' style={{ marginTop: '38px' }}>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item href="/">Компания</Breadcrumb.Item>
                    <Breadcrumb.Item active>Испытание</Breadcrumb.Item>
                </Breadcrumb>
                <div className='commonLabels'>
                    Испытание
                </div>
                <div className='quality-page-info'>
                    <Row className='quality-page-row'>
                        <Col md={3} className='quality-image-section'>
                            <Image className='testing-page-images' src='foto1.jpg' alt='1.1.png' />
                        </Col>
                        <Col md={9}>
                            <Row>
                                <div className='quality-page-text'>
                                    Центральная заводская лаборатория ОАО «Беларускабель» (далее ЦЗЛ) соответствует критериям Национальной системы аккредитации Республики Беларусь и аккредитована на соответствие требованиям СТБ ИСО/МЭК 17025-2007 «Общие требования к компетентности испытательных и калибровочных лабораторий» (аттестат аккредитации BY/112 2.0981 от 28.05.1996, действ. до 05.03.2022).
                                    <p></p>
                                    <span style={{ textTransform: 'uppercase' }}>В ОБЛАСТИ АККРЕДИТАЦИИ ЦЗЛ СЛЕДУЮЩИЕ ИСПЫТАНИЯ:</span>
                                    <p></p>
                                    испытания кабельно-проводниковой продукции (стойкость к внешним воздействующим факторам, стойкость к механическим воздействиям, электрические испытания и измерения), в т.ч. на соответствие требованиям ТР ТС 004/2011 «О безопасности низковольтного оборудования»;

                                    анализ концентрации вредных веществ в воздухе рабочей зоны;

                                    замеры факторов производственной среды (относительная влажность, температура);

                                    замеры физических факторов (шум, освещенность).
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row className='quality-page-row'>
                        Здесь будут фото
                    </Row>
                    <hr></hr>
                    <br></br>
                    <br></br>
                    <Row className='quality-page-row'>
                        <div className='quality-page-text'>
                            Подробная информация об области аккредитации находится в реестре аккредитованных испытательных лабораторий на сайте Республиканского унитарного предприятия «Белорусский государственный центр аккредитации»:
                            <p></p>
                            <a href='https://bsca.by/ru/registry-testlab/view?id=1324' style={{ color: '#E74137' }}>https://bsca.by/ru/registry-testlab/view?id=1324</a>

                            <p></p>
                            По вопросам проведения испытаний обращаться:
                            <p></p>
                            начальник ЦЗЛ Шилова Полина Яковлевна
                            <p></p>
                            тел. (0236) 32-25-97; (044) 555-35-98
                            <p></p>
                            e-mail: <a href='mailto:czl@belaruskabel.by' style={{ color: '#E74137' }}>czl@belaruskabel.by</a>
                        </div>
                    </Row>
                </div>
            </div>
        </>
    )
}