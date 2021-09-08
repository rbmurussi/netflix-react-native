import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Camera from './screen/Camera';
import ChooseIcon from './screen/ChooseIcon';
import Tabs from './routes/Tabs';
import Home from './screen/Home';
import More from './screen/More';
import ProfileToEdit from './screen/ProfileToEdit';
import Building from "./screen/Building";

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
		<Stack.Navigator>
		<Stack.Screen name="Tabs"
		component={Tabs}
		options={{headerShown: false}}
		/>
		<Stack.Screen name="ProfileToEdit"
		component={Building}
		options={{headerShown: false}}
		/>
		<Stack.Screen name="Camera"
		component={Building}
		options={{headerShown: false}}
		/>
		<Stack.Screen name="ChooseIcon"
		component={Building}
		options={{headerShown: false}}
		/>
		<Stack.Screen name="Home"
		component={Home}
		options={{headerShown: false}}
		/>
		</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
