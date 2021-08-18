import './Certificates.css'
import { Row, Col, Image } from 'react-bootstrap'

export default function Certificates() {
    return (
        <>
            <div className='certificates-page-container'>
                <div className='certificates-page-label'>
                    Сертификаты
                </div>
                <Row className='certificates-page-row'>
                    <Row md={3}>
                        <Col>
                            <Image className='certificates-page-image' src='c1.png' alt='image' />
                        </Col>
                        <Col>
                            <Image className='certificates-page-image' src='c2.png' alt='image' />
                        </Col>
                        <Col>
                            <Image className='certificates-page-image' src='c3.png' alt='image' />
                        </Col>
                    </Row>
                    <Row md={3}>
                        <Col>
                            <Image className='certificates-page-image' src='c4.png' alt='image' />
                        </Col>
                        <Col>
                            <Image className='certificates-page-image' src='c5.png' alt='image' />
                        </Col>
                        <Col>
                            <Image className='certificates-page-image' src='c6.png' alt='image' />
                        </Col>
                    </Row>
                </Row>
            </div>
        </>
    )
}