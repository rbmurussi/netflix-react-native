import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Entypo';

import Home from './screen/Home';
import More from './screen/More';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Tab.Navigator tabBarOptions = {{
         backgroundColor: 'brack',
         activeTintColor: 'white',
         style: {
            backgroundColor: '#1a1718',/*cinza*/
            borderTopColor: 'transparent',
            },
        }}>
            <Tab.Screen name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: {{color, size}} => {
                        <Icon name="home" size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen name="Busca"
                component={More}
                options={{
                    tabBarLabel: 'Busca',
                        tabBarIcon: {{color, size}} => {
                    <Icon name="search1" size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen name="Em breve"
                component={More}
                options={{
                    tabBarLabel: 'Em breve',
                        tabBarIcon: {{color, size}} => {
                    <Icon name="controller-play" size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen name="Download"
                component={More}
                options={{
                    tabBarLabel: 'Download',
                        tabBarIcon: {{color, size}} => {
                    <Icon name="download" size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen name="Mais"
                component={More}
                options={{
                    tabBarLabel: 'Mais',
                        tabBarIcon: {{color, size}} => {
                    <Icon name="menu" size={size} color={color} />
                    }
                }}
            />
        </Tab.Navigator>
    );
}