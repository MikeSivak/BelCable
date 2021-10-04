import './SecondBanner.css'
import '../../../fonts/fonts.css'
import { Row, Col } from 'react-bootstrap';

export default function SecondBanner() {
    return (
        <>
            <div className="second-banner-container">
                <img className="second-banner-image" src="hpBanner2.jpeg" />
                <div className='second-banner-info'>
                    <Row>
                        <Col>
                            <Row className='second-banner-label'>Преимущества</Row>
                        </Col>
                    </Row>
                    <Row className='second-banner-common-grid'>
                        <Col>
                            <div>
                                <Row className='label-amount'>100 293</Row>
                                <Row className='label-value'>киллометров</Row>
                                <Row className='value-description'>кабельной продукции высокого качества реализовано в 2020 году</Row>
                            </div>
                            <div className='second-rows-section' style={{marginTop:'20px'}}>
                                <Row className='label-amount'>1859</Row>
                                <Row className='label-value'>тон</Row>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Row className='label-amount'>30 000</Row>
                                <Row className='label-value'>киллометров</Row>
                            </div>
                            <div className='second-rows-section' style={{marginTop:'50px'}}>
                                <Row className='label-amount'>683</Row>
                                <Row className='label-value'>сотрудников</Row>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Row className='label-amount'>345</Row>
                                <Row className='label-value'>модернизированного оборудования</Row>
                            </div>
                            <div className='second-rows-section' style={{marginTop:'30px'}}>
                                <Row className='label-amount'>867</Row>
                                <Row className='label-value'>инновационная продукция</Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}