import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #1e1e2f;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:white;
  box-shadow: 0 4px 6px rgba(0,0,0,0,1);
`;

export const Nav = styled.nav`
  display:flex;
  gap:1.5rem;
  a{
    color:white;
    text-decoration:none;
    font-weight:500;
    transition: color 0.3s;
    &:hover{
      color:#00d8ff;
    }
  }
`;