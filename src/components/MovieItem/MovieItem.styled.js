import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Item = styled.div`
display: flex;
padding: 20px 0px;
gap: 30px;
background-color: rgba(46, 47, 66, 0.02);
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.0), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const Div = styled.div`
display:flex;
flex-direction: column;
gap:30px;
`;

export const Container = styled.div`
padding-left: 20px;
padding-right:20px;
`;

export const H3 = styled.h3`
margin-top: 20px
`;

export const Ul = styled.ul`
display:flex;
flex-direction:column;
gap:20px;
margin-bottom:20px;
`;

export const StyledLink = styled(NavLink)`
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &.active {
              color: orange;
    }
      &:hover{
    text-decoration:none;
  }
`;