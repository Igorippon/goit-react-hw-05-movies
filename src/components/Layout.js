import { Outlet } from 'react-router-dom';
import { Header, Nav, Styled, Wraper } from './Layout.styled';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';

export const Layout = () => {
    return (
        <Wraper>
            <Header>
                <Nav>
                    <Styled to="/">Home</Styled>
                    <Styled to="/movies" end>Movies</Styled>
                </Nav>
            </Header>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </Wraper>
    )
}