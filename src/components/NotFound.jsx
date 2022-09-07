import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NotFoundImage from './NotFoundImage';

function NotFound() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/movie/popular');
  };
  return (
    <Container>
      <NotFoundImage />
      <HomeButton onClick={handleHomeClick}>Home</HomeButton>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HomeButton = styled.button`
  border: none;
  width: 80px;
  height: 40px;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.BLACK};
  cursor: pointer;
`;

export default NotFound;
