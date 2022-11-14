import React from 'react';
import styled from 'styled-components';

import Conversations from '../helpers/Conversations';



const Sidebar = ({ className, handleToggle, toggle }) => {
  return (
    <div className={className}>
      <span onClick={() => handleToggle(!toggle)} className="material-symbols-outlined">menu</span>
      <div>
        <Conversations />
      </div>
    </div>
  )
}

export default styled(Sidebar)`
  width: ${({ toggle }) => toggle ? '276px' : 0};
  background-color: #f8c291;
  position: relative;
  transition: all 0.4s;

  > div {
    overflow: hidden;
    > div:nth-child(1) {
      width: 100%;
      padding: 12px;
      margin-bottom: 10px;
    }
  }

  > span {
    position: absolute;
    right: -28px;
    top: 50px;
    background-color: #f8c291;
    padding: 0.8px;
    border-radius: 4px;
    color: #fff;
    z-index: 99;
    cursor: pointer;
  }
`;