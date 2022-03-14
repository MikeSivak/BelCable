import { Col, Row, Image, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import './LogoLinks.css'

export default function LogoLinks() {
    return (
        <>
            <div className="logo-links-container">
                <Row>
                    <Col>
                        <NavLink className="logo-links" href="https://president.gov.by/ru">
                            <Image src="herb1.png" alt="herb1.jpg" />
                            <br />
                            <br />
                            Интернет-портал Президента Республики Беларусь
                        </NavLink>
                    </Col>
                    <Col>
                        <NavLink className="logo-links" href="https://pravo.by/">
                            <Image src="herb1.png" alt="herb1.jpg" />
                            <br />
                            <br />
                            Национальный правовой интернет-портал Республики Беларусь
                        </NavLink>
                    </Col>
                    <Col>
                        <NavLink className="logo-links" href="http://www.mozyrisp.gov.by/ru">
                            <Image src="herb2.png" alt="herb1.jpg" />
                            <br />
                            <br />
                            Мозырский районный исполнительный комитет
                        </NavLink>
                    </Col>
                    <Col>
                        <NavLink className="logo-links" href="https://minprom.gov.by/">
                            <Image src="herb1.png" alt="herb1.jpg" />
                            <br />
                            <br />
                            Министерство промышленности Республики Беларусь
                        </NavLink>
                    </Col>
                </Row>
            </div>
            <hr></hr>
        </>
    )
}