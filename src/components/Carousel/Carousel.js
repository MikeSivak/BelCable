// import 'bootstrap';
import './Carousel.css'
// import { Navbar, Container, Nav } from 'react-bootstrap';

import Tabs, { TabPane } from 'rc-tabs';
import 'rc-tabs/assets/index.css';

export default function Carousel() {
    function callback(e) {
        console.log(e);
    }
    return (
        <>
            {/* <div className="App"> */}
            <Tabs defaultActiveKey="1" onChange={callback} tabPosition='bottom' tabBarGutter={100}>
                <TabPane tab="КАБЕЛИ ДЛЯ РЕЛЬСОВОГО ТРАНСПОРТА" key="1">
                    <img src='https://images.wallpaperscraft.com/image/fog_forest_path_125819_1366x768.jpg' />
                </TabPane>
                <TabPane tab="КАБЕЛИ И ПРОВОДА СВЯЗИ" key="2">
                    <img src='https://images.wallpaperscraft.com/image/trees_silhouettes_clouds_217936_1366x768.jpg' />
                </TabPane>
                <TabPane tab="КАБЕЛИ И ПРОВОДА МОНТАЖНЫЕ" key="3">
                    <img src='https://images.wallpaperscraft.com/image/trees_silhouettes_clouds_217936_1366x768.jpg' />
                </TabPane>
                <TabPane tab="КАБЕЛИ УПРАВЛЕНИЯ И ПЕРЕДАЧИ ДАННЫХ" key="4">
                    <img src='https://images.wallpaperscraft.com/image/trees_silhouettes_clouds_217936_1366x768.jpg' />
                </TabPane>
                <TabPane tab="КАБЕЛИ СИЛОВЫЕ" key="5">
                    <img src='https://images.wallpaperscraft.com/image/trees_silhouettes_clouds_217936_1366x768.jpg' />
                </TabPane>
                <TabPane tab="КАБЕЛИ И ПРОВОДА ДЛЯ СИГНАЛИЗАЦИИ И БЛОКИРОВКИ" key="6">
                    <img src='https://images.wallpaperscraft.com/image/trees_silhouettes_clouds_217936_1366x768.jpg' />
                </TabPane>
                <TabPane tab="КАБЕЛИ КОНТРОЛЬНЫЕ" key="7">
                    <img src='https://images.wallpaperscraft.com/image/trees_silhouettes_clouds_217936_1366x768.jpg' />
                </TabPane>
            </Tabs>
            {/* </div> */}

            {/* <div>
                <div>dgffgfgf</div>
                <Navbar bg="dark" variant="dark" fixed='middle'>
                    
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link target>Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div> */}

        </>
    )
}