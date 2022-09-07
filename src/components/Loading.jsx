import React from 'react';
import styled, { keyframes } from 'styled-components';

function Loading() {
  return <Spinner />;
}

const spin = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  position: fixed;
  top: 50%;
  left: 50%;

  &::after {
    content: ' ';
    display: block;
    width: 45px;
    height: 45px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid black;
    border-color: black transparent black transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`;

export default Loading;
