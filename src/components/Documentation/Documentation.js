import './Documentation.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Documentation() {
    return (
        <>
            <div className='documentation-page-container'>
                <div className='documentation-page-label'>
                    Нормативная документация
                </div>
                <Row className='documentation-page-row'>
                    <Col>
                        <Link className='documentation-page-link' to='#'>Указания по прокладке и эксплуатации </Link>
                    </Col>
                    <Col>
                        <Link className='documentation-page-link' to='#'>Руководство по эксплуатации</Link>
                    </Col>
                    <Col>
                        <Link className='documentation-page-link' to='#'>Справочная документация по кабелям</Link>
                    </Col>
                </Row>
            </div>
        </>
    )
}