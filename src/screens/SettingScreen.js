import React from "react";
import { View, Text, Button } from "react-native";

const SettingScreen = (props) => {
  const { navigation } = props;

  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  };
  return (
    <View>
      <Text>Hello my friend SETTING SCREEN ⚙️</Text>
      <Button title="Ir a Home" onPress={() => goToPage("Home")} />
    </View>
  );
};

export default SettingScreen;
