import React from "react";
import styled from "styled-components";

export const UserIconWithName = props => {
  const { src, name } = props;
  return (
    <SContainer>
      <SImg height={160} width={160} alt="プロフィール写真" src={src} />
      <SName>{name}</SName>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
