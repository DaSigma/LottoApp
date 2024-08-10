import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Lotto from "../../components/Lottos";
import { BoxShadow } from "react-native-shadow";
import { styled } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import Games from "../../components/Games";
const StyledView = styled(View);
const StyledText = styled(Text);

export default function HomeScreen({ navigation }) {
  const [num1, setNum1] = React.useState("");
  const bg_img = require("../../assets/lotto-online-1.png");

  const shadowOpt = {
    width: 40,
    height: 40,
    color: "#000",
    border: 2,
    borderRadius: 20,
    radius: 5,
    opacity: 0.5,
    x: 0,
    y: 0.1,
    style: { marginVertical: 4 },
  };

  return (
   <Games/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gameContainer: {},
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  background: {
    flex: 1,
    backgroundColor: "red",
  },
  image: {
    opacity: 0.2,
  },
  numberSection: {
    flexDirection: "row",
    height: 80,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 40,
    marginLeft: 25,
    marginRight: 25,
  },
  button: {
    justifyContent: "center",
    borderRadius: 50,
    //  backgroundColor: "green",
  },

  gameSection: {
    flexDirection: "row",
    padding: 8,
    //  backgroundColor: "green",
    height: 320,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  circle: {
    flex: 1,
    backgroundColor: "red",
    margin: 10,
    borderRadius: 50,
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    height: 40,
  },
  buttonSection: {
    flexDirection: "row",
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    //  backgroundColor: "grey",
  },
});
