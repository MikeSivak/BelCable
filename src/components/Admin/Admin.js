import './Admin.css';
import { Form, Button, Row, Col, InputGroup, FormControl, Tab, Tabs } from 'react-bootstrap';

export default function Admin() {
    return (
        <>
            <div className='admin-page-container'>

                <Tabs defaultActiveKey="add" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="add" title="Добавление">
                        <span className='action-label'>Добавление</span>
                        <div className='add-product-container'>
                            {/* add product with all fields */}
                            <div className='add-product-section'>

                            </div>
                            {/* add category only */}
                            <div className='add-category-section'>

                            </div>
                            {/* add industry only */}
                            <div className='add-industry-section'>

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