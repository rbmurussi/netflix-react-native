import React, { useState } from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./routes/Tabs";
import Camera from "./screen/Camera";
import ChooseIcon from "./screen/ChooseIcon";
import ProfileToEdit from "./screen/ProfileToEdit";
import { ProfileContext } from "./context/ProfileContext";

const Stack = createStackNavigator();

const App = () => {
  const [user, newUser] = useState("Jose");
  console.log("user", user);
  return (
    <ProfileContext.Provider value={{ user, newUser }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Camera"
            component={Camera}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChooseIcon"
            component={ChooseIcon}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="ProfileToEdit"
            component={ProfileToEdit}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProfileContext.Provider>
  );
};

export default App;
