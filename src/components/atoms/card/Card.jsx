import React from "react";
import styled from "styled-components";

export const Card = props => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  padding: 16px;
  box-shadow: #ddd 0px 0px 4px 2px;
  background-color: #fff;
  border-radius: 8px;
`;
