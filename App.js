import React, { useState } from "react";
import { StatusBar, Modal } from "react-native";

import ModalDetalhes from "./src/components/ModalDetalhes";

import {
  Container,
  TextoTitulo,
  Image,
  ContainerItens,
  ContainerInputs,
  Input,
  TextoInput,
  ContainerButton,
  Button,
  ButtonTexto,
} from "./styles";

export default function App() {
  const [precoGasolina, setPrecoGasolina] = useState(null);
  const [precoAlcool, setPrecoAlcool] = useState(null);
  const [abrirModal, setAbrirModal] = useState(false);
  const [recomendacao, setRecomendacao] = useState("");

  const totalDivisao = precoAlcool / precoGasolina;

  function calcularPrecos() {
    if (precoGasolina == null || precoAlcool == null) return;

    if (totalDivisao < 0.7) {
      setRecomendacao("Álcool");
    } else {
      setRecomendacao("Gasolina");
    }

    setAbrirModal(true);
  }

  function fecharModal() {
    setAbrirModal(false);
    setPrecoAlcool(null);
    setPrecoGasolina(null);
  }

  return (
    <Container>
      <ContainerItens>
        <Image source={require("./assets/logo.png")} />
        <TextoTitulo>Qual a melhor opção?</TextoTitulo>
      </ContainerItens>
      <ContainerInputs>
        <TextoInput>Álcool (preço por litro)</TextoInput>
        <Input
          value={precoAlcool}
          keyboardType="numeric"
          onChangeText={(value) => setPrecoAlcool(value)}
        />
        <TextoInput>Gasolina (preço por litro)</TextoInput>
        <Input
          value={precoGasolina}
          keyboardType="numeric"
          onChangeText={(value) => setPrecoGasolina(value)}
        />
      </ContainerInputs>
      <ContainerButton>
        <Button onPress={calcularPrecos}>
          <ButtonTexto>Calcular</ButtonTexto>
        </Button>
      </ContainerButton>
      <Modal visible={abrirModal} animationType="slide" transparent={false}>
        <ModalDetalhes
          fechar={fecharModal}
          tipoCombustivel={recomendacao}
          valorGasolina={precoGasolina}
          valorAlcool={precoAlcool}
        />
      </Modal>
      <StatusBar barStyle="ligth-content" backgroundColor="#231f20" />
    </Container>
  );
}
