import { Image, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/HomeScreen/Home';
import Game from './Screens/GameScreen/Game';
import Notification from './Screens/NotificationScreen/Notification';
import Profile from './Screens/ProfileScreen/Profile';
import Ionicons from '@expo/vector-icons/Ionicons'

const Tab = createBottomTabNavigator();


const HomeName = "Home"
const game = "Game"
const notifications = "Notification"
const profile = "Profile"


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{ showLabel: false }}
        initialRouteName={HomeName}
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === HomeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === game) {
              iconName = focused ? 'game-controller' : 'game-controller-outline';
            } else if (rn === notifications) {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (rn === profile) {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
        })}
      >
        <Tab.Screen name={HomeName} component={Home} />
        <Tab.Screen name={game} component={Game} />
        <Tab.Screen name={notifications} component={Notification} />
        <Tab.Screen name={profile} component={Profile} />
      </Tab.Navigator>
    </NavigationContainer >
  );
}
