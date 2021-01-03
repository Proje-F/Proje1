import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../constants/colors';
import TabBarIcon from '../components/utils/TabBarIcon';
import TabBarText from '../components/utils/TabBarText';
import
  {
    Image,
  } from 'react-native';
import Plans from '../screens/Plans';
import Targets from '../screens/Targets';

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
			<Tabs.Screen
				name="Plans"
				component={Plans}
				options={{
					tabBarLabel: ({ focused }) => (
						<TabBarText focused={focused} title="Kitap" />
					),
					tabBarIcon: ({ focused }) => (
						// <TabBarIcon focused={focused} icon={'md-add'} />
						<Image
                		// style={styles.stretch}
                		source={require('../assets/32.png')}
              		/> 
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
					// 	<TabBarIcon focused={focused} icon={'md-search'} />
					<Image
                		// style={styles.stretch}
                		source={require('../assets/search.png')}
              		/> 
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
