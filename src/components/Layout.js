import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components'

const Wraper = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
margin: 0 auto;
padding-bottom:40px;
`;

const Styled = styled(NavLink)`
text-decoration: none;
font-size:24px;
font-weight:500;
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
border-radius: 8px;
margin-right:40px;
padding: 5px;
color:black;
    &.active {
        background-color:white;
        color: orange;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
  };
  &:hover{
    text-decoration:underline;
  }
`;

const Header = styled.header`
justify-content:center;
align-items:center;
height: 80px;
padding: 10px 0px;
background-color: rgba(46, 47, 66, 0.03);
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
`;

const Nav = styled.nav`
padding:0px 20px;
display:flex;
height:100%;
align-items:center;
`;

export const Layout = () => {
    return (
        <Wraper>
            <Header>
                <Nav>
                    <Styled to="/">Home</Styled>
                    <Styled to="/movies" end>Movies</Styled>
                </Nav>
            </Header>
            <Outlet />
        </Wraper>
    )
}