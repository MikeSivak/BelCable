// import 'bootstrap';
import './Carousel.css'
// import Tabs, { TabPane } from 'rc-tabs';
// import 'rc-tabs/assets/index.css';

import { Carousel, Button } from "react-bootstrap"

export default function CustomCarousel() {
    // function callback(e) {
    //     console.log(e);
    // }
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    {/* <img
                        className="d-block w-100"
                        src="poezd.png"
                        alt="First slide"
                    /> */}
                    <a className="gradient" href="#">
                        <img className="d-block w-100 backPic" src="poezd.png" alt="" />
                    </a>
                    <img className="frontPic" src="cable1.png" alt=""/>
                    <Carousel.Caption>
                        <div>
                            <p>Кабели для внутренних и наружных соединений подвижного состава РЕЛЬСОВОГО ТРАНСПОРТА И ТРОЛЛЕЙБУСОВ</p>
                            <Button className='photoButton' variant="danger">Перейти</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <img
                        className="d-block w-100"
                        src="tower.png"
                        alt="Second slide"
                        style={{marginTop:'-7px'}}
                    /> */}
                    <a className="gradient" href="#"><img className="d-block w-100 backPic" src="tower.png" alt="" /></a>
                    <img className="frontPic" src="cable2.png" alt=""/>
                    <Carousel.Caption>
                        <div>
                            <p>КАБЕЛИ И ПРОВОДА СВЯЗИ</p>
                            <h5 style={{ maxWidth: '90%' }}>Для эксплуатации в местных первичных сетях связи с номинальным напряжением дистанционного питания до 225 В и 145</h5>
                            <Button className='photoButton' variant="danger">Перейти</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <img
                        className="d-block w-100"
                        src="pipes.png"
                        alt="Third slide"
                    /> */}
                    <a className="gradient" href="#"><img className="d-block w-100 backPic" src="pipes.png" alt="" /></a>
                    <img className="frontPic" style={{left:'20%', top:'22%'}} src="cable3.png" alt=""/>
                    <Carousel.Caption>
                        <div>
                            <p style={{ maxWidth: '50%' }}>КАБЕЛИ И ПРОВОДА МОНТАЖНЫЕ</p>
                            <Button className='photoButton' variant="danger">Перейти</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <img
                        className="d-block w-100"
                        src="network.png"
                        alt="First slide"
                    /> */}
                    <a className="gradient" href="#"><img className="d-block w-100 backPic" src="network.png" alt="" /></a>
                    <img className="frontPic" style={{left:'20%', top:'24%'}} src="cable4.png" alt=""/>
                    <Carousel.Caption>
                        <div>
                            <p style={{ maxWidth: '49%' }}>КАБЕЛИ УПРАВЛЕНИЯ И ПЕРЕДАЧИ ДАННЫХ</p>
                            <Button className='photoButton' variant="danger">Перейти</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <img
                        className="d-block w-100"
                        src="towerLines.png"
                        alt="First slide"
                    /> */}
                    <a className="gradient" href="#"><img className="d-block w-100 backPic" src="towerLines.png" alt="" /></a>
                    <img className="frontPic" style={{left:'12%', top:'18%'}} src="cable5.png" alt=""/>
                    <Carousel.Caption>
                        <div>
                            <p style={{ maxWidth: '49%' }}>КАБЕЛИ СИЛОВЫЕ</p>
                            <Button className='photoButton' variant="danger">Перейти</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <img
                        className="d-block w-100"
                        src="security.png"
                        alt="First slide"
                    /> */}
                    <a className="gradient" href="#"><img className="d-block w-100 backPic" src="security.png" alt="" /></a>
                    <img className="frontPic" style={{left:'20%', top:'18%'}} src="cable6.png" alt=""/>
                    <Carousel.Caption>
                        <div>
                            <p style={{ maxWidth: '80%' }}>КАБЕЛИ И ПРОВОДА ДЛЯ СИГНАЛИЗАЦИИ И БЛОКИРОВКИ</p>
                            <Button className='photoButton' variant="danger">Перейти</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a className="gradient" href="#"><img className="d-block w-100 backPic" src="control.png" alt="" /></a>
                    <img className="frontPic" style={{left:'20%', top:'18%'}} src="cable7.png" alt=""/>
                    <Carousel.Caption>
                        <div style={{ marginTop: '70px' }}>
                            <p>КАБЕЛИ КОНТРОЛЬНЫЕ</p>
                            <Button className='photoButton' variant="danger">Перейти</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    )
}