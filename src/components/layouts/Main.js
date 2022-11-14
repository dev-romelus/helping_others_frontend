import React from 'react'
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from './Navbar';

const Main = ({ className }) => {
  return (
    <main className={className}>
      <Navbar />
      <Outlet />
    </main>
  )
}

export default styled(Main)`
  height: 100%;
`;
