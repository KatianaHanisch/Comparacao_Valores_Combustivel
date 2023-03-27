import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #231f20;
`;

export const ContainerItens = styled.View`
  margin-top: 40px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
`;
export const TextoTitulo = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-top: 10px;
  color: #fff;
`;
export const Image = styled.Image`
  width: 170px;
  height: 170px;
`;
export const ContainerInputs = styled.View`
  width: 90%;
`;
export const TextoInput = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #ffff;
`;
export const Input = styled.TextInput`
  background-color: #ffff;
  width: 100%;
  height: 45px;
  border-radius: 5px;
  font-size: 18px;
  margin-bottom: 10px;
  padding-left: 10px;
`;

export const ContainerButton = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`;

export const Button = styled.TouchableOpacity`
  height: 45px;
  width: 50%;
  background-color: #f24333;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const ButtonTexto = styled.Text`
  color: #ffff;
  font-size: 20px;
  font-weight: bold;
`;
