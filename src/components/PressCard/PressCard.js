import './PressCard.css'
import { Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function PressCard() {
    return (
        <>
            <div className='press-card-page-conteiner'>
                <div className='press-card-page-label'>
                    Пресс-центр
                </div>
                <Row className='press-card-page-row'>
                    <Col className='press-card-page-col'>
                        <Row>
                            <p>05.07.2021</p>
                            <p><span className='press-card-name'>ЭТО НАШ ПРАЗДНИК!</span></p>
                            <p className='press-card-info-text'>
                                3 июля 2021 г. работники ОАО «Беларускабель» приняли участие в шествии  трудовых коллективов Мозырского района на центральной площади В.И.Ленина в рамках торжественного открытия мероприятий, посвященных Дню Независимости Республики Беларусь и 77-й годовщине освобождения Республики Беларусь от немецко-фашистских захватчиков.
                                Колонна трудового коллектива и транспортное средство были празднично оформлены с использованием государственной и заводской символики. Были представлены и образцы выпускаемой продукции. Во время мероприятия поддерживалась атмосфера праздника и единства. По-другому быть не может, ведь 3 июля – это наш праздник!
                            </p>
                            <Link to='#'>
                                <Button bsPrefix='all-news'>Все новости</Button>
                            </Link>
                        </Row>
                    </Col>
                    <Col md={6} className='press-card-page-col'>
                        <Row>
                            <Image className='press-card-photo' src='pc1.png' alt='photo' />
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    );
}