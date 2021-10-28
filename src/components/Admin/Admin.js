import './Admin.css';
import { Form, Button, Row, Col, InputGroup, FormControl, Tab, Tabs } from 'react-bootstrap';

export default function Admin() {
    return (
        <>
            <div className='admin-page-container'>

                <Tabs defaultActiveKey="add" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="add" title="Добавление">
                        <div className='add-product-container'>
                            {/* add product with all fields */}
                            <div className='add-product-section'>
                                <span className='action-label'>Добавление товара</span>
                                <Form className='add-product-form'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <br></br>
                                        <Form.Control type="text" placeholder="Имя товара" />
                                        <br></br>
                                        <Form.Control type="text" placeholder="Описание оболочки" />
                                        <br></br>
                                        <Form.Control type="text" placeholder="Назначение товара" />
                                        <br></br>
                                        <Form.Control type="text" placeholder="Конструкция товара" />
                                        <br></br>
                                        <Form.Control type="text" placeholder="Материал трубки" />
                                        <br></br>
                                        <Form.Control type="text" placeholder="Характеристики экрана" />
                                        <br></br>
                                        <Form.Control type="text" placeholder="Материал изоляции" />
                                        <br></br>
                                        <Form.Control type="text" placeholder="Материал оболочки" />
                                        <br></br>
                                        <Form.Control type="text" placeholder="С экраном? (Да/Нет)" />
                                        <br></br>
                                        <br></br>
                                        <div>
                                            <Form.Label>Технические Характеристики</Form.Label>
                                            <br></br>
                                            <h4>Нажмите на кнопку для добавления новой характеристики товара</h4>
                                            <br></br>
                                            <Button style={{ borderRadius: '100%', height: '50px', width: '50px' }}>

                                            </Button>
                                        </div>
                                    </Form.Group>
                                    <Button style={{marginTop:'20px', width:'50%'}} variant="primary" type="submit">
                                        Добавить
                                    </Button>
                                    <br></br>
                                    <br></br>
                                </Form>
                            </div>
                            
                            {/* add category only */}
                            <div className='add-category-section'>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Добавить категорию</Form.Label>
                                        <Form.Control type="text" placeholder="Введите имя категории" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Добавить
                                    </Button>
                                </Form>
                            </div>
                            {/* add industry only */}
                            <div className='add-industry-section'>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Добавить отрасль</Form.Label>
                                        <Form.Control type="text" placeholder="Введите имя отрасли" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Добавить
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="edit" title="Редактирование">
                        <span className='action-label'>Редактирование</span>
                        <div className='edit-product-container'>
                            {/* edit product with all fields */}
                            <div className='edit-product-section'>

                            </div>
                            {/* edit category (category text field) only */}
                            <div className='edit-category-section'>

                            </div>
                            {/* edit industry (industry text field) only */}
                            <div className='edit-industry-section'>

                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="delete" title="Удаление">
                        <span className='action-label'>Удаление</span>
                        <div className='delete-product-container'>
                            {/* return list of all products with (while without search field) with delete button on items */}
                            <div className='delete-product-section'>

                            </div>
                            {/* return list of all categories with delete button on items */}
                            <div className='delete-category-section'>

                            </div>
                            {/* return list of all industries with delete button on items */}
                            <div className='delete-industry-section'>

                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}