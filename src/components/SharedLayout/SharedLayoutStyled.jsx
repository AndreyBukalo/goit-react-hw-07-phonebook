import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';
import  asideBgc  from '../../Images/asideBgc.jpg'
export const Container = styled.div`
  display: flex;
 width:100vw;
 height:100vh;

  
`;


export const SideBar = styled.aside`
  width: 160px;
  height: 100vh;
  display: flex;

  background-image:-webkit-gradient(linear, left top, right top, from(rgba(47, 48, 58, 0.9)), to(rgba(47, 48, 58, 0.9))), url(${asideBgc});
 
`;
  
 
export const LinkNav = styled(NavLink)`
  color: #e65252;
  text-decoration: none;
  font-size: 24px;
  display: block;
  margin-top: 50px;
  margin-left: 15px;
  transition: ease 1s;
  &:hover {
    transition: ease 1s;
    color: white;
  }
`;