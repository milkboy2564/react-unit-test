import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Loading from './Loading';

function Layout() {
  const onUpClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Outlet />
        <UpButton onClick={onUpClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            />
          </svg>
        </UpButton>
      </Suspense>
    </>
  );
}

const UpButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 60px;
  height: 60px;
  background-color: rgba(15, 15, 15, 0.6);
  color: white;
  border-radius: 50%;
  &:active {
    transform: scale(0.98);
  }
`;

export default Layout;
