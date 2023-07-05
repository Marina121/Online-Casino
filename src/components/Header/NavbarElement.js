import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #132b51;
  border: 1px solid rgb(14, 13, 13);
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #fc0;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: white;
  }
`;

export const Bars = styled(FaBars)`
  top: 0px;
  position: fixed !important;
  width: 100%;
  height: 60px;
  margin-bottom: 0px;
  z-index: 1040;
  background: #132b51;
  transition: 0.5s;
`;

export const NavMenu = styled.div`
  display: flex;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 90vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: -94px;
  /* Third Nav */
  /* justify-content: flex-end;
width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
color: #000;
background: #fc0;
border-radius: 4px;
padding: 10px 20px;
font-size: 16px;
display: inline-flex;
justify-content: center;
align-items: center;
font-style: normal;
font-family: SourceSansProRegular;
transition: .3s;
border: none;
text-shadow: none;
cursor: pointer;
  }
`;
