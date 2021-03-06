import './Admin.css';
import react, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, InputGroup, FormControl, Modal, Tab, Tabs, CloseButton, Badge } from 'react-bootstrap';

let propsList = [];
let colors = [
    'rgb(236, 199, 204)',
    'rgb(199, 216, 236)',
    'rgb(199, 236, 204)',
    'rgb(238, 232, 169)',
    'rgb(195, 169, 238)',
    'rgb(131, 224, 224)'
];

export default function Admin() {
    const [modalProps, setModalProps] = useState(false);
    const [properties, setProperties] = useState(propsList);
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        console.log('Updated property list:');
        properties.map((item) => {
            console.log(`id: ${item.id} | property: ${item.prop}`);
        })
    })

    function deleteProp(id) {
        propsList.map((item) => {
            if (item.id == id) {
                propsList.splice(propsList.indexOf(item), 1);
            }
        })
    }

    function ItemsList() {
        return (
            <Row sm={3} className='items-list-container' style={{ width: '100%' }}>
                {properties.map((item) => (
                    <Col>
                        <div id={item.id} style={{ backgroundColor: item.backgroundColor }} className='prop-item'>
                            <span>{item.prop}</span><CloseButton
                                onClick={
                                    () => {
                                        deleteProp(item.id);
                                        if(!update){
                                            setUpdate(true)
                                        }
                                        else{
                                            setUpdate(false)
                                        }
                                    }
                                }
                                className='prop-item-close' />
                        </div>
                    </Col>
                ))}
                <dib>{update}</dib>
            </Row>
        )
    }

    function ModalAddProps(props) {
        return (
            <Modal style={{ zIndex: '100000' }}
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header id='closeBut' className='authorize-close-button' closeButton></Modal.Header>
                <Modal.Body className='authorize-window-body'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control id='productProp' size='lg' type="text" placeholder="?????????????? ???????????????????????????? ????????????" />
                        </Form.Group>
                        <div className='authorize-button-container'>
                            <Button className='authorize-button' variant="primary"
                                onClick={
                                    () => {
                                        let value = document.getElementById('productProp').value;
                                        let propObj = {
                                            id: propsList.length,
                                            prop: value,
                                            backgroundColor: colors[Math.floor(Math.random() * colors.length)]
                                        }
                                        propsList.push(propObj);
                                        setProperties(propsList);
                                        setModalProps(false);
                                    }
                                }
                                type="button"
                            >
                                ????
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }

    return (
        <>
            <div className='admin-page-container'>

                <Tabs defaultActiveKey="add" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="add" title="????????????????????">
                        <div className='add-product-container'>
                            {/* add product with all fields */}
                            <div className='add-product-section'>
                                <span className='commonLabels'>???????????????????? ????????????</span>
                                <Form className='add-product-form'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <br></br>
                                        <Form.Control type="text" placeholder="?????? ????????????" />
                                        <br></br>
                                        <Form.Control type="text" placeholder="???????????????? ????????????????" />
                                        <br></br>
                                        <Form.Control type="text" placeholder="???????????????????? ????????????" />
                                        <br></br>
                                        <Form.Control type="text" placeholder="?????????????????????? ????????????" />
                                        <br></br>
                                        <Form.Control type="text" placeholder="???????????????? ????????????" />
                                        <br></br>
                                        <Form.Control type="text" placeholder="???????????????????????????? ????????????" />
                                        <br></br>
                                        <Form.Control type="text" placeholder="???????????????? ????????????????" />
                                        <br></br>
                                        <Form.Control type="text" placeholder="???????????????? ????????????????" />
                                        <br></br>
                                        <Form.Control type="text" placeholder="?? ??????????????? (????/??????)" />
                                        <br></br>
                                        <br></br>
                                        <div>
                                            <Form.Label>?????????????????????? ????????????????????????????</Form.Label>
                                            <br></br>
                                            <h4>?????????????? ???? ???????????? ?????? ???????????????????? ?????????? ???????????????????????????? ????????????</h4>
                                            <br></br>
                                            <Button className='add-properties-button' onClick={() => setModalProps(true)}>
                                                +
                                            </Button>
                                            <ItemsList />
                                            <ModalAddProps
                                                show={modalProps}
                                                onHide={() => setModalProps(false)}
                                            />
                                        </div>
                                        <br></br>
                                        <Form.Control type="text" placeholder="???????????????????????? ?????????? ????????????" />
                                        <br></br>
                                        <Form.Control type="text" placeholder="???????????????? ?????????????? ????????????????????" />
                                        <br></br>
                                        <Form.Control type="text" placeholder="???????? ???????????? ????????????" />
                                        <br></br>
                                        <Form.Control type="text" placeholder="?????????????????????? ???????? ????????????????????????" />

                                    </Form.Group>
                                    <Button style={{ marginTop: '20px', width: '300px', height: '50px' }} variant="primary" type="submit">
                                        ????????????????
                                    </Button>
                                    <br></br>
                                    <br></br>
                                </Form>
                            </div>

                            {/* add category only */}
                            <div className='add-category-section'>
                                <span className='commonLabels'>???????????????????? ??????????????????</span>
                                <Form className='add-category-form'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="?????????????? ?????? ??????????????????" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        ????????????????
                                    </Button>
                                </Form>
                            </div>
                            {/* add industry only */}
                            <div className='add-industry-section'>
                                <span className='commonLabels'>???????????????????? ??????????????</span>
                                <Form className='add-industry-form'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="?????????????? ?????? ??????????????" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        ????????????????
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="edit" title="????????????????????????????">
                        <span className='commonLabels'>????????????????????????????</span>
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
                    <Tab eventKey="delete" title="????????????????">
                        <span className='commonLabels'>????????????????</span>
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