import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { HomeScreen } from "./HomeScreen";
import { BrandsScreen } from "./BrandsScreen";
import { GenericsScreen } from "./GenericsScreen";
import { PharmasScreen } from "./PharmasScreen";
import { DrugClassesScreen } from "./DrugClassesScreen";
import { SearchResultsScreen } from "./SearchResultsScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#65adf1",
                },
                headerTintColor: "white",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "Medicine Reference" }}
            />
            <StackNavigator.Screen name="Brands" component={BrandsScreen} />
            <StackNavigator.Screen name="Generics" component={GenericsScreen} />
            <StackNavigator.Screen name="Pharmas" component={PharmasScreen} />
            <StackNavigator.Screen name="DrugClasses" component={DrugClassesScreen} />
            <StackNavigator.Screen name="SearchResults" component={SearchResultsScreen} />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);