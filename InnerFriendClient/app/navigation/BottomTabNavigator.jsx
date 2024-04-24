// after user logged in, the BottomTabNavigation will be rendered

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import Setting from '../screens/Content/Setting';
import JournalList from '../screens/Content/JournalList';
import Insight from '../screens/Content/Insight';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Content/Home';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'JournalList') {
            iconName = 'format-list-bulleted';
          } else if(route.name === 'Insight') {
            iconName = 'chart-line';
          } else if(route.name === 'Setting') {
            iconName = 'account-settings';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="JournalList"
        component={JournalList}
        options={{
          tabBarLabel: 'Journal List',
        }} />
      <Tab.Screen
        name="Insight"
        component={Insight}
        options={{
          tabBarLabel: 'Insight',
        }} />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: 'Setting',
        }} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;