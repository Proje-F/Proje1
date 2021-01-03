import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Text from '../components/utils/UbuntuFont';
import Colors from '../constants/colors';


export default function (props) {
	return (
		<View>
			<View
				style={{
					paddingHorizontal: 20,
					height: 70,
					flexDirection: 'row',
					justifyContent: 'space-between',
					backgroundColor: '#0F0F21',
					alignItems: 'center',
					borderColor: '#0F0F21',
					borderBottomWidth: 1.5,
				}}
			>
				{props.withBack ? (
					<TouchableOpacity
						onPress={() => {
							props.navigation.goBack();
						}}
						style={{
							flex: 1,
							alignItems: 'flex-start',
							justifyContent: 'center',
						}}
					>
					</TouchableOpacity>
				) : (
					<View style={{ flex: 1, alignItems: 'flex-start' }} />
				)}

				<View
					style={{
						alignItems: 'center',
						flex: 5,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Text
						bold
						style={{
							color: Colors.topNavText,
							fontSize: 20,
						}}
					>
						{props.title}
					</Text>
				</View>
				<View
					style={{
						alignItems: 'flex-end',
						flex: 1,
						justifyContent: 'center',
					}}
				></View>
			</View>
		</View>
	);
}
