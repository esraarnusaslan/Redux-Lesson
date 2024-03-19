import React from 'react';
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import { $t } from '../../helpers/locale-helper';

const Contact = () => {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d534.4469593452656!2d31.604133381035982!3d40.73367575641815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbe!4v1698763760757!5m2!1sen!2sbe"
                        width="100%"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="map"
                    ></iframe>
                </Col>
                <Col md={6}>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>{$t('name')}</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="name@example.com"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>{$t('email')}</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>{$t('message')}</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button>{$t('send')}</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
