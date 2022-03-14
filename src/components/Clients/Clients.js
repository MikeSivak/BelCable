import './Clients.css'
import { Row, Col, Image, Breadcrumb } from 'react-bootstrap'

export default function Clients() {
    const clients = [
        'client01.png',
        'client02.png',
        'client03.png',
        'client04.png',
        'client05.png',
        'client06.png',
        'client07.png',
        'client08.png',
        'client09.png',
    ]
    return (
        <>
            <div className='clients-page-conteiner'>
                <Breadcrumb className='custom-breadcrumb' style={{ marginTop: '38px' }}>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item href="/">Компания</Breadcrumb.Item>
                    <Breadcrumb.Item active>Наши клиенты</Breadcrumb.Item>
                </Breadcrumb>
                <div className='commonLabels'>
                    Наши клиенты
                </div>
                <Row className='clients-page-row'>
                    {clients.map((client) => (
                        <Col className='clients-page-col'>
                            <Image className='client-image' src={client} alt='image' />
                        </Col>
                    ))
                    }
                </Row>
            </div>
        </>
    )
}