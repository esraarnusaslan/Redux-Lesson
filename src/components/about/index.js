import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { $t } from '../../helpers/locale-helper';

const About = () => {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Image src="/images/about-us.png" className="img-fluid" />
                </Col>
                <Col md={8}>
                    <p>{$t('about-text')}</p>

                    <p>{$t('mission-text')}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
