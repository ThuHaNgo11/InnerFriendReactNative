// Give primary information about the app while the app contents load for a first-time.
// Check for the login session in EncryptedStorage:
//  - user_id -> Home screen 
//  - blank/null -> Login Screen

// app icon generator - https://www.appicon.co/#app-icon

import { checkAuthenticated } from '../apis/user';

import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
} from 'react-native';

const Splash = ({ navigation }) => {

    const [isAuthenticationChecked, setIsAuthenticationChecked] = useState(false);
    const [authResult, setAuthResult] = useState({ success: false, error: null });

    useEffect(() => {
        checkAuth = async () => {
            if (!isAuthenticationChecked) {
                const newAuthResult = await checkAuthenticated();
                setAuthResult(newAuthResult);
                setIsAuthenticationChecked(true);
            } else {
                // if (authResult.success) {
                //     navigation.navigate('BottomTabNavigator');
                // } else {
                    navigation.navigate('AuthNavigator');
                // }
            }
        }
        checkAuth();
    }, [isAuthenticationChecked]);

    return (
        <ImageBackground
            style={{
                flex: 1,
            }}
            source={require('../../assets/images/Onboard.png')}>
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.title}>InnerFriend</Text>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 180,
    },
});

export default Splash;
