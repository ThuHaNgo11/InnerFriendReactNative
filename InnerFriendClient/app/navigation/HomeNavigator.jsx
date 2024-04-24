import { createStackNavigator } from "@react-navigation/stack";

import NewJournal from "../screens/Content/NewJournal";
import Insight from "../screens/Content/Insight";
import Home from "../screens/Content/Home";

const Stack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
        >
        {/* back button */}
            <Stack.Screen
                name="Home"
                component={Home} />
            <Stack.Screen name="NewJournal" component={NewJournal} />
            <Stack.Screen name="Insight" component={Insight} />
        </Stack.Navigator>
    );
}

export default HomeNavigator;