import {
    TransitionPresets,
    createStackNavigator,
} from "@react-navigation/stack";


import Login from "../screens/Auth/Login";
import Signup from "../screens/Auth/Signup";

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Onboard"
            screenOptions={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS,
                animationEnabled: true,
                gestureEnabled: true,
                gestureDirection: "horizontal",
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    );
}

export default AuthNavigator;