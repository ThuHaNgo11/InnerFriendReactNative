import 'react-native-gesture-handler';
import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import {
    SafeAreaProvider
} from 'react-native-safe-area-context';

import RootNavigation from './navigation/RootNavigation';
const App = props => {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <RootNavigation />
            </View>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;