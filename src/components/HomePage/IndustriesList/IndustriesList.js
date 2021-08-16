import './IndustriesList.css'
import { Row, Col, Image, Card } from 'react-bootstrap';

export default function IndustriesList() {
    return (
        <>
            <div className='industryLabel'>
                <p>ПО ОТРАСЛЯМ</p>
            </div>
            <Row xs={1} md={6} className="g-4 indList">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col>
                        <Card>
                            {/* <Card.Img variant="top" src="itemCable.png" roundedCircle/> */}
                            <Image src="itemCable.png" style={{ background: '#CDDBEC' }} roundedCircle />
                            <Card.Body>
                                <Card.Title>Энергетика</Card.Title>
                                <Card.Text>
                                    Продукция для строительства и реконструкции кабельных линий
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}