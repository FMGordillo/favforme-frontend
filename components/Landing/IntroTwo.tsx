import styled from "lib/styled";
import Image from "next/image";
import { FunctionComponent } from "react";
import { Text, Title } from "./styles";
const Container = styled.section`
  display: grid;
  margin: 0 12em;
  column-gap: 3em;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

const LeftSide = styled.div`
  justify-self: right;
  text-align: right;
`;
const RightSide = styled.div`
  justify-self: left;
`;

const IntroTwo: FunctionComponent = () => {
  return (
    <Container>
      <LeftSide>
        <Title>JUNTOS SIEMPRE ES MEJOR</Title>
        <Text>
          Muchas organizaciones dedican su vida ayudando en proyectos de impacto
          social y en la mayoría de los casos, se agotan por no contar con los
          recursos suficientes. Decidimos crear un entorno sostenible que
          vincula empresas y ONGs. El cambio lo hacemos entre todos.
        </Text>
      </LeftSide>
      <RightSide>
        <Image
          src="/images/image-4.png"
          alt="Gente ayudando"
          width={370}
          height={260}
        />
      </RightSide>
    </Container>
  );
};

export { IntroTwo };
