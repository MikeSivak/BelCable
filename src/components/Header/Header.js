import Styles from './Header.css';
import React from 'react';
import { Nav, Navbar, Container, Dropdown, Modal, Button, Form, Tabs, Tab } from 'react-bootstrap';

export default function Header() {
    const [modalShow, setModalShow] = React.useState(false);

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

    return (

        <>
            <div className="banner">
                <div className='row'>
                    <div className='col-md logo'>
                        <img height='37px' width='309px' src='lbl.png' />
                    </div>
                    <div className='col-md'>
                        Производство кабельной продукции c 1959 года
                    </div>
                    <div className='col-md sectionReception'>
                        <div className='row'>Приёмная</div>
                        <div className='row boldText phones'>+375-236-24-77-29</div>
                    </div>
                    <div className='col-md sectionSales'>
                        <div className='row'>Отдел продаж</div>
                        <div className='row boldText phones'>800 123 12 12</div>
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

                                    <Dropdown.Menu style={{ background: '#EBEEF2' }}>
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
                                <Dropdown>
                                    <Dropdown.Toggle bsPrefix='company-button' id="dropdown-basic">
                                        ПРОИЗВОДСТВО
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu style={{ background: '#EBEEF2' }}>
                                        <Dropdown.Item href="/qualitypolicy">
                                            Политика качества
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="/production">
                                            Испытательный центр
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/products">ПРОДУКЦИЯ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">ЗАКАЗЧИКАМ</Nav.Link>
                            </Nav.Item>
                            {/* <Nav.Item>
                                <Nav.Link href="#">ПРОЕКТНЫМ ИНСТИТУТАМ</Nav.Link>
                            </Nav.Item> */}
                            <Nav.Item>
                                <Dropdown>
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