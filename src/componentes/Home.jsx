import React from "react";
import styled from "styled-components";

export const Home = () => {
  return (
    <>
      
      <Container>
        <Title>Estamos en la Home Page</Title>
      </Container>
      <span>a partir de este lugar puede haber mas cosas</span>
    </>
  );
};
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h3`
  font-weight: 800;
`;
