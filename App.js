import { Image, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/HomeScreen/Home';
import FreeKundali from './Screens/KundaliScreen/FreeKundali';
import Connect from './Screens/ConnectScreen/Connect';
import OnlinePuja from './Screens/OnlinePujaScreen/OnlinePuja';
import Explore from './Screens/ExploreScreen/Explore';
import Ionicons from '@expo/vector-icons/Ionicons'

const Tab = createBottomTabNavigator();


const HomeName = "Home"
const FreeKundaliName = "Free Kundali"
const ConnectName = "Connect"
const OnlinePujaName = "Online Puja"
const Explorename = "Explore"


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={HomeName}
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
          tabBarStyle: [
            {
              "display": "flex",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              height: 80,
              borderWidth:0,
              elevation:7
            },
            null
          ],
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === HomeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === FreeKundaliName) {
              iconName = focused ? 'football' : 'football-outline';
            } else if (rn === OnlinePujaName) {
              iconName = focused ? 'laptop' : 'laptop-outline';
            } else if (rn === Explorename) {
              iconName = focused ? 'grid' : 'grid-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
        })}
      >
        <Tab.Screen name={HomeName} component={Home} />
        <Tab.Screen name={FreeKundaliName} component={FreeKundali} />
        <Tab.Screen name={ConnectName} component={Connect}
          options={{
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity>
                <View style={{
                  width: 70,
                  height: 70,
                  borderRadius: 80,
                  borderColor: '#737FF8',
                  borderWidth: 2,
                  backgroundColor: '#FFFFFF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: -30

                }}>
                  <Image source={require('./assets1/Group52.png')} style={{
                    width: 40,
                    height: 40,
                    // tintColor: 'white',
                  }} />
                </View>
              </TouchableOpacity>
            )
          }}
        />
        <Tab.Screen name={OnlinePujaName} component={OnlinePuja} />
        <Tab.Screen name={Explorename} component={Explore} />
      </Tab.Navigator>
    </NavigationContainer >
  );
}
