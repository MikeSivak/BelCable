import Styles from './Header.css';
import { useState } from 'react';
import { Nav, Navbar, Container, Dropdown, Modal, Button, Form, Tabs, Tab, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal style={{ zIndex: '100000' }}
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className='authorize-close-button' closeButton></Modal.Header>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" variant='pills' className="mb-3 authorize-tabs">
                <Tab eventKey="home" title="Авторизация">
                    <Modal.Body className='authorize-window-body'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control size='lg' type="email" placeholder="E-mail" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control size='lg' type="password" placeholder="Пароль" />
                            </Form.Group>
                            <div className='authorize-button-container'>
                                <Button className='authorize-button' variant="primary" type="submit">
                                    Авторизация
                                </Button>
                            </div>
                        </Form>
                    </Modal.Body>


                </Tab>
                <Tab eventKey="profile" title="Регистрация">
                    <Modal.Body className='authorize-window-body'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control size='lg' type="text" placeholder="Имя" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control size='lg' type="text" placeholder="Наименование компания" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control size='lg' type="number" placeholder="Телефон" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control size='lg' type="email" placeholder="E-mail" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control size='lg' type="password" placeholder="Пароль" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control size='lg' type="password" placeholder="Повторите пароль" />
                            </Form.Group>
                            <div className='authorize-button-container'>
                                <Button className='authorize-button' variant="primary" type="submit">
                                    Регистрация
                                </Button>
                            </div>
                        </Form>
                    </Modal.Body>
                </Tab>
            </Tabs>
        </Modal>
    );
}

export default function Header() {
    const [modalShow, setModalShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

    const showDropdown1 = (e) => {
        setShow1(!show1);
    }
    const showDropdown2 = (e) => {
        setShow2(!show2);
    }
    const showDropdown3 = (e) => {
        setShow3(!show3);
    }
    const showDropdown4 = (e) => {
        setShow4(!show4);
    }
    const hideDropdown = e => {
        setShow1(false);
        setShow2(false);
        setShow3(false);
        setShow4(false);
    }

    return (

        <>
            <div className="banner">
                <div className='row'>
                    <div className='col-md logo'>
                        <NavLink href='/'>
                            <img height='37px' width='309px' src='lbl.png' />
                        </NavLink>
                    </div>
                    <div className='col-md logotext'>
                        Производство кабельной продукции c 1959 года
                    </div>
                    <div className='col-md sectionReception logotext'>
                        <div className='row'>Приёмная</div>
                        <div className='row boldText phones'>+375-236-24-77-29</div>
                        <p></p>
                        <div className='row'>Отдел продаж</div>
                        <div className='row boldText phones'>+375-236-24-45-23</div>
                    </div>
                    <div className='col-md sectionSales logotext'>
                        <div className='row'>Email</div>
                        <div className='row boldText'>zavod@belaruskabel.by</div>
                        <div className='row boldText'>marketing@belaruskabel.by</div>
                    </div>
                    <div className='col-md'>
                        <Button className='profile-button' variant="link" onClick={() => setModalShow(true)}>
                            Личный кабинет
                        </Button>

                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div>
                    <div className='col-md iconsInfo'>
                        <div className='row'>
                            <div className='icons'>
                                <div className='col-sm-10 boldText logotext'>
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
                                <Nav.Link href="/">ГЛАВНАЯ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/products">КАТАЛОГ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Dropdown
                                    id="production"
                                    show={show2}
                                    onMouseEnter={showDropdown2}
                                    onMouseLeave={hideDropdown}
                                >
                                    <Dropdown.Toggle href='/production' bsPrefix='company-button' id="dropdown-basic">
                                        ПРОИЗВОДСТВО
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu style={{ background: '#EBEEF2' }}>
                                        <Dropdown.Item href="/qualitypolicy">
                                            Менеджмент и маркетинг
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="/testing">
                                            Испытательный центр
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="/innovative">
                                            Инновационная продукция
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav.Item>
                            <Nav.Item>
                                <Dropdown
                                    id="company"
                                    show={show1}
                                    onMouseEnter={showDropdown1}
                                    onMouseLeave={hideDropdown}
                                >
                                    <Dropdown.Toggle bsPrefix='company-button' id="dropdown-basic">
                                        О КОМПАНИИ
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu style={{ background: '#EBEEF2' }}>
                                        <Dropdown.Item href="/history">
                                            История
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="/management">
                                            Руководство
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="#">
                                            СМИ о нас
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="#">
                                            Фотогалерея
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="/clients">
                                            Наши клиенты
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="/reviews">
                                            Отзывы
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav.Item>
                            <Nav.Item>
                                <Dropdown
                                    id="design_institutes"
                                    show={show4}
                                    onMouseEnter={showDropdown4}
                                    onMouseLeave={hideDropdown}
                                >
                                    <Dropdown.Toggle bsPrefix='company-button' id="dropdown-basic">
                                        ПРОЕКТНЫМ ИНСТИТУТАМ
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu style={{ background: '#EBEEF2' }}>
                                        <Dropdown.Item href="/#">
                                            Электронный каталог
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="/cooperation">
                                            Предложение к сотрудничеству
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="/calc">
                                            Калькулятор кабеля
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/contacts">КОНТАКТЫ</Nav.Link>
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
                                <Nav.Link href="/presscenter">НОВОСТИ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Dropdown
                                    id="design_institutes"
                                    show={show3}
                                    onMouseEnter={showDropdown3}
                                    onMouseLeave={hideDropdown}
                                >
                                    <Dropdown.Toggle bsPrefix='company-button' id="dropdown-basic">
                                        ОБЩЕЕ
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu style={{ background: '#EBEEF2' }}>
                                        <Dropdown.Item href="/cooperation">
                                            Кооперация
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="#">
                                            Закупки импортного сырья
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="/#">
                                            Вакансии
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="/#">
                                            Расписание
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="/#">
                                            Противодействие коррупции
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="/#">
                                            Административные процедуры
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/#">Интернет-магазин</Nav.Link>
                            </Nav.Item>
                            {/* <Nav.Item>
                                <Nav.Link href="/projects">РЕАЛИЗОВАННЫЕ ПРОЕКТЫ</Nav.Link>
                            </Nav.Item> */}
                            {/* <Nav.Item>
                                <Nav.Link href="/clients">НАШИ КЛИЕНТЫ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/reviews">ОТЗЫВЫ</Nav.Link>
                            </Nav.Item> */}
                            <Nav.Item>
                                <Nav.Link href="/awards">НАШИ НАГРАДЫ</Nav.Link>
                            </Nav.Item>
                            {/* <Nav.Item>
                                <Nav.Link href="/contacts">КОНТАКТЫ</Nav.Link>
                            </Nav.Item> */}
                            
                            <Nav.Item>
                                <Nav.Link href="#">Инвесторам и акционерам</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}