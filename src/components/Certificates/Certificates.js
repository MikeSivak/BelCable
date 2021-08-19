import './Certificates.css'
import { Row, Col, Image, Breadcrumb } from 'react-bootstrap'

export default function Certificates() {
    return (
        <>
            <div className='certificates-page-container'>
                <Breadcrumb className='custom-breadcrumb' style={{ marginTop: '38px' }}>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item href="/">Компания</Breadcrumb.Item>
                    <Breadcrumb.Item active>Сертификаты</Breadcrumb.Item>
                </Breadcrumb>
                <div className='certificates-page-label'>
                    Сертификаты
                </div>
                <div className='certificates-page-row-col'>
                    <Row md={3} className='certificates-page-image-list'>
                        <Col>
                            <Row>
                                <Image className='certificates-page-image' src='c1.png' alt='image' />
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Image className='certificates-page-image' src='c2.png' alt='image' />
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Image className='certificates-page-image' src='c3.png' alt='image' />
                            </Row>
                        </Col>
                    </Row>
                    <Row md={3} className='certificates-page-image-list'>
                        <Col>
                            <Row>
                                <Image className='certificates-page-image' src='c4.png' alt='image' />
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Image className='certificates-page-image' src='c5.png' alt='image' />
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Image className='certificates-page-image' src='c6.png' alt='image' />
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}