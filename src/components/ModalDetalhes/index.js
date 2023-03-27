import React from "react";

import {
  Container,
  TextoTitulo,
  Image,
  ContainerItens,
  Texto,
  TextoValores,
  ContainerButton,
  Button,
  ButtonTexto,
} from "./styles";

export default function ModalDetalhes({
  fechar,
  tipoCombustivel,
  valorAlcool,
  valorGasolina,
}) {
  return (
    <Container>
      <ContainerItens>
        <Image source={require("../../../assets/gas.png")} />
        <TextoTitulo>Compensa usar {tipoCombustivel}</TextoTitulo>
        <Texto>Com os preços:</Texto>
        <TextoValores>Álcool: R$ {valorAlcool}</TextoValores>
        <TextoValores>Gasolina: R$ {valorGasolina}</TextoValores>
        <ContainerButton>
          <Button onPress={fechar}>
            <ButtonTexto>Calcular novamente</ButtonTexto>
          </Button>
        </ContainerButton>
      </ContainerItens>
    </Container>
  );
}
