import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2021 test Inc.</SFooter>;
};

const SFooter = styled.header`
  background-color: #11999e;
  color: #fff;
  padding: 4px 8px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
