import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HouseSimple, Info as InfoIcon, Hamburger } from 'phosphor-react-native';
import { Home } from '../screens/Home'
import { Info } from '../screens/Info';
import { Recipes } from '../screens/Recipes';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#E6CCAE', shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                height: 80,
                padding: 32,
            },
            tabBarLabel: '',

        }}>
            <Screen
                name="home"
                component={Home}
                options={{ tabBarIcon: ({ focused }) => (<HouseSimple color={focused ? '#fff' : '#000'} size={32} />) }}
            />
            <Screen
                name="info"
                component={Info}
                options={{ tabBarIcon: ({ focused }) => (<InfoIcon color={focused ? '#fff' : '#000'} size={32} />) }}
            />
            <Screen
                name="recipes"
                component={Recipes}
                options={{ tabBarIcon: ({ focused }) => (<Hamburger color={focused ? '#fff' : '#000'} size={32} />) }}
            />
        </Navigator>
    )
}