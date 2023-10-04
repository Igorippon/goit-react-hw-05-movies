import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

export const List = styled.ul`
display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 30px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
width: 380px;
border-radius: 10px;
background-color:white;
transition: 0.5s;
&:hover {
  transform: translateY(-20px)  scale(0.9);
};
`;

export const Card = styled.div`
background-color: rgba(46, 47, 66, 0.05);
border-radius: 10px;
 box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const Div = styled.div`

padding: 20px;
`;

export const Title = styled.h4`
margin-top: 10px;
padding-left: 12px;
text-decoration:none;
color:rgba(17, 24, 39, 1);
white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: 0.5s;
`;

export const Paragr = styled.p`
margin-top: 10px;
padding-left: 12px;
padding-bottom:12px;
`;

export const CardLink = styled(NavLink)`
text-decoration:none;
`;

export const Img = styled.img`
padding: 4px;
border-radius: 10px 10px 0px 0px;
`;
