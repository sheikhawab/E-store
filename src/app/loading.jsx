"use client"
import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <section className="dots-container">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </section>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full height of the viewport */
  
  .dots-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dot {
    height: 20px;
    width: 20px;
    margin-right: 10px;
    border-radius: 50%;
    background-color: #F9A8D4; /* Light pink */
    animation: pulse 1.5s infinite ease-in-out;
  }

  .dot:last-child {
    margin-right: 0;
  }

  .dot:nth-child(1) {
    animation-delay: -0.3s;
  }

  .dot:nth-child(2) {
    animation-delay: -0.1s;
  }

  .dot:nth-child(3) {
    animation-delay: 0.1s;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.8);
      background-color: #F9A8D4;
      box-shadow: 0 0 0 0 rgba(249, 168, 212, 0.7);
    }

    50% {
      transform: scale(1.2);
      background-color: #EC4899; /* Pink color */
      box-shadow: 0 0 0 10px rgba(249, 168, 212, 0);
    }

    100% {
      transform: scale(0.8);
      background-color: #F9A8D4;
      box-shadow: 0 0 0 0 rgba(249, 168, 212, 0.7);
    }
  }
`;

export default Loader;

