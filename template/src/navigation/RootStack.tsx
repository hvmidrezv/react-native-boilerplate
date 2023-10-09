import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '@src/components/screens/Home';

export type RootStackParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => (
  <Stack.Navigator>
    <Stack.Group>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Group>
  </Stack.Navigator>
);

export default RootStack;
