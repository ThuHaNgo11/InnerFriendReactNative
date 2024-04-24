// Loading screen
// This component is used to display a loading screen when the app is fetching data from the server

import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import styles from '../style';

const LoadingScreen = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.text}>Loading...</Text>
        </View>
    )
}