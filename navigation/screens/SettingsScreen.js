import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Balls from "../../components/Balls";
import { styled } from "nativewind";
import data from "../../datasets/games.json";
const StyledView = styled(View);

export default function SettingScreen({ navigation }) {
  const bg_img = require("../../assets/lotto-online-1.png");
  const [balls, setBalls] = useState(data.games);
  const [num, setNum] = useState(0);
  const [isExtraBall, setExtraBall] = useState(false);

  useEffect(() => {
    setNum(data.games[3].balls);
    setExtraBall(data.games[2].extra_ball);
  }, []);

  return (
<View></View>
  );
}
