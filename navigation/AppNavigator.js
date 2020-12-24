import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Colors from '../constants/colors';
import TabBarIcon from '../components/utils/TabBarIcon';
import TabBarText from '../components/utils/TabBarText';

import Plans from '../screens/Plans';
import SecondScreen from '../screens/SecondScreen';
import Targets from '../screens/Targets';
import Nnew from '../screens/Nnew';
import Login from '../screens/Login';

const MainStack = createStackNavigator();
const Main = () => {
	return (
		<MainStack.Navigator
			screenOptions={{
				headerMode: 'none',
				headerShown: false,
			}}
		>
			<MainStack.Screen name="MainTabs" component={MainTabs} />
			<MainStack.Screen name="SecondScreen" component={SecondScreen} />
			<MainStack.Screen name="Nnew" component={Nnew} />
			<MainStack.Screen name="Login" component={Login} />

		</MainStack.Navigator>
	);
};

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
	return (
		<Tabs.Navigator
			tabBarOptions={{
				tabStyle: { borderTopWidth: 0 },
				style: { borderTopWidth: 0, borderColor: '#c0c0c0', backgroundColor: '#0F0F21' },
				activeTintColor: Colors.primary,
			}}
		>
			{/* these icons using Ionicons */}
			<Tabs.Screen
				name="Plans"
				component={Plans}
				options={{
					tabBarLabel: ({ focused }) => (
						<TabBarText focused={focused} title="Dizi/Film" />
					),
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} icon={'md-add'} />
					),
				}}
			/>
			<Tabs.Screen
				name="Targets"
				component={Targets}
				options={{
					tabBarLabel: ({ focused }) => (
						<TabBarText focused={focused} title="Keşfet" />
					),
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} icon={'md-search'} />
					),
				}}
			/>
			
		</Tabs.Navigator>
	);
};

export default () => {
	return (
		<NavigationContainer>
			<Main />
			
		</NavigationContainer>
	);
};
