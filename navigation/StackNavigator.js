// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import { Button, View } from "react-native";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
    headerTitleAlign:'center',
};

const MainStackNavigator = ({navigation}) => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home}
                options={{
                    headerLeft: () => (
                        <View style={{marginHorizontal:10,}}>
                            <Button
                                onPress={() => navigation.openDrawer()}
                                title="click me"
                                color="#000000"
                            />
                        </View>
                    ),
                }}
            />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    );
};

const ContactStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
    );
};

export { MainStackNavigator, ContactStackNavigator };