import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer,DefaultTheme} from '@react-navigation/native';
import { useFonts } from "expo-font";
import Home from './screens/Home/Home.js'
import Details from './screens/Details/Details.js'
const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background:"transparent",
  },
}
const App = () => {
  const [loaded] = useFonts({
    InterBold:require("./assets/assets/fonts/Inter-Bold.ttf"),
    InterLight:require("./assets/assets/fonts/Inter-Light.ttf"),
    InterMedium:require("./assets/assets/fonts/Inter-Medium.ttf"),
    InterRegular:require("./assets/assets/fonts/Inter-Regular.ttf"),
    InterSemiBold:require("./assets/assets/fonts/Inter-SemiBold.ttf"),
    });
    if(!loaded) return null;
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenoptions={{headerShown:false}} initialroutename="Home" >
        <Stack.Screen  name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App