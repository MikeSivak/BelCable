import './Awards.css'
import { Row, Col, Image, Breadcrumb } from 'react-bootstrap'

export default function Awards() {
    return (
        <>
            <div className='awards-container'>
                <Breadcrumb className='custom-breadcrumb' style={{ marginTop: '38px' }}>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item href="/">Компания</Breadcrumb.Item>
                    <Breadcrumb.Item active>Наши награды</Breadcrumb.Item>
                </Breadcrumb>
                <div className='commonLabels'>
                    Наши награды
                </div>
                <div className='awards-info'>
                    <Row>
                        <Col md={8} className='awards-col-text'>
                            Наша продукция отмечена свидетельствами, грамотами и дипломами международных и региональных выставок, ярмарок и конкурсов последних лет, также заводу были неоднократно присуждены различные призы -  за качество,  положительный имидж,  за лучшую торговую марку.
                        </Col>
                        <Col style={{ textAlign: 'center' }}>
                            <Image src='award.png' alt='image' />
                        </Col>
                    </Row>
                    <Row>
                        <Col className='awards-col-text'>
                            <p>Согласно Постановлению от 3 апреля 2020 года №203 ОАО «Беларускабель» присуждена Премия Правительства РБ за достижения в области качества за 2020 год (на 3 года).</p>
                            <p>ОАО «Беларускабель» — единственный в Республике Беларусь кабельный завод, предоставляющий услуги по технической приемке продукции. На ОАО «Беларускабель» дислоцируется Техническая приемка №43 АО «РТ-Техприемка», специализированная организация Госкорпорации «Ростех» (ранее АО «Авиатехприемка») по оценке соответствия продукции в форме контроля качества и технической приемке, согласно Положению от 22.10.2007 «О порядке проведения контроля качества материалов и полуфабрикатов, используемых в производстве вооружения, военной, авиационной и специальной техники».</p>
                            <p>ОАО «Беларускабель» входит в состав организаций Ассоциации «Электрокабель», подписавших Декларацию качества, принятую на общем собрании 16 апреля 2008.</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}