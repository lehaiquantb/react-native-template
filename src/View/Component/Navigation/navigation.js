import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../main';
import Screen1 from '../Container/Screen1/screen1';
import Screen2 from '../Container/Screen2/Screen2';
import Screen3 from '../Container/Screen3/screen3';
import Screen4 from '../Container/Screen4/screen4';
import Screen5 from '../Container/Screen5/screen5';

export const Navigation = () => {
    const components = [
        { name: "Main", component: Main, options: {} },
        { name: "Screen1", component: Screen1, options: {} },
        { name: "Screen2", component: Screen2, options: {} },
        { name: "Screen3", component: Screen3, options: {} },
        { name: "Screen4", component: Screen4, options: {} },
        { name: "Screen5", component: Screen5, options: {} },
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
