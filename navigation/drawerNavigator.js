import React,{Component} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../js/homeScreen";
import ProfileScreen from "../js/profileScreen";
import WriteReview from "../js/writeReview";

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component{
    render(){
        return(
            <Drawer.Navigator
            screenOptions={{
                headerShown: false, 
                drawerActiveTintColor: "#e91e63",
                drawerInactiveTintColor: "grey",
                itemStyle: { marginVertical: 5 }
              }}
            >
                <Drawer.Screen
                  name="Profile"
                  component={ProfileScreen}
                />

                <Drawer.Screen
                  name="Home"
                  component={HomeScreen}
                />

                <Drawer.Screen
                  name="WriteReview"
                  component={WriteReview}
                />
            </Drawer.Navigator>
        )
    }
}