import { createStackNavigator } from '@react-navigation/stack';
import Home from '../views/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import About from '../views/About/About';

const { Navigator, Screen } = createStackNavigator();

export default function AppRoutes() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
                />
                <Screen
                name="About"
                component={About}
                options={{
                    headerShown: false
                }} 
                />
            </Navigator>
        </NavigationContainer>
    );
}