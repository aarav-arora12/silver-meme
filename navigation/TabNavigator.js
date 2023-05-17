React-navigation/bottom-tabs
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icon/Ionicons';
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ foucused, color, size }) => {
                    let iconName;
                    if (route.name === 'Feed') {
                        iconName = foucused
                            ? 'book'
                            : 'book-outline';
                    } else if (route.name ==='CreatePost') {
                        iconName = foucused ? 'create' : 'create-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Feed" component={Feed}/>
            <Tab.Screen name="CreatePost" component={CreatePost}/>
        </Tab.Navigator>
    );
}

export default BottomTabNavigator
        

        
           
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
            