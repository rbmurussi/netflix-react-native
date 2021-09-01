import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Camera from './screen/Camera';
import ChooseIcon from './screen/ChooseIcon';
import Tabs from './routes/Tabs';
import Home from './screen/Home';
import More from './screen/More';
import ProfileToEdit from './screen/ProfileToEdit';

const Stack = createNativeStackNavigator();

/*const App = () => {
	return <Home />
}*/

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Tabs"
					component={Tabs}
					options={{headerShown: false}}
				/>
				<Stack.Screen name="ProfileToEdit"
					component={ProfileToEdit}
					options={{headerShown: false}}
				/>
				<Stack.Screen name="Camera"
					component={Camera}
					options={{headerShown: false}}
				/>
				<Stack.Screen name="ChooseIcon"
					component={ChooseIcon}
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



export default App
