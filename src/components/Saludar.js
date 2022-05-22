import React from "react";
import { Text } from "react-native";

function Saludar(props) {
  const { nombre, apellido } = props;
  console.log(nombre, apellido);

  return (
    <Text>
      Hola {nombre} {apellido}
    </Text>
  );
}

/* function Saludar({ nombre, apellido }) {
  return (
    <Text>
      Hello {nombre} {apellido}
    </Text>
  );
} */

/* function Saludar(props) {
  return (
    <Text>
      Hello {props.nombre} {props.apellido}
    </Text>
  );
} */

Saludar.defaultProps = {
  nombre: "Legendary",
  apellido: "Developer",
};

export default Saludar;
