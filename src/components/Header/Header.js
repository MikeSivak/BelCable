import Styles from './Header.css';
import { Nav, Navbar, Container, Dropdown } from 'react-bootstrap';

export default function Header() {
    return (

        <>
            <div className="banner">
                <div className='row'>
                    <div className='col-md logo'>
                        <img height='37px' width='309px' src='lbl.png' />
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
                                <img height="51px" width="51px" src="gerb1.png" />
                                <img height="51px" width="51px" src="gerb.png" />
                                <div className='col-sm-10 boldText'>
                                    Министерство Промышленности Республики Беларусь
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Navbar expand="lg" className='header-nav' style={{ background: '#EBEEF2' }}>
                <Container>
                    <Navbar.Toggle aria-controls="navbars" />
                    <Navbar.Collapse id="navbars">
                        <Nav className='w-100 justify-content-between'>
                            <Nav.Item>
                                <Dropdown>
                                    <Dropdown.Toggle bsPrefix='company-button' id="dropdown-basic">
                                        КОМПАНИЯ
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu style={{background:'#EBEEF2'}}>
                                        <Dropdown.Item href="/history">
                                            История
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="/management">
                                            Руководство
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/production">ПРОИЗВОДСТВО</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/products">ПРОДУКЦИЯ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">ЗАКАЗЧИКАМ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">ПРОЕКТНЫМ ИНСТИТУТАМ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/projects">РЕАЛИЗОВАННЫЕ ПРОЕКТЫ</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar expand="lg" className='header-nav' style={{ background: '#CDDBEC' }}>
                <Container>
                    <Navbar.Toggle aria-controls="navbars" />
                    <Navbar.Collapse id="navbars">
                        <Nav className='w-100 justify-content-between'>
                            <Nav.Item>
                                <Nav.Link href="/clients">НАШИ КЛИЕНТЫ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/reviews">ОТЗЫВЫ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/presscenter">ПРЕСС-ЦЕНТР</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/awards">НАШИ НАГРАДЫ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">КЛИЕНТАМ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/contacts">КОНТАКТЫ</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}