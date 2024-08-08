import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Lotto from "../../components/Lottos";

export default function HomeScreen({ navigation }) {
   
   const [num1, setNum1] = React.useState('')


  return (

    <View style={[styles.container]}>
      <View style={styles.lotto}>
        <Text style={styles.circle}>{num1}</Text>
        <Text style={styles.circle}>14</Text>
        <Text style={styles.circle}>36</Text>
        <Text style={styles.circle}>5</Text>
        <Text style={styles.circle}>9</Text>
      </View>
      <View style={[styles.container]}>
        <View style={[styles.circleLabel]}>
          <Text
            style={{
              color: "black",
              fontWeight: "500",
              textAlign: "center",
              flex: 1,
            }}
          >
          </Text>
          <Text
            style={{ color: "black", fontWeight: "500", textAlign: "center" }}
          >
            15
          </Text>
        </View>
        <View style={styles.container}>
          <Button title="generate" style={styles.button}>
            Generate
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lotto: {
    flexDirection: "row",
    height: 120,
    padding: 12,
  },
  button: {
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "green",
  },

  circleLabel: {
    flexDirection: "row",
    padding: 8,
    backgroundColor: "green",
    marginTop: 28,
    height: 120,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  circle: {
     flex: 1,
     backgroundColor: "grey",
     margin: 10,
     borderRadius: 50,
     textAlign: "center",
     textAlignVertical: "center",
     height: 40,
  },
});
