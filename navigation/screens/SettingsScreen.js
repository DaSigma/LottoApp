import { View, Text } from "react-native";
import React from "react";

export default function SettingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => alert("This is the Settings Screen")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Settings Screen
      </Text>
    </View>
  );
}
