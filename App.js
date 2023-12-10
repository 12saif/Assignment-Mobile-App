import AuthStack from "./navigation/AuthStack";
import { NavigationContainer } from "@react-navigation/native";


export default function App({ }) {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
