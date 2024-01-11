import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/search-screen';
import DetailsScreen from './src/screens/details-screen';
import { AuthProvider } from './src/context/auth-context';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
        <AuthProvider>
        <Stack.Navigator initialRouteName='Search'>
          <Stack.Screen name='Search' component={SearchScreen} />
          <Stack.Screen name='Details' component={DetailsScreen}  />
        </Stack.Navigator>
    </AuthProvider>
      </NavigationContainer>
  );
};

export default App;
