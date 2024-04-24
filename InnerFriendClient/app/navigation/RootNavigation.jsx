import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import Splash from '../screens/Splash';
import HomeNavigator from './HomeNavigator';

// createNativeStackNavigator is a function that 
// returns an object containing 2 properties: Screen and Navigator
const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS,
                    animationEnabled: true,
                    gestureEnabled: true,
                    gestureDirection: "horizontal",
                }}
            >
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
                <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;