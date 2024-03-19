import React from 'react';
import Header from '../components/header';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from '../components/footer';

const UserLayout = () => {
    return (
        <>
            <Header />
            <Container style={{ marginTop: '20px', minHeight: '90vh' }}>
                <Outlet />
            </Container>
            <Footer />
        </>
    );
};

export default UserLayout;
