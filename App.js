import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import
  {
    ActivityIndicator,
  } from 'react-native';
import Main from './navigation/AppNavigator';
import Colors from './constants/colors';

export default function App(props) {
	const [isLoadingComplete, setLoadingComplete] = useState(false);
	
	// if (!isLoadingComplete && !props.skipLoadingScreen) {
	// 	return (
	// 		<ActivityIndicator
	// 			startAsync={loadResourcesAsync}
	// 			onError={handleLoadingError}
	// 			onFinish={() => handleFinishLoading(setLoadingComplete)}
	// 		/>
	// 	);
	// } else {
		return (
			<SafeAreaView style={styles.container}>
				
				<Main />
			</SafeAreaView>
		);
	//}
}

async function loadResourcesAsync() {
	await Promise.all([
		Asset.loadAsync([
			require('./assets/icon.png'),
			require('./assets/splash.png'),
		]),
		Font.loadAsync({
			Ubuntu_300Light,
			Ubuntu_300Light_Italic,
			Ubuntu_400Regular,
			Ubuntu_400Regular_Italic,
			Ubuntu_500Medium,
			Ubuntu_500Medium_Italic,
			Ubuntu_700Bold,
			Ubuntu_700Bold_Italic,
		}),
	]);
}

function handleLoadingError(error) {
	console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
	setLoadingComplete(true);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
