import './PressCenter.css'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function PressCenter() {

    const pressInfo = [
        {
            id: 1,
            title: 'ЭТО НАШ ПРАЗДНИК!',
            date: '05.07.2021',
            image: 'pc1.png',
            text: '3 июля 2021 г. работники ОАО «Беларускабель» приняли участие в шествии  трудовых коллективов Мозырского района на центральной площади В.И.Ленина в рамках торжественного открытия мероприятий, посвященных Дню Независимости Республики Беларусь и 77-й годовщине освобождения Республики Беларусь от немецко-фашистских захватчиков.'
        },
        {
            id: 2,
            title: 'ОТКРЫТИЕ ФЛАГШТОКА',
            date: '05.07.2021',
            image: 'pc2.png',
            text: 'Ко Дню Независимости Республики Беларусь (Дню Республики) у центрального входа ОАО «Беларускабель» установлен уличный флагшток, на котором размещены флаги Республики Беларусь, города Мозыря и  ОАО «Беларускабель».'
        },
        {
            id: 3,
            title: 'ЭКСКУРСИОННАЯ ПОЕЗДКА',
            date: '28.06.2021',
            image: 'pc3.png',
            text: '26 июня, в рамках Года народного единства,  первичной профсоюзной организацией ОАО «Беларускабель» организована экскурсионная поездка по Гомельской области, приуроченная к 80-летию со Дня начала Великой Отечественной войны и 77-й годовщине освобождения Беларуси от немецко-фашистских захватчиков.'
        },
    ]
    return (
        <>
            <div className='press-center-page-conteiner'>
                <div className='press-center-page-label'>
                    Пресс-центр
                </div>
                <Row md={3} className='press-center-page-row'>
                    {pressInfo.map((info) => (
                        <Col className='press-center-page-col'>
                            <Card className='press-center'>
                                <Card.Img className='press-center-photo' variant="top" src={info.image} alt='photo' />
                                <Card.Body>
                                    <p>{info.date}</p>
                                    <Card.Title><span className='press-center-name'>{info.title}</span></Card.Title>
                                    <Card.Text>
                                        <p className='info-text'>{info.text}</p>
                                    </Card.Text>
                                    <Link to='/presscard'>
                                        <Button bsPrefix='read-button'>Читать</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                    }
                </Row>
            </div>
        </>
    )
}