import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, AntDesign, Ionicons, MaterialCommunityIcons, FontAwesome, Feather } from "@expo/vector-icons";
// import { } from "@expo/vector-icons";
// import { } from "@expo/vector-icons";
// import { } from "@expo/vector-icons";
// import {  } from "@expo/vector-icons";
// import {  } from "@expo/vector-icons";

import Profile from "./src/screens/Profile";
import Settings from "./src/screens/Settings";
import FlawerList from "./src/screens/FlawerList";
import Preview from "./src/screens/Preview";

const Tab = createBottomTabNavigator();
//const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="FlawerList"
          component={FlawerList}
          options={{
            title: "Discover",
            headerTintColor: "#1e90ff",
            headerTitleAlign: "center",
            headerLeft: () => {
              return (
                <MaterialCommunityIcons
                  name="dots-grid"
                  size={24}
                  color="black"
                  style={styles.lefticon}
                />
              );
            },
            headerRight: () => {
              return (
                <Ionicons
                  name="search-outline"
                  size={24}
                  color="black"
                  style={styles.righticon}
                />
              );
            },
            tabBarIcon: () => {
              return (
                <Ionicons
                  name="ios-home-outline"
                  size={24}
                  color="dodgerblue"
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Preview"
          component={Preview}
          options={{
            title: "Discover",
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: {
              height: 150,
            },
            headerLeft: () => {
              return (
                <View style={styles.headerBefore}></View>
              )
            },
            headerRight: () => {
              return (
                <View style={styles.iconView}>
                  <FontAwesome
                    name="headphones"
                    size={24}
                    color="black"
                    style={styles.righticon}
                  />
                  <Entypo
                    name="heart-outlined"
                    size={24}
                    color="black"
                    style={styles.righticon}
                  />
                  <Entypo
                    name="share"
                    size={24}
                    color="black"
                    style={styles.righticon}
                  />
                </View>
              );
            },
            tabBarIcon: () => {
              return (
                <AntDesign name="folderopen" size={30} color="dodgerblue" />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => {
              return (
                <Ionicons name="person-outline" size={24} color="dodgerblue" />
              );
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: () => {
              return <Feather name="settings" size={24} color="dodgerblue" />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  iconView: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
  },

  lefticon: {
    marginLeft: 20,
  },

  righticon: {
    marginRight: 15,
    color: '#353535'
  },

  headerBefore: {
    width: 255,
    height: 225,
    borderTopWidth: 120,
    borderLeftWidth: 10,
    borderRadius: 1,
    borderColor: 'orange',
    position: 'absolute',
    top: -24,
    left: 0,

  }
});
