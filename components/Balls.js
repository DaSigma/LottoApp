import { Text, View } from "react-native";
import React, { Component } from "react";

export default function Balls(values, color) {
   console.log(values.values)

  return (
    <View
      className={`${values.color} shadow-inner h-10 w-10 rounded-full flex m-0 justify-center `}
    >
      <Text  className="self-center text-white">
        {values.values}
      </Text>

      {/* {Array.from(Array(values)).map((value, index) => {
        <Text key={index} className="self-center text-white">
          {value[index]}
        </Text>;
      })} */}
    </View>
  );
}
