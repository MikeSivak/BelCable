import Styles from './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';

export default function Header() {
    return (

        <>
            <div className="banner">
                <div className='row'>
                    <div className='col-md'>
                        <img height='37px' width='309px' src='https://wallpapers.com/wp-content/themes/wallpapers.com/src/Logo.svg' />
                    </div>
                    <div className='col-md sectionReception'>
                        <div className='row'>Приёмная</div>
                        <div className='row boldText phones'>+375-236-24-77-29</div>
                    </div>
                    <div className='col-md sectionSales'>
                        <div className='row'>Отдел продаж</div>
                        <div className='row boldText phones'>800 123 12 12</div>
                    </div>
                    <div className='col-md iconsInfo'>
                        <div className='row'>
                            <div className='icons'>
                                <img height="51px" width="51px" src="https://img.icons8.com/fluency/48/000000/walter-white.png" />
                                <img height="51px" width="51px" src="https://img.icons8.com/fluency/48/000000/mummy.png" />
                                <div className='col-sm-10 boldText'>
                                    Министерство Промышленности Республики Беларусь
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Navbar expand="lg" style={{ background: '#EBEEF2' }}>
                <Container>
                    <Navbar.Toggle aria-controls="navbars" />
                    <Navbar.Collapse id="navbars">
                        <Nav className='w-100 justify-content-between'>
                            <Nav.Item>
                                <Nav.Link href="#">КОМПАНИЯ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">ПРОИЗВОДСТВО</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">ПРОДУКЦИЯ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">ЗАКАЗЧИКАМ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">ПРОЕКТНЫМ ИНСТИТУТАМ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">РЕАЛИЗОВАННЫЕ ПРОЕКТЫ</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar expand="lg" style={{ background: '#CDDBEC' }}>
                <Container>
                    <Navbar.Toggle aria-controls="navbars" />
                    <Navbar.Collapse id="navbars">
                        <Nav className='w-100 justify-content-between'>
                            <Nav.Item>
                                <Nav.Link href="#">НАШИ КЛИЕНТЫ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">ОТЗЫВЫ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">ПРЕСС-ЦЕНТР</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">НАШИ НАГРАДЫ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">КЛИЕНТАМ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">КОНТАКТЫ</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}