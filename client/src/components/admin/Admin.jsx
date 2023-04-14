import React from "react";
import styled from "styled-components";
import Sidebar from './Sidebar'
import Dashboard from "./Dashboard";
export default function Admin() {
  return (
    <Div>
      <Sidebar />
      <Dashboard />
    </Div>
  );
}

const Div = styled.div`
  position: relative;
`;