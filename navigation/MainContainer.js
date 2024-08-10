import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "./screens/HomeScreen";
import SettinsScreen from "./screens/SettingsScreen";

const homeName = "Home";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRoutName={homeName}
          activeColor="#fff"
          inactiveColor="#000"
          barStyle={{
            backgroundColor: "blue",
            showLabel: false,
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              
              let iconName;
              let rn = route.name;

              if (rn === homeName) {

                iconName= focused ? "home" : "home-outline";
                color = focused ? "blue" : "home-outlined"
                
              } else if (rn === settingsName) {
                iconName = focused ? "cog" : "cog-outline";
                color = focused ? "blue" : "cog-outlined";
              }
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            },
            headerStyle: {
              backgroundColor: "white",
              height: 50,
            },
            headerTintColor: "black",
            label: false,
            tabBarStyle: {
              position: "absolute",
              bottom: 0,
              left: 20,
              right: 20,
              color: "red",
              elevation: 10,
              backgroundColor: "#ffffff",
              borderRadius: 50,
              height: 60,
            },
            tabBarInactiveTintColor: "gray",
            tabBarShowLabel: false,
          })}
        >
          <Tab.Screen name={homeName} component={HomeScreen} size={26} />
          <Tab.Screen name={settingsName} component={SettinsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
