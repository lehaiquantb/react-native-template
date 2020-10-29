import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../main';
import Screen1 from '../Container/Screen1/screen1';

export const Navigation = () => {
    const components = [
        { name: "Main", component: Main, options: {} },
        { name: "Screen1", component: Screen1, options: {} },
    ];
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {components.map((item, index) => {
                    return <Stack.Screen key={item.name} name={item.name} component={item.component} options={{ headerShown: false }} />
                })}
            </Stack.Navigator>
        </NavigationContainer>

    );
}
