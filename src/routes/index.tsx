import { NavigationContainer } from '@react-navigation/native'

import { AppRoutes } from './app.routes'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecipeDetails } from '../screens/Recipe';

const { Screen, Navigator } = createNativeStackNavigator();
export function Routes() {
    return (
        <NavigationContainer >
            <Navigator screenOptions={{
                headerShown: false,
            }}>
                <Screen
                    name="home"
                    component={AppRoutes}
                />
                <Screen
                    name="recipe"
                    component={RecipeDetails}
                />
            </Navigator>
        </NavigationContainer>
    )
}