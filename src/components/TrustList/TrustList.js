import './TrustList.css'
import { Carousel, Row, Col, Image } from 'react-bootstrap'

export default function TrustList() {
    return (
        <>
            <div className='trustLabel'>
                <p>НАМ ДОВЕРЯЮТ</p>
            </div>
            <Carousel className='trust' variant='dark'>
                <Carousel.Item interval={1000}>
                    <Row  xs={1} md={6} className="g-4 trustRow">
                        {Array.from({ length: 6 }).map((_, idx) => (
                            <Col>
                                <Image src="gazprom.png" />
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <Row xs={1} md={6} className="g-4 trustRow">
                        {Array.from({ length: 6 }).map((_, idx) => (
                            <Col>
                                <Image src="gazprom.png" />
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <Row xs={1} md={6} className="g-4 trustRow">
                        {Array.from({ length: 6 }).map((_, idx) => (
                            <Col>
                                <Image src="gazprom.png" />
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
            </Carousel>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </>
    )
}