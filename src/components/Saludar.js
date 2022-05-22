import React from "react";
import { Text } from "react-native";

function Saludar(props) {
  console.log(props.nombre);
  return <Text>Hola {props.nombre}</Text>;
}

export default Saludar;
