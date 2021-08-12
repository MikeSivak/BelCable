// import Styles from './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
    return (

        <>
            <Navbar expand="lg" style={{background:'#EBEEF2'}}>
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
            <Navbar expand="lg" style={{background:'#CDDBEC'}}>
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
        </>

        // <>
        //     <div className='headInfo'>
        //         <ul className='info'>
        //             <li>
        //                 <img className='companyLogo' src='https://images.wallpaperscraft.ru/image/dikie_tsvety_tsvety_pole_217762_1920x1080.jpg' alt='no'></img>
        //             </li>
        //             <li>
        //                 <ul className='contacts'>
        //                     <li>Приёмная</li>
        //                     <li className='phone'>+375-236-24-77-29</li>
        //                 </ul>
        //             </li>
        //             <li>
        //                 <ul className='contacts'>
        //                     <li>Отдел продаж</li>
        //                     <li className='phone'>800 123 12 12</li>
        //                 </ul>
        //             </li>
        //             <li>
        //                 <ul className='icons'>
        //                     <li><img src='https://images.wallpaperscraft.ru/image/dikie_tsvety_tsvety_pole_217762_1920x1080.jpg' alt='no'></img></li>
        //                     <li><img src='https://images.wallpaperscraft.ru/image/dikie_tsvety_tsvety_pole_217762_1920x1080.jpg' alt='no'></img></li>
        //                     <li className='icons-info'>
        //                         Минестерство Промышленности Республики Беларусь
        //                     </li>
        //                 </ul>
        //             </li>
        //         </ul>
        //     </div>
        //     <ul className='navigation'>
        //         <li><a href="#">КОМПАНИЯ</a></li>
        //         <li><a href="#">ПРОИЗВОДСТВО</a></li>
        //         <li><a href="#">ПРОДУКЦИЯ</a></li>
        //         <li><a href="#">ЗАКАЗЧИКАМ</a></li>
        //         <li><a href="#">ПРОЕКТНЫМ ИНСТИТУТАМ</a></li>
        //         <li><a href="#">РЕАЛИЗОВАННЫЕ ПРОЕКТЫ</a></li>
        //     </ul>
        //     <ul className='navigation' style={{ background: '#CDDBEC' }}>
        //         <li><a href="#">НАШИ КЛИЕНТЫ</a></li>
        //         <li><a href="#">ОТЗЫВЫ</a></li>
        //         <li><a href="#">ПРЕСС-ЦЕНТР</a></li>
        //         <li><a href="#">НАШИ НАГРАДЫ</a></li>
        //         <li><a href="#">КЛИЕНТАМ</a></li>
        //         <li><a href="#">КОНТАКТЫ</a></li>
        //     </ul>
        // </>
    )
}