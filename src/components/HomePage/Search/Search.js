import { Row, Col } from 'react-bootstrap'
import './Search.css'

export default function Search() {
    return (
        <>
            <div className='search-container'>
                <img className='search-image' src='search-img.png' alt='' />
                <Row className='search-inputs'>
                    <Col className='col-md-8'>
                        <input type='text' placeholder='Поиск по марке кабеля' className='seacrh-text-block'></input>
                    </Col>
                    <Col className='col-md-2'>
                        <button className='search-button' variant='danger'>Искать</button>
                    </Col>
                </Row>
            </div>
        </>
    )
}