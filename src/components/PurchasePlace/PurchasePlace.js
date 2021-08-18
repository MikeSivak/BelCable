import './PurchasePlace.css'
import { Row, Col, Image } from 'react-bootstrap'

export default function PurchasePlace() {
    return (
        <>
            <div className='place-page-container'>
                <div className='place-page-label'>
                    Где купить
                </div>
                <Row className='place-page-row'>
                    <Col>
                        <div className='place-page-info'>

                            <span style={{ color: '#E74137', textTransform: 'uppercase', fontSize: '24px' }}>ОАО «БЕЛАРУСКАБЕЛЬ»</span>
                            <p>
                                Республика Беларусь, г. Мозырь, 247760, ул. Октябрьская 14
                            </p>

                            <span style={{ color: '#343753', fontWeight: '600', fontSize: '24px' }}>Фирменный магазин</span>
                            <p>
                                время работы:
                                вторник-пятница c 9:00 до 18:00 (обед 14:30-15:30)
                                суббота c 9:00 до 15:00
                                воскресенье, понедельник - выходной
                                +375-236-37-25-75
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <Image className='place-page-image' src='map.png' alt='image' />
                    </Col>
                </Row>
            </div>
        </>
    )
}