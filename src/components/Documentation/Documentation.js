import './Documentation.css'
import { Row, Col, Breadcrumb} from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Documentation() {
    return (
        <>
            <div className='documentation-page-container'>
                <Breadcrumb className='custom-breadcrumb' style={{ marginTop: '38px' }}>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item href="/">Компания</Breadcrumb.Item>
                    <Breadcrumb.Item active>Нормативная документация</Breadcrumb.Item>
                </Breadcrumb>
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