import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/HomeScreen/Home';
import FreeKundali from './Screens/KundaliScreen/FreeKundali';
import Connect from './Screens/ConnectScreen/Connect';
import OnlinePuja from './Screens/OnlinePujaScreen/OnlinePuja';
import Explore from './Screens/ExploreScreen/Explore';
// import { Icon } from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={Home}
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
          tabBarStyle: [
            {
              "display": "flex"
            },
            null
          ],
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === Home) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === FreeKundali) {
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            } else if (rn === Connect) {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (rn === OnlinePuja) {
              iconName = focused ? 'person' : 'person-outline';
            } else if (rn === Explore) {
              iconName = focused ? 'person' : 'person-outline';
            }
            // return <Icon name={iconName} size={size} color={color} />
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="FreeKundali" component={FreeKundali} />
        <Tab.Screen name="Connect" component={Connect} />
        <Tab.Screen name="OnlinePuja" component={OnlinePuja} />
        <Tab.Screen name="Explore" component={Explore} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
