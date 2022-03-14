import './Projects.css'
import { Row, Col, Card, Breadcrumb} from 'react-bootstrap'

export default function Projects() {

    const projects = [
        { name: 'Хоккейный центр СКА', city: 'г. Санкт-Петербург', image: 'ledovyiy_hokkeynyiy_tsentr_vityaz 1.png' },
        { name: 'Хоккейный центр СКА', city: 'г. Санкт-Петербург', image: 'ledovyiy_hokkeynyiy_tsentr_vityaz 1.png' },
        { name: 'Хоккейный центр СКА', city: 'г. Санкт-Петербург', image: 'ledovyiy_hokkeynyiy_tsentr_vityaz 1.png' },
        { name: 'Хоккейный центр СКА', city: 'г. Санкт-Петербург', image: 'ledovyiy_hokkeynyiy_tsentr_vityaz 1.png' },
        { name: 'Хоккейный центр СКА', city: 'г. Санкт-Петербург', image: 'ledovyiy_hokkeynyiy_tsentr_vityaz 1.png' },
        { name: 'Хоккейный центр СКА', city: 'г. Санкт-Петербург', image: 'ledovyiy_hokkeynyiy_tsentr_vityaz 1.png' },
    ]
    return (
        <>
            <div className='project-page-conteiner'>
                <Breadcrumb className='custom-breadcrumb' style={{ marginTop: '38px' }}>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item href="/">Компания</Breadcrumb.Item>
                    <Breadcrumb.Item active>Реализованные проекты</Breadcrumb.Item>
                </Breadcrumb>
                <div className='commonLabels'>
                    Реализованные проекты
                </div>
                <Row md={3} className='project-page-row'>
                    {projects.map((project) => (
                        <Col className='project-page-col'>
                            <Card className='project'>
                                <Card.Img className='project-photo' variant="top" src={project.image} alt='photo' />
                                <Card.Body>
                                    <Card.Title><span className='project-name'>{project.name}</span></Card.Title>
                                    <Card.Text>
                                        <p>{project.city}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                    }
                </Row>
            </div>
        </>
    )
}