import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBarWrapper = styled.div`
  background-color: #e1f5fe;
`;

const HorizontalList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const ListItem = styled.li`
  float: left;
`;

const StyledLink = styled(Link)`
  display: block;
  color: #000;
  font-size: 14px;
  padding: 16px;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: #bbdefb;
  }
`;

export function NavBar() {
  return (
    <NavBarWrapper>
      <HorizontalList>
        <ListItem>
          <StyledLink to="/">Home</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/to-do">To-do</StyledLink>
        </ListItem>
      </HorizontalList>
    </NavBarWrapper>
  );
}

export default NavBar;
