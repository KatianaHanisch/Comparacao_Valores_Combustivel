import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #231f20;
`;
export const ContainerItens = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 40px;
`;

export const TextoTitulo = styled.Text`
  font-size: 27px;
  font-weight: bold;
  color: #6ede8a;
  margin-top: 5px;
`;

export const Image = styled.Image`
  width: 170px;
  height: 170px;
`;

export const Texto = styled.Text`
  font-weight: bold;
  font-size: 22px;
  color: #fff;
  margin-bottom: 5px;
  margin-top: 15px;
`;
export const TextoValores = styled.Text`
  color: #ddd;
  font-size: 18px;
`;
export const ContainerButton = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
`;

export const Button = styled.TouchableOpacity`
  height: 45px;
  width: 70%;
  border-radius: 5px;
  border: 2px solid #f24333;
  align-items: center;
  justify-content: center;
`;

export const ButtonTexto = styled.Text`
  color: #f24333;
  font-size: 20px;
  font-weight: bold;
`;
