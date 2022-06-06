import React from "react";
import { SafeAreaView, Text, Button } from "react-native";

const SettingScreen = (props) => {
  const { navigation } = props;

  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  };
  return (
    <SafeAreaView>
      <Text>Hello my friend SETTING SCREEN ⚙️</Text>
      <Button title="Ir a Home" onPress={() => goToPage("Home")} />
    </SafeAreaView>
  );
};

export default SettingScreen;
