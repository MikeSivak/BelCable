import './Management.css'
import { Row, Col, Image, Card, Breadcrumb } from 'react-bootstrap';

export default function Management() {

    const management = [
        {
            name: 'Шилов Виталий Петрович',
            info: 'Директор ОАО «Беларускабель»',
            phone: '+375-236-24-77-29',
            email: '',
            photo: '1human.png',
        },
        {
            name: 'Фиранчук Дмитрий Николаевич',
            info: 'Зам. директора по развитию',
            phone: '375-236-25-41-62',
            email: 'firanchuk@belaruskabel.by',
            photo: '2human.png',
        },
        {
            name: 'Камеш Владимир Александрович',
            info: 'Зам. директора по снабжению и организации перевозок',
            phone: '+375-236-25-41-14',
            email: '',
            photo: '3human.png',
        },
        {
            name: 'Барановский Сергей Григорьевич',
            info: 'Главный инженер',
            phone: '+375-236-25-23-04',
            email: '',
            photo: '4human.png',
        },
        {
            name: 'Фещенко Светлана Леонидовна',
            info: 'Заместитель директора по идеологической работе, кадрам и социальным вопросам',
            phone: '+375-236-25-42-24',
            email: '',
            photo: '5human.png',
        },
        {
            name: 'Белько Анна Александровна',
            info: 'Главный бухгалтер',
            phone: '+375-236-24-65-23',
            email: '',
            photo: '6human.png',
        },
    ]
    return (
        <>
            <div className='management-page-container'>
                <Breadcrumb className='custom-breadcrumb' style={{ marginTop: '38px' }}>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item href="/">Компания</Breadcrumb.Item>
                    <Breadcrumb.Item active>Руководство</Breadcrumb.Item>
                </Breadcrumb>
                <div className='management-page-label'>
                    Руководство
                </div>
                <Row md={3} className='management-page-row'>
                    {management.map((human) => (
                        <Col className='management-page-col'>
                            <Card className='human'>
                                <Card.Img className='human-photo' variant="top" src={human.photo} alt='photo' />
                                <Card.Body>
                                    <Card.Title><span className='human-name'>{human.name}</span></Card.Title>
                                    <Card.Text>
                                        <p>{human.info}</p>
                                        <p>{human.phone}</p>
                                        <p>{human.email}</p>
                                    </Card.Text>
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